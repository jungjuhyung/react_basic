import React, { useState } from "react";
import Calc4Sub from "./Calc4Sub";

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}
function toCelsius(fahrenheit){
    return((fahrenheit - 32) * 5 ) / 9;
  }
  function toFahrenheit(celsius){
      return(celsius * 9 ) / 5 + 32;
  }
  
  function tryConvert(temperature, convert){
      return convert(temperature) ;
  }
  
function Calc4(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('');

    // 화씨 , 섭씨 
    const handleCelsiusChange = (temperature) =>{
        setTemperature(temperature);
        setScale("c");
    }
    const handleFahrenheitChange = (temperature) =>{
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale ==="f" ? tryConvert(temperature, toCelsius) : temperature ;
    const fahrenheit = scale === "c"? tryConvert(temperature, toFahrenheit) : temperature ;

    return(
        <div>
            <Calc4Sub scale="c"  temperature = {celsius} onTemperatureChange= { handleCelsiusChange }/>
            <Calc4Sub scale="f" temperature = {fahrenheit} onTemperatureChange= {handleFahrenheitChange} />
            <BoilingVerdict celsius={celsius}  />
        </div>
    )
}

export default Calc4 ;
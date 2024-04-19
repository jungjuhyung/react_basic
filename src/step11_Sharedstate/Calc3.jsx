import React, { useState } from "react";

const scaleNames = {
    c : '섭씨',
    f : '화씨'
};

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function TemperatureInput(props){
    const handleChange = (e) =>{
       props.onTemperatureChange(e.target.value);
    };
    return(
        <fieldset>
            <legend>온도를 입력해주세요(단위 : {scaleNames[props.scale]}) : </legend>
            <input 
              type="number"
              value={props.temperature}
              onChange={handleChange} />
        </fieldset>
    )
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

function Calc3(props) {
    // 입력값에 따라 번하는 온도와 화씨, 섭씨 state 지정
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('');

    // input에 입력된 화씨 온도 값이 변할 때마다 state 변경
    // 해당 함수는  TemperatureInput의 props로 넘어가서 TemperatureInput에서 실행된다.
    const handleCelsiusChange = (temperature) =>{
        setTemperature(temperature);
        setScale("c");
    }
    
    // input에 입력된 섭씨 온도 값이 변할 때마다 state 변경
    // 해당 함수는  TemperatureInput의 props로 넘어가서 TemperatureInput에서 실행된다.
    const handleFahrenheitChange = (temperature) =>{
        setTemperature(temperature);
        setScale("f");
    }

    // 실제 
    const celsius = scale ==="f" ? tryConvert(temperature, toCelsius) : temperature ;
    const fahrenheit = scale === "c"? tryConvert(temperature, toFahrenheit) : temperature ;

    return(
        <div>
            <TemperatureInput scale="c"  temperature = {celsius} onTemperatureChange= { handleCelsiusChange }/>
            <TemperatureInput scale="f" temperature = {fahrenheit} onTemperatureChange= {handleFahrenheitChange} />
            <BoilingVerdict celsius={celsius}  />
        </div>
    )
}

export default Calc3 ;
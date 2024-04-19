import React, { useState } from "react";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

const scaleNames= {
    c : "섭씨",
    f : "화씨"
}

// 섭씨
function ToCelsius(fah) {
    return((fah -32)*5)/9;
}
// 화씨
function ToFahrenheit(cel) {
    return (cel * 9)/5 + 32;
}


function TryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    // 숫자 타입 검사
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);

    // 소수점 셋째 자리까지 구해진다.
    const result = Math.round(output * 1000) / 1000;
    return result;
}

function TemperatureInput(props) {
    const[temperature, setTemperature] = useState("");

    const handleChange = (e) => {
        setTemperature(e.target.value)
    }

    return(
        <fieldset>
            <legend>온도를 입력하세요(단위 :{scaleNames[props.scale]}) : </legend>
            <input type="text" value={temperature} onChange={handleChange} />
            <BoilingVerdict celsius={temperature} />
        </fieldset>
    )
}

function Calc2(props) {
    return(
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    )
}
export default Calc2
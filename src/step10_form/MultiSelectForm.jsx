import React, { useState } from "react";

function MultiSelectForm(props) {
    const [fruit_name, setFruit_name] = useState([])

    const handleChange = (e) => {
        // select의 값이 여러개일 때의 배열 처리
        const fruitArr = Array.from(e.target.selectedOptions, option => option.value);
        setFruit_name(fruitArr)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("선택한 과일들 : ", fruit_name);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 여러개 선택하세요 : 
                <select multiple onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="grape">포도</option>
                    <option value="banana">바나나</option>
                    <option value="mango">망고</option>
                </select>
            </label>
            <button type="submit">보내기</button>
        </form>            
    )
}

export default MultiSelectForm
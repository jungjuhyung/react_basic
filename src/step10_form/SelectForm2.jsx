import React, { useState } from "react";

function SelectForm2(props) {
    const [fruit_arr, setFruit_arr] = useState([]);

    const handleChange = (e) => {
        setFruit_arr(e.target.value);
    }

    const handleSubmit = (e) => {
        alert("선택한 과일 : "+ fruit_arr)
        e.preventDefault();
    }

    // form은 state에서 관리해야하기 때문에 useState를 사용해야한다.
    // value={m_name}
    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요 : 
                <select value={fruit_arr} onChange={handleChange} multiple={true}>
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
export default SelectForm2;
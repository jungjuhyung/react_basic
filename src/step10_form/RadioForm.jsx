import React, { useState } from "react";

function RadioForm(props) {
    const [selectedFruits, setSelectedFruits] = useState();

    const handleChange = (e) => {
        setSelectedFruits(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("선택한 과일 : ", selectedFruits);
    }

    return(
        <form onSubmit={handleSubmit}>
            {/* react에서는 name을 같게 하지 않아도 radio가 정상 작동한다. */}
            <label>
                과일을 여러개 선택하세요 : 
                <input type="radio" value="apple" checked={selectedFruits === "apple"} 
                onChange={handleChange}
                />Apple
            </label>
            <label>
                <input type="radio" value="banana" checked={selectedFruits === "banana"} 
                onChange={handleChange}
                />바나나
            </label>
            <label>
                <input type="radio" value="grape" checked={selectedFruits === "grape"} 
                onChange={handleChange}
                />포도
            </label>
            <label>
                <input type="radio" value="mango" checked={selectedFruits === "mango"} 
                onChange={handleChange}
                />망고
            </label>
            <button type="submit">보내기</button>
        </form>            
    )
}

export default RadioForm
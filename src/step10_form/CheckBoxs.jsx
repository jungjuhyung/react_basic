import React, { useState } from "react";

function CheckBoxs(props) {
    const [selectedFruits, setSelectedFruits] = useState([])

    const handleChange = (e) => {
        // select의 값이 여러개일 때의 배열 처리
        const {value, checked} = e.target;
            
        // 체크된 경우에는 선택된 과일을 selectedFruits 추가, 아닌 경우는 제거
        if(checked){
            // ... 같은 것들을 객체의 전개 연산자(spread operator)라고 한다.
            // ...selectedFruits : ...의 의미는 ...뒤에 오는 객체나 값을 복사해서 사용한다.
            // set함수는 완전히 새로운 state를 생성하게 된다.
            // 그러나 react에서 state는 불변성을 유지해야하기 때문에
            // 여러 값 중 한개만 바뀌다라도 기존에 형태를 복사해서 만든 다음에 변경하려는 값을 바꿔야한다.
            setSelectedFruits([...selectedFruits, value]);
        }else{
            // 일치하지 않은 것의 모임
            setSelectedFruits(selectedFruits.filter(k => k !== value))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("선택한 과일들 : ", selectedFruits);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                {/*selectedFruits.includes("값") : selectedFruits 배열 안에 값이 있으면 true, 없으면 false */}
                과일을 여러개 선택하세요 : 
                <input type="checkbox" value="apple" checked={selectedFruits.includes("apple")} 
                onChange={handleChange}
                />Apple
                <input type="checkbox" value="banana" checked={selectedFruits.includes("banana")} 
                onChange={handleChange}
                />바나나
                <input type="checkbox" value="grape" checked={selectedFruits.includes("grape")} 
                onChange={handleChange}
                />포도
                <input type="checkbox" value="mango" checked={selectedFruits.includes("mango")} 
                onChange={handleChange}
                />망고
            </label>
            <button type="submit">보내기</button>
        </form>            
    )
}

export default CheckBoxs
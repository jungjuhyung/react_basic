import React from "react";

// 함수에 전달되는 데이터 = Arguments = 매개변수
// 이벤트 핸들러에 매개변수 전달하는 방법
function Sample03(props) {
    
    const handleDelete = (id, event) => {
        console.log("id : ", id);
        console.log("event.target : ", event.target.innerText);
        console.log("event.target : ", event.target.textContent);
    }

    return(
        <div>
            <button onClick={(event) => handleDelete(1, event)}>눌러주세요</button>
        </div>
    )
}

export default Sample03;
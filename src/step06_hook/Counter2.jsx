import React, { useState } from "react";

function Counter2(props) {
    const[count2, setCount2] = useState(0);
    const[name, setName] = useState("hong");
    function countUp(props) {
        setCount2(count2 + 1);
    }

    function changName() {
        const newName = name === "hong" ? "kim" : "hong";
        setName(newName);
    }

    return(
        <div>
            <div>{count2}</div>
            <button onClick={countUp}>증가</button>
            <hr/>
            <h2>{name}</h2>
            <button onClick={changName}>이름변경</button>
        </div>
    )
}
export default Counter2;
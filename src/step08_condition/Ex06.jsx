import React, { useState } from "react";
import Ex06_sub from "./Ex06_sub";

function Ex06(props) {
    const[showWarning, setShowWarning] = useState(false)

    const handleToggleClick = () => {
        setShowWarning(!showWarning)
    }

    return(
        <div>
            <Ex06_sub warning={showWarning}/>
            <button onClick={handleToggleClick}>{showWarning ? "감추기":"보이기"}</button>
        </div>
    )
}

export default Ex06;
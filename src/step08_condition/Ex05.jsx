import React, { useState } from "react";
import Ex05_btn from "./Ex05_btn";

function Ex05(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const onClickLogin = () => {
        setIsLoggedIn(true)
    }
    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return(
        <div>
            <Ex05_btn isLoggedIn={isLoggedIn} onClickLogout={onClickLogout} onClickLogin={onClickLogin}/>
            <div>리엑트 공부~(본문)</div>
        </div>
    )
}

export default Ex05;
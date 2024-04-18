import React, { useState } from "react";
import Ex01 from "./Ex01";
import { LogInButton, LogOutButton } from "./Ex02_in_out";

function Ex02(props) {
    const [isLogged, setIsLogged] = useState(false)

    const handleLogInClick = () => {
        setIsLogged(true)
    }
    const handleLogOutClick = () => {
        setIsLogged(false)
    }

    let button;

    // 여기서 onClick은 handleLogOutClick이라는 함수를 LogOutButton Component에 보내준다.
    // 그러면 최종적으로 보이는 Ex02_in_out 안에 Component들은 useState hook 함수를 가진 버튼이 된다.
    if (isLogged) {
        button = <LogOutButton onClick={handleLogOutClick}/>
    }else{
        button = <LogInButton onClick={handleLogInClick}/>
    }

    // isLogged에 따라서 button변수의 component가 달라진다.
    return(
        <div>
            <Ex01 isLoggedIn={isLogged} /> {button}
        </div>
    )
}

export default Ex02;
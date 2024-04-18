import React, { useState } from "react";
import { LogInButton, LogOutButton } from "./Ex02_in_out";
import Ex01 from "./Ex01";

function Ex04(props) {
    const [isLogged, setIsLogged] = useState(false)

    const handleLogInClick = () => {
        setIsLogged(true)
    }
    const handleLogOutClick = () => {
        setIsLogged(false)
    }

    return(
        <div>
            <Ex01 isLoggedIn={isLogged} />
            {isLogged? <LogOutButton onClick={handleLogOutClick}/>:<LogInButton onClick={handleLogInClick}/>}
        </div>
    )
}

export default Ex04;
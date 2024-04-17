import React from "react";

function Light({room, on, toggle}) {
    console.log({room, on});
    return(
        <button onClick={toggle}>
            {room} {on ? "💡" : "⬛"}
        </button>
    )
}

// useCallback()을 사용하기 위해서는 이렇게 보내야한다.
// props 값이 변경되지 않은 한 다시 호출 되지 않는다는 뜻
export default React.memo(Light);
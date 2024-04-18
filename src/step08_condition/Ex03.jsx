import React from "react";

// 단축 평가1 : 조건1 && 조건2 일때 조건1이 false이면 조건2를 연산하지 않고 바로 false를 반환한다.
// 단축 평가2 : 조건1 || 조건2 일때 조건1이 true이면 조건2를 연산하지 않고 바로 true를 반환한다.
function Ex03(props) {
    const msg = props.msg;

    return(
        <div>
            <h1>안녕하세요.</h1>
            {msg.length > 0 &&
                <h2>현재 {msg.length}개의 읽지 않은 메세지가 있습니다.</h2>
            }
        </div>
    )
}

export default Ex03;
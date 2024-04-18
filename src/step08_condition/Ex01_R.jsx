import React from "react";

export function Ex01_T(props) {
    return (<h1>환영합니다.</h1>)
}

export function Ex01_F(props) {
    return (<h1>로그인 해주세요.</h1>)
}
// 함수 앞에 export를 쓰지 않고 아래처럼 보낼 수도 있다.
// export {Ex01_T, Ex01_F}
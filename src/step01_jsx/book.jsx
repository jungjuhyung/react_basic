
// React 임포트 하기
import React from "react";

// funtion 이름은 파일명과 같게 만드는게 원칙
// 첫글자는 대문자이다.
// 파라미터는 props(property)를 쓰는 경우가 많다.

// .jsx 파일 전체를 component라고 하고 안에 있는 태그들을 element라고 한다.
function Book(props) {
    return(
        <div>
            {/* {} 안에 있는 내용은 홑따옴표가 아닌 ``(삐침)이다. */}
            {/* `` 안에서는 ${}를 통해 변수나 객체를 사용할 수 있다. */}
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</h2>
        </div>
    )
}

export default Book;
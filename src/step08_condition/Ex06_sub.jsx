import React from "react";

function Ex06_sub(props) {
    if (! props.warning) {
        // 렌더링 하고 싶지 않을 때 null을 반환한다.
        // 즉 현재 페이지 유지
        return null;
    }
    return(
        <div>
            경고~~~~~~~~~~
        </div>
    )
}

export default Ex06_sub;
import React from "react";

function Ex01(props) {
    const {list} = props;
    const listItems = list.map((k, index)=>{
        return(
            // 개발자 도구로 보면 key 때문에 오류가 발생한다.
            //< li>{k}</li>

            // key에 들어가는 값은 중복되어서는 안된다.
            <li key={index}>{k}</li>
        )
    });

    return(
        <ul>{listItems}</ul>
    )   
}

export default Ex01;
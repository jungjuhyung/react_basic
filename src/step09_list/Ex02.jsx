import React from "react";

function Ex02(props) {
    const msg = [
        {
            idx : 1,
            name:"hong",
            age : 14
        },
        {
            idx : 2,
            name: "hong",
            age : 14
        },
        {
            idx : 3,
            name: "kim",
            age : 14
        }
    ]

    const list = msg.map((k)=>{
        return(
            <li key={k.idx}>이름 : {k.name}, 나이 : {k.age}</li>
        )
    })

    return(
        <ul>
            {list}
        </ul>
    )
}
export default Ex02;
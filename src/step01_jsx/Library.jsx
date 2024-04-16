import React from "react";
import Book from "./book";

// 해당 conponent를 index.js에서 불러서 사용한다.
function Library(props) {
    return(
        <div>
            <Book name="처음 만난 리엑트" numOfPage="300" />
            <Book name="처음 만난 스프링 부트" numOfPage="250" />
            <Book name="처음 만난 VSCode" numOfPage="50" />
        </div>
    )
}

export default Library;
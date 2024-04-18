import React, { useState } from "react";

function NameForm(props) {
    const [m_name, setM_name] = useState("");

    const handleSubmit = (e) => {
        alert("입력한 이름 : "+ m_name)
        // 어떤 이벤트를 명시적으로 처리하지 않을 경우, 해당 이벤트에 대한
        // 기본 동작을 실행하지 않도록 지정함
        e.preventDefault();
    }

    const handleChange = (e) => {
        setM_name(e.target.value.toUpperCase());
    }

    // form은 state에서 관리해야하기 때문에 useState를 사용해야한다.
    // value={m_name}
    return(
        <form onSubmit={handleSubmit}>
            <label>이름 : <input type="text" value={m_name} onChange={handleChange} /></label>
            <button type="submit">보내기</button>
        </form>
    )
}
export default NameForm;
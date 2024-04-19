import React, { useState } from "react";

function SignUpForm(props) {
    const[formData, setFormData] = useState({
        username : "",
        email : "",
        pwd : "",
        cpwd : ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        // set함수는 기존 formData를 수정하지 않고 복사해서 쓴다
        setFormData(
            {
                ...formData,
                // [key값]는 key, value 관계에서 동적으로 바뀌는 key값을 지정할 때 사용한다.
                // key값은 중복될 수 없기 때문에 이런 문법이 나옴
                [name] : value
            }
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // 비밀번호와 비밀번호 확인이 일치하지 않으면 알림 표시하고 전송 안함
        if (formData.pwd !== formData.cpwd) {
            alert("비밀번호가 일치하지 않습니다.")
            return null;
        }
        console.log(formData)
    }

    
    return(
        <form onSubmit={handleSubmit} autoComplete="off" >
            <label>Username 
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </label>
            <br/>
            <label>Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br/>
            <label>Password
                <input type="password" name="pwd" value={formData.pwd} onChange={handleChange} required />
            </label>
            <br/>
            <label>Confirm Password
                <input type="password" name="cpwd" value={formData.cpwd} onChange={handleChange} />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    )
}
export default SignUpForm;
import React from "react";

export default class Sample01 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn:true
        };
        // class Component에서는 이벤트를 처리하기 위해서는 반드시 bind()를 작성해줘야한다.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.isToggleOn? "켜짐":"꺼짐"}</button>
            </div>
        )
    }
}
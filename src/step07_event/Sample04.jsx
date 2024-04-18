import React from "react";

export default class Sample04 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isConfirmed:false
        };
        // class Component에서는 이벤트를 처리하기 위해서는 반드시 bind()를 작성해줘야한다.
        this.handleConfirmed = this.handleConfirmed.bind(this);
    }

    handleConfirmed(){
        this.setState(prevState => ({
            isConfirmed : !prevState.isConfirmed
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.handleConfirmed}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed? "확인됨":"확인하기"}
                </button>
            </div>
        )
    }
}
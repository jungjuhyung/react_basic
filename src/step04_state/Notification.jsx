import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    }
};

class Notification extends React.Component{
    // 해당 클래스의 생성자
    constructor(props){
        super(props);
        this.state = {};
    }
    // 아래 3개는 메서드이다.
    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() Call`)
    }
    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() Call`)
    }
    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() Call`)
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;
import React from "react";
import Notification from "./Notification";

const reservedNoti=[
    {
        id : 1,
        message : "안녕하세요, 만나서 반갑습니다."
    },
    {
        id : 2,
        message : "좋은 하루 되세요."
    },
    {
        id : 3,
        message : "안녕히 계세요."
    }
]

var timer;

class NotificationList extends React.Component{
    // 해당 클래스의 생성자
    constructor(props){
        super(props);
        // 초기화
        this.state = {
            notifications : [],
        };
    }
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNoti.length) {
                const index = notifications.length;
                notifications.push(reservedNoti[index]);
                
                // state 변경
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount(){
        if (timer) {
            clearInterval(timer);
        }
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((k)=>{
                    return(
                        <Notification
                            key = {k.id}
                            id = {k.id}
                            message={k.message}
                        />
                    )
                })}
            </div>
        )
    }
}

export default NotificationList;
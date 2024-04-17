import { Box, Button } from "@mui/material";
import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cnt : 5
        }
    }

    increment(){
        // +변경
        this.setState({
            cnt : this.state.cnt + 1
        })
    }
    decrement(){
        // +변경
        this.setState({
            cnt : this.state.cnt - 1
        })
    }

    render(){
        return(
            <div>
                <Button variant="contained" color="primary" size="large" onClick={this.increment.bind(this)}>+</Button>
                {/* m은 margin을 뜻한다. component 속성은 해당 태그 안에 html 테그를 생성해준다. */}
                <Box component='span' m={5}>{this.state.cnt}</Box>
                <Button variant="contained" color="primary" size="large" onClick={this.decrement.bind(this)}>-</Button>
            </div>
        )
    }
}

export default Count;
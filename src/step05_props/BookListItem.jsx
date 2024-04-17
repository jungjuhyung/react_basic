import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

class BookListItem extends React.Component{
    render(){
        const {book} = this.props
        return(
            <Paper>
                {/* Grid와 Grid item으로 나뉘어있다. */}
                {/* container spacing={2}는 grid를 2칸으로 설정 한다는 것이다. */}
                {/* Typography는 material에서 글자를 꾸미는 태그이다. */}
                <Grid container spacing={2}>
                    <Grid item>
                        <img src={book.imgUrl} />
                    </Grid>
                    <Grid item>
                        <Typography component='h5' variant="h5">
                            {book.title}
                        </Typography>
                        <Typography>
                            {book.author}
                        </Typography>
                        <Typography>
                            {book.introduce}
                        </Typography>
                    </Grid>                   
                </Grid>
            </Paper>
        )
    }
}
export default BookListItem;
import { Container, List, ListItem } from "@mui/material";
import React, {Component} from "react";
import BookListItem from "./BookListItem";

class BookList extends Component{

    
    render(){
        // 이렇게도 작성할 수 있다.
        // const books = this.props.books

        // 구조 분해 할당(배열 등의 순서가 있는 값을 차례대로 순서에 맞게 할당해주는 것)
        // ex) [1,2,3] = [a,b,c] => 1 = a, 2 = b, 3 = c
        const {books} = this.props
        const bookItems = books.map((k)=>{
            return(
                <ListItem>
                    <BookListItem book={k} />
                </ListItem>
            )
        })
        // return(
        //     <List>
        //         <ListItem>Item01</ListItem>
        //         <ListItem>Item02</ListItem>
        //         <ListItem>Item03</ListItem>
        //     </List>
        // )
        return(
            <Container maxWidth="sm">
                <List>
                    {bookItems}
                </List>
            </Container>
        )
    }
}
export default BookList;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './step02_element/Clock';
import Welcome from './step03_component/Welcome';
import Comment from './step03_component/Comment';
import CommentList from './step03_component/CommentList';
import NotificationList from './step04_state/NotificationList';
import Count from './step04_state/Count';
import Customer from './step05_props/Customer';
import BookList from './step05_props/BookList';
import Books from './static-data/Books';
import Counter from './step06_hook/Counter';
import Counter2 from './step06_hook/Counter2';
import Counter3 from './step06_hook/Counter3';
import Counter4 from './step06_hook/Counter4';
import SmartHome from './step06_hook/SmartHome';
import SmartHome2 from './step06_hook/SmartHome2';
import TextInput from './step06_hook/TextInput';
import VideoExam from './step06_hook/VideoExam';

const root = ReactDOM.createRoot(document.getElementById('root'));
//시계 표현을 위한 1초마다 root.render 실행
// setInterval(()=>{
  //   root.render(
    //   <React.StrictMode>
    //     <Clock />
    //   </React.StrictMode>
    // )}, 1000);

    root.render(
    // 해당 태그 안에서 jsx파일을 호출하면 보안 및 검사를 위해 임의로 component를 실행, 종료해본다.
    // <React.StrictMode>
    // </React.StrictMode>
    
  // root.render에서 실행했던 것들 모음
  // <Welcome name="Sara" />
  // <Welcome name="Cahal" />
  // <Welcome name="Edite" />
  // <CommentList/>
  // <NotificationList />
  // <Count/>
  // <Customer id="ramyun1537@gmail.com" name="jjh"  orders ={["A001", "B002", "C003"]} />
  // <BookList books = {Books} />
  // <Counter2/>
  // <Counter3/>
  // <Counter4/>
  // <Customer01/>
  // <SmartHome/>
  // <SmartHome2/>
  // <TextInput/>
  <VideoExam/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

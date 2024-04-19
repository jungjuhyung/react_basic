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
import Sample01 from './step07_event/Sample01';
import Sample02 from './step07_event/Sample02';
import Sample03 from './step07_event/Sample03';
import Sample04 from './step07_event/Sample04';
import Sample05 from './step07_event/Sample05';
import Ex01 from './step09_list/Ex01';
import Ex02 from './step09_list/Ex02';
import NameForm from './step10_form/NameForm';
import SelectForm from './step10_form/SelectForm';
import MultiSelectForm from './step10_form/MultiSelectForm';
import CheckBoxs from './step10_form/CheckBoxs';
import RadioForm from './step10_form/RadioForm';
import SignUpForm from './step10_form/SignUpForm';
import Calc from './step11_Sharedstate/Calc';
import Calc2 from './step11_Sharedstate/Calc2';
import Calc3 from './step11_Sharedstate/Calc3';
import Calc4 from './step11_Sharedstate/Calc4';


const root = ReactDOM.createRoot(document.getElementById('root'));
//시계 표현을 위한 1초마다 root.render 실행
// setInterval(()=>{
  //   root.render(
    //   <React.StrictMode>
    //     <Clock />
    //   </React.StrictMode>
    // )}, 1000);

    root.render(
    // 해당 태그 안에서 jsx파일을 호출하면 보안 및 검사를 위해 임의로 component를 한번 실행,종료 하기 때문에 console에 한번 더 뜬다.
    // 또한 해당 태그가 없으면 2개 이상의 component를 실행할 수 없다.
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
  // <VideoExam/>
  // <Sample01/>
  // <Sample02/>
  // <Sample03/>
  // <Sample04/>
  // <Sample05/>
  
  // true, false는 {}로 보내야 정상작동한다.
  // 문자열이 공백이면 false, 문자가 하나라도 있으면 true로 취급한다.
  // <Ex01 isLoggedIn={false}/>

  // <Ex02/>
//<React.StrictMode>
//  <Ex03 msg={[]} /> 
//  <Ex03 msg={[1,2]}/>
//</React.StrictMode>
// <Ex04/>
// <Ex05 />
// <Ex06 />
// <Ex01 list={[1,2,3,4,5,6]}/>
// <Ex02/>
// <NameForm/>
// <SelectForm/>
// <MultiSelectForm/>
// <CheckBoxs/>
// <RadioForm/>
// <SignUpForm/>
// <Calc/>
// <Calc2/>
// <Calc3/>
<Calc3/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

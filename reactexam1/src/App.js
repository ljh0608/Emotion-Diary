
// import './App.css';
import Myheader from "./Myheader";
import Myfooter from "./MyFooter";
import React from 'react';

import Counter from "./Counter";
import Container from "./Container";

function App() {
  let name='이재훈';

  // const style={
  //   App:{
  //     backgroundColor:"black",
  //   },
  //   h2:{
  //     color:"green",
  //   },
  //   bold_text:{
  //     color:"yellow",
  //   },
  // };

  const number=5;
  const counterProps={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:5,
  };

  return (

    <Container>
    <div>
      <Myheader/>
    <Counter {...counterProps}/>

      </div>
      </Container>
  );
}

export default App;

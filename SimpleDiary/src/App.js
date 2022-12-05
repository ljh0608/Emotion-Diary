import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";
// const dummyList = [
//   {
//     id: 1,
//     author: "이재훈",
//     content: "하이 1",
//     emotion: 5,
//     created_date: new Date().getTime(), //getTime 시간을 받아서 밀리세컨드 숫자로 만드는 것
//   },
//   {
//     id: 2,
//     author: "도레미",
//     content: "하이 2",
//     emotion: 1,
//     created_date: new Date().getTime(), //getTime 시간을 받아서 밀리세컨드 숫자로 만드는 것
//   },
//   {
//     id: 3,
//     author: "홍길동",
//     content: "하이 3",
//     emotion: 2,
//     created_date: new Date().getTime(), //getTime 시간을 받아서 밀리세컨드 숫자로 만드는 것
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";

//COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  // //만약 process.env.PUBLIC_URL이 작동 안하면?
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton
              text={"왼쪽 버튼"}
              onClick={() => {
                alert("왼쪽 클릭");
              }}
            ></MyButton>
          }
          rightChild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => {
                alert("오른쪽 클릭");
              }}
            ></MyButton>
          }
        ></MyHeader>
        <h2>App.js</h2>
        {/*
        <img
          src={process.env.PUBLIC_URL + `/assets/emotion5.png`}
          alt="5오류"
        /> */}
        {/* process.env.PUBLIC_URL : 우리가 어떤 위치에 있던 public 디렉토리 경로 */}

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
          type={"negative"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
          type={"default"}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

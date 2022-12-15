import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";

import React, { useReducer } from "react";
import { useRef } from "react";
//COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiartyDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content:
      "오늘의 일기1번 어디까지 짤리는지 확인하기 위해서 컨텐츠를 채우는 중입니다 25자가 넘어가면 보이지 않습니다",
    date: 1671112486506,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기2번",
    date: 1671112486507,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기3번",
    date: 1671112486508,
  },

  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기4번",
    date: 1671112486509,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기5번",
    date: 1671112486510,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        data: new Date(date).getTime(),
        content: content,
        emotion: emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiartyDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />}></Route>
              <Route path="/edit" element={<Edit />}></Route>
              <Route path="/diary/:id" element={<Diary />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DiartyDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

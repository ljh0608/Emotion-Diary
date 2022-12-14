import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import RouteTest from "./components/RouteTest";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;

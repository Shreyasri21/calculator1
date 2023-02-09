// import logo from './logo.svg';
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calc from "./components/Calc";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/calc" element={<Calc />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

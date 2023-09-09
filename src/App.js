// import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen  bg-gradient-to-r from-white via-blue-200 to-blue-200  flex flex-col   " >
      
      <Navbar/>
      <Home/>
      
      
      
    </div>
  );
}

export default App;

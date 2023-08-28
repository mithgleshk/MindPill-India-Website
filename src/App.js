import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen  bg-[#088f8f]  flex flex-col   " >
      
      <Navbar/>
      
      <Routes>
        <Route path="/" element= {<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;

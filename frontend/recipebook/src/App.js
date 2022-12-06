// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Recipe from "./Pages/Recipe";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
   
    <Routes> 
      <Route path="/" element={<Home/>}></Route>
    <Route path="/recipe" element={<Recipe/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    
        
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Pages.js/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Recipe from './Pages.js/Recipe';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="/Recipe" element={<Recipe/>}>Add Recipe</Route>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;

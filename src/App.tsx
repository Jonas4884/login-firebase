import React from 'react';
import './App.css';
import {Facebook} from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Welcome} from "./components/Firebase/welcome";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Facebook/>}/>
                <Route path={"/welcome"} element={<Welcome/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

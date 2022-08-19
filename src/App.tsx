import React, {useState} from 'react';
import './App.css';
import {Facebook} from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Welcome} from "./components/Firebase/welcome/welcome";
import AuthRoute from "./components/Firebase/auth/AuthRoute";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={
                    <AuthRoute>
                        <Facebook />
                    </AuthRoute>
                    }/>
                <Route path={"/welcome"} element={<Welcome/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OverviewPage from "./Components/OverviewPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OverviewPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

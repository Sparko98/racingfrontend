import React, {useEffect} from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import OverviewPage from "./components/OverviewPage";
import Layout from "./components/Layout";
import Cookies from "js-cookie";
import RegisterPage from "./components/RegisterPage";

function App() {
    useEffect(() => {
        // check if user is on page where login must not be checked
        const excludes = ['login']
        if (excludes.includes(window.location.href)) return

        // check if user is already auth
        const discordCookie = Cookies.get('discord.auth')
        if (discordCookie) {
            const msSinceAuth = Date.now() - Number.parseInt(discordCookie)
            if (msSinceAuth / 1000 / 60 / 60 < 24) {
                return
            }
        }

        // get auth from express
        fetch('http://localhost:3001', {
            method: 'GET',
            credentials: 'include'
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data.loggedIn) {
                    Cookies.set('discord.auth', data.lastAuth)
                }
                window.location.href = data.redirectUrl
            })
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path="/" element={<OverviewPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/input" element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

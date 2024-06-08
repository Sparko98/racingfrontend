import React, {useEffect} from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import OverviewPage from "./Components/OverviewPage";
import Layout from "./Components/Layout";
import Cookies from "js-cookie";

function App() {
    useEffect(() => {
        if(window.location.href.includes('login')) return

        const discordCookie = Cookies.get('discord.auth')
        if(discordCookie) {
            const msSinceAuth = Date.now() - Number.parseInt(discordCookie)
            if(msSinceAuth / 1000 / 60 / 60 < 24) {
                return
            }
        }

        fetch('http://localhost:3001', {
            method: 'GET',
            credentials: 'include'
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if(data.loggedIn) {
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

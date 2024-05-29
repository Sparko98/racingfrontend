import React, { useState } from 'react';
import '../css/LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                // Redirect to another page or perform any action upon successful login
            } else {
                console.error('Login failed', response.statusText);
            }
        } catch (error) {
            console.error('Login failed', error);
            // Handle error cases
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="button-container">
                    <button onClick={handleLogin}>Login</button>
                </div>
                <p className="register-text">Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;

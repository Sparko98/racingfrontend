import React from 'react';
import '../css/LoginPage.css'

function RegisterPage() {
    return (
        <div className={"login-container"}>
            <div className="login-box">
                <label>Email</label>
                <input type="text"/>
                <label>Password</label>
                <input type="text"/>
                <div className="button-container">
                    <button>Register</button>
                </div>
            </div>

        </div>
    );
}

export default RegisterPage;

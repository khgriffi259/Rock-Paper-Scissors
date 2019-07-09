import React from 'react';

const LoginForm = () => {
    
    const showHidePassword = e => {
        const passwordField = e.target.parentElement.querySelector('#password');
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    }

  
    return (
        <div className="loginForm">
            <h1>Login Here</h1>
            <form action="#">
                <div className="input-group">
                    <input type="email" id="email"/>
                    <i class="far fa-envelope"></i>
                </div>
                <div className="input-group">
                    <input type="password" id="password"/>
                    <i class="fas fa-key"></i>
                    <i class="fas fa-eye" onClick={showHidePassword}></i>
                </div>
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default LoginForm
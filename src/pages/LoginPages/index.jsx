import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./styles.css";

import HygyaLogo from "../../assets/images/hygya-logo.png"

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password });
        login(email, password); //integração com o contexto e com a API
    }

    return (
        <div id="login">
            <img src={HygyaLogo} id="hygya-logo" />
            {/* <p>{String(authenticated)}</p> */}
                <form className="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="email"></label>
                        <input
                            placeholder="Login (E-mail)"
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                    </div>
                    <div className="field">
                        <label htmlFor="password"></label>
                        <input 
                            placeholder="Senha"
                            type="password" 
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <div className="actions">
                        <button type="submit">Entrar</button>
                    </div>
                </form>
        </div>
    );
};

export default LoginPage
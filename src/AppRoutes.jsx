import React, { Children, useContext } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    RouterProvider
} from "react-router-dom";

import LoginPage from "./pages/LoginPages";
import HomePage from "./pages/HomePage";

import Home from "./components/Home";
import Sobre from "./components/Users";
import Pacientes from "./components/Pacientes";

import { AuthProvider, AuthContext } from "./contexts/auth"

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to="/login" />
        }
        return children;
        
    };

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact 
                    path="/login" 
                    element={<LoginPage />}
                    />
                    <Route 
                        exact 
                        path="/" 
                        element={
                            <Private>
                                <HomePage />
                            </Private>
                    }
                    />
                    <Route exact path="/pacientes" element={<Private><Pacientes /></Private>}></Route>
                    <Route exact path="/sobre" element={<Private><Sobre /></Private>}></Route>                    
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes
import React, { Children, useContext } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    RouterProvider
} from "react-router-dom"

import LoginPage from "./pages/LoginPages"
import HomePage from "./pages/HomePage"

import { AuthProvider, AuthContext } from "./contexts/auth"

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

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
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes
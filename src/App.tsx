import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { RegistrPage } from "./pages/RegistrPage.tsx";

import "./app.scss";

const App: React.FC = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrPage />} />
            </Routes>
        </div>
    );
};

export default App;

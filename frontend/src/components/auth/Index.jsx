import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import ForgotPassword from '../auth/ForgotPassword';

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
};

export default Index;

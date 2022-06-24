import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Name from './Pages/Name';
import Callback from './Pages/Callback';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/name" element={<Name />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

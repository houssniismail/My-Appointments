import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../pages/Home';
function Myrouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/Ismail_HOUSSNI" />} />
                <Route path="/Ismail_HOUSSNI/" element={<Home />} />
            </Routes>
        </div>
    );
}


export default Myrouter;

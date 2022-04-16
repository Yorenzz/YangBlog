import './App.css'
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "../context/TokenContext";
import {Element} from "../router/element";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Element/>
            </Router>
        </AuthProvider>
    )
}


export default App

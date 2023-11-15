import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import '../css/navbar.css';
import { Link } from "react-router-dom";

export default function Navbar1({setSignin,sign_bool}) {
    
    function handleClick(){
        sign_bool = !sign_bool;
        setSignin(sign_bool);
        console.log(sign_bool);
    }

    return (
        <nav className="navbar1">
                <div className="navbar1-logo">
                    <i className="fab fa-typo3" />
                    <p>Navbar1</p>
                </div>
                <ul className="navbar1-menu">
                    <li>
                        <button onClick={handleClick}>Signin/Signup</button>
                    </li>
                </ul>
        </nav>
    );
    }
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../css/LandingPage.css";

import Signin from "../Components/Signin";
import Navbar1 from "../Components/Navbar1";


export default function LandingPage(){

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
    let sign_bool = false;
    const [signin, setSignin ] = useState(false);

    useEffect(() => {
        if (cookies.jwt !== undefined) {
        console.log("login"); 
        navigate("/");
        }
    }, [cookies, navigate]);

    

    return(
        <div className="LandingPage">
            <Navbar1 setSignin={setSignin} sign_bool={sign_bool} />
            <section className="section1">
                <Signin signin={signin} setSignin={setSignin}/>
            </section>
            <section className="section1">

            </section>
        </div>
    );
};
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


export default function Logout(){
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

    const navigate = useNavigate();

    const LoggingOut = () => {
        removeCookie("jwt");
        navigate("/login");
    };

    return(
        <>
            <div className="LogoutButton">
                <button onClick={LoggingOut}>Log out</button>
            </div>
        </>
    );
}
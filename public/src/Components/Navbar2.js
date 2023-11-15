import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import '../css/navbar.css';
import Logout from "./LogoutButton";
import { Link } from "react-router-dom";
import MyComponent from "./CreatePost";

export default function Navbar2() {

    const [createPostbox, setCreatePostbox] = useState(false);

    function handleCreatePostButtonClick(){
        setCreatePostbox(!createPostbox);
    }

    return (
        <>
            <nav className="navbar1 nav2">
                    <div className="navbar1-logo">
                        <i className="fab fa-typo3" />
                        <p>Fotoflask</p>
                    </div>
                    <ul className="navbar1-menu">
                        <li>
                            {/* create post button with plus icon */}
                            <button id="createpostbutton" onClick={handleCreatePostButtonClick}>
                                <i className="fas fa-plus-circle" />
                            </button>
                        </li>
                    </ul>
                    <Logout />
            </nav>

            {createPostbox === true ? <MyComponent setCreatePost={setCreatePostbox} />: <></>}
        </>
    );
    } 
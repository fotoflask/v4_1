import React, { useState } from "react";
import '../css/navbar.css';  // Import your navbar styles
// import Logout from "./LogoutButton";
import { Link } from "react-router-dom";
import MyComponent from "./CreatePost";

export default function Navbar2() {
    const [createPostbox, setCreatePostbox] = useState(false);

    function handleCreatePostButtonClick(){
        setCreatePostbox(!createPostbox);
    }

    return (
        <>
            <nav className="fotoflask-navbar">
                <div className="fotoflask-navbar-logo">
                    <i className="fab fa-fotoflask" />
                    <p>fotoflask</p>
                </div>
                <ul className="fotoflask-navbar-menu">
                    {/* Shapes/icons for Friends, Explore, Posts, and Settings */}
                    <li><i className="fas fa-user-friends"></i></li>
                    <li><i className="fas fa-binoculars"></i></li>
                    <li><i className="fas fa-pencil-alt"></i></li>
                    <li><i className="fas fa-cogs"></i></li>
                    {/* Search bar in the middle */}
                    <li className="navbar-search-bar">
                        <input type="text" placeholder="Search fotoflask" />
                    </li>
                    {/* create post button with plus icon */}
                    <li>
                        <button id="createpostbutton" onClick={handleCreatePostButtonClick}>
                            <i className="fas fa-plus-circle" />
                        </button>
                    </li>
                </ul>
                {/* <Logout /> */}
            </nav>

            {createPostbox === true ? <MyComponent setCreatePost={setCreatePostbox} /> : <></>}
        </>
    );
}

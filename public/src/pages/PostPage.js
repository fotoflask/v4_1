import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar2 from "../Components/Navbar2";

export default function PostPage(){
    
    return(
        <div className="PostPage">
            <Navbar2 />
            <div className="PostPageMain">
                <div className="PostArea"></div>
                <div className="PostDetails"></div>
            </div>
        </div>
    )
}

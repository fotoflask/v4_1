import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/postpage.css";
import axios from "axios";
import Navbar2 from "../Components/Navbar2";

export default function PostPage(){
    let { postid } = useParams();

    const [item, setItem] = useState([]); // [{}
    const url = "http://localhost:4000/post/"+postid;

    useEffect(() => {
        console.log("useEffect");
        axios.get(url).then((res) => {
            console.log(res.data);
            setItem(res.data);
        });
    }, [url]);
    
    return(
        <div className="PostPage">
            <Navbar2 />
            <div className="PostPageMain">
                <div className="PostArea">
                    <img className="postImage" src={'../../PostImages/'+item.Picture} alt="PostImage" />
                </div>
                <div className="PostDetails"></div>
            </div>
        </div>
    )
}

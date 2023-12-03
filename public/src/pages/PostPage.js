import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/postpage.css";
import axios from "axios";
import Navbar2 from "../Components/Navbar2";

export default function PostPage(){
    const [isLoading, setIsLoading] = useState(true); // Loading state
    let { postid } = useParams();

    const [item, setItem] = useState([]); // [{}
    const url = "http://localhost:4000/post/"+postid;

    useEffect(() => {
        console.log("useEffect");
        axios.get(url).then((res) => {
            console.log(res.data);
            setItem(res.data); 
            setIsLoading(false); 
        });
    }, [url]);
    
    return(
        <div className="PostPage">
            <Navbar2 />
            <div className="PostPageMain">
                {isLoading ? (
                <>
                <div className="PostArea">
                    <div className="postImage imagex-pp"></div>
                </div>
                <div className="divider"></div>
                <div className="PostContent">
                    <div className="PostDescription">
                        <div className="imagey" style={{width:'25vw'}}></div>
                        <div className="imagey" style={{width:'20vw'}}></div>
                        <div className="imagey" style={{width:'15vw'}}></div>
                    </div>
                    <div className="Comments">
                        <div className="imagey" style={{width:'25vw'}}></div>
                        <div className="imagey" style={{width:'20vw'}}></div>
                        <div className="imagey" style={{width:'15vw'}}></div>
                    </div>
                    <div className="PostOptions">
                    <div className="imagey" style={{width:'25vw'}}></div>
                        <div className="imagey" style={{width:'20vw'}}></div>
                        <div className="imagey" style={{width:'15vw'}}></div>
                    </div>

                </div>
                </>
                ):(
                <>
                <div className="PostArea">
                    <img className="postImage" src={'../../PostImages/'+item.Picture} alt="PostImage" />
                </div>
                <div className="divider"></div>
                <div className="PostContent">
                    <div className="PostDescription"></div>
                    <div className="Comments"></div>
                    <div className="PostOptions"></div>
                </div>
                </>
                )}
            </div>
        </div>
    )
}

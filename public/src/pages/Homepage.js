import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../css/Homepage.css";
import Navbar2 from "../Components/Navbar2";
import HomepagePost from "../Components/HomepagePost";


export default function HomePage(){
    
    const [items, setItems] = useState([]); // [{}
    const url = "http://localhost:4000/getposts";

    useEffect(() => {
        console.log("useEffect");
        axios.get(url).then((res) => {
            console.log(res.data);
            setItems(res.data);
        });
    }, []);

    return(
        <div className="HomePage">
            <Navbar2 />
            <div className="HomepageMain">
                <div className="HomepageMainLeft">
                </div>
                <div className="HomepageMainMiddle">
                    <div className="postContainer">
                        
                        <HomepagePost username="username" caption="caption" imageUrl="./ImageAssets/camerawallpaper.jpg" timestamp="10:20:30" likes={5} comments={10} profilepic="./logo192.png" userid="1" postid="2" /> 
                        <HomepagePost username="username2" caption="caption" imageUrl="./ImageAssets/camerawallpaper.jpg" timestamp="10:20:40" likes={5} comments={10} profilepic="./logo192.png" userid="1" postid="1" />         

                        {items.map((item) => (
                            
                        <HomepagePost username={item.username} caption={item.caption} imageUrl={'./PostImages/'+item.Picture} timestamp={item.timestamp} likes={item.likes} comments={item.comments} profilepic={item.profilepic} userid={item.userid} postid={item.postid} />
                        ))}

                    </div>
                </div>
                <div className="HomepageMainRight"> 
                </div>
            </div>
        </div>
    ); 
}
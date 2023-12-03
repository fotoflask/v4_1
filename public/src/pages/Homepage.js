import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Homepage.css";
import Navbar2 from "../Components/Navbar2";
import HomepagePost from "../Components/HomepagePost";
import HomePagePostLoading from "../Components/HomepagePostLoading";

export default function HomePage() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const url = "http://localhost:4000/getposts";

    useEffect(() => {
        console.log("useEffect");
        axios.get(url).then((res) => {
            console.log(res.data);
            setItems(res.data);
            setIsLoading(false); // Set loading to false after data fetch
        });
    }, []);

    return (
        <div className="HomePage">
            <Navbar2 />
            <div className="HomepageMain">
                <div className="HomepageMainLeft"></div>
                <div className="HomepageMainMiddle">
                    <div className="postContainer">
                        {isLoading ? ( // Show loading animation if isLoading is true
                            <>
                            <HomePagePostLoading />
                            <HomePagePostLoading />
                            </>
                        ) : (
                            items.map((item) => (
                                <HomepagePost
                                    key={item._id}
                                    username={item.username}
                                    caption={item.caption}
                                    imageUrl={"./PostImages/" + item.Picture}
                                    timestamp={item.timestamp}
                                    likes={item.likes}
                                    comments={item.comments}
                                    profilepic={item.profilepic}
                                    userid={item.userid}
                                    postid={item._id}
                                />
                            ))
                        )}
                    </div>
                </div>
                <div className="HomepageMainRight"></div>
            </div>
        </div>
    );
}

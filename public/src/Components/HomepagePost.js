import React from "react";

export default function HomepagePost({username, caption, imageUrl, timestamp, likes, comments, profilepic, userid, postid}) {
    return (
        <div className="post" id={postid}>
            <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={profilepic} alt="" />
                <span className="postUsername"> {username} </span>
                <span className="postDate">{timestamp}</span>
            </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {caption}
                </span>
                <img className="postImg" src={imageUrl} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img
                    className="likeIcon"
                    src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                    alt=""
                    />
                    <img
                    className="likeIcon"
                    src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                    alt=""
                    />
                    <img
                    className="likeIcon"
                    src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                    alt=""
                    />
                    <span className="postLikeCounter">{likes}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{comments}</span>
                </div>
            </div>
        </div>
    );
    }


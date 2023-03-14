import React, { useEffect, useState, useContext } from "react";
import "./TimeLine.css";
import Post from "../post/Post";
import Share from "./../share/Share";
// import { Posts } from "../../dummyData";
import axios from "axios";
import { AuthContext } from "./../../state/AuthContext";

export default function TimeLine({ username, profilePicture }) {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`) // プロフィールの場合
        : await axios.get(`/posts/timeline/${user._id}`); // ホーム(タイムライン)の場合
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share profilePicture={profilePicture} />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

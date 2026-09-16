import React from "react";
import useLikes from "../hooks/useLike";
import posts from "../data/Posts";

const PostList = () => {
  const { likes, handleLike } = useLikes();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {" "}
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleLike(post.id)}>いいね: {likes[post.id] || 0}</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;

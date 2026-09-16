import React from "react";
import useLikes from "../hooks/useLike";
import posts from "../data/Posts";
import PostCard from "./PostCard";

const PostList = () => {
  const { likes, handleLike } = useLikes();

  return (
    <div className="mt-10">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          likeCount={likes[post.id] || 0}
          onLike={() => handleLike(post.id)}
        />
      ))}
    </div>
  );
};

export default PostList;

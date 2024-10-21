import React from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import './Post.css'; // Import custom CSS file

const Post = ({ post }) => {
  return (
    <div className="post-container shadow-sm">
      <div className="post-header">
        <img src={post.profilePicture} alt={post.username} className="post-dp" />
        <span className="post-username">{post.username}</span>
      </div>

      <div className="post-image-container">
        <img src={post.image} alt="Post content" className="post-image" />
      </div>

      <div className="post-actions">
        <FaHeart className="post-icon" />
        <FaComment className="post-icon" />
        <FaShare className="post-icon" />
      </div>

      <div className="post-caption">
        <span className="post-username">{post.username}</span> {post.caption}
      </div>
    </div>
  );
};

export default Post;

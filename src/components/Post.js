import React from 'react';

const Post = ({ post, loading }) => {
  if (loading) {
    return <h2>Loaderino</h2>;
  }
  return (
    <li>
      <h1>Post</h1>
    </li>
  );
};

export default Post;

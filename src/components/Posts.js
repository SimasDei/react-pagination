import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loaderino</h2>;
  }
  const renderPosts = () =>
    posts.map((post, index) => (
      <li key={index}>
        <h1>Post</h1>
      </li>
    ));
  return <ul>{renderPosts()}</ul>;
};

export default Posts;

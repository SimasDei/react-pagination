import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loaderino</h2>;
  }
  const renderPosts = () =>
    posts.map((post, index) => (
      <li className="list-group-item" key={index}>
        <h1>{post.title}</h1>
      </li>
    ));
  return <ul className="list-group mb-4">{renderPosts()}</ul>;
};

export default Posts;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="App">
      <h1>React Pagination</h1>
      <ul className="list-group mb-4">
        <Posts posts={posts} />
      </ul>
    </div>
  );
}

export default App;

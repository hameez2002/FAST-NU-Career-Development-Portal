import Post from "./Post";
import {useEffect, useState} from "react";
import "./NewsFeed.css";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  console.log("indexpage");
  useEffect(() => {
    // fetch('http://localhost:7000/newsfeed/post')
    fetch('https://cdp-kappa.vercel.app/newsfeed/post')
  .then(response => response.json())
  .then(posts => setPosts(posts))
  .catch(error => console.error('Error fetching posts:', error));
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}
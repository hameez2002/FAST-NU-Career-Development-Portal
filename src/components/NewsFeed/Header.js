import {Link} from "react-router-dom";
//import {useContext, useEffect, useState} from "react";
//import {UserContext} from "./UserContext";
 
export default function Header() {
  
  return (
    <header>
      <Link to="/" className="logo">CDP NEWSFEED</Link>
      <nav>
      <Link to="/newsfeed/createPost">Create Post</Link>

      </nav>
    </header>
  );
}

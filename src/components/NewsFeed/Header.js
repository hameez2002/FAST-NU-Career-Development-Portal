// import {Link} from "react-router-dom";
// //import {useContext, useEffect, useState} from "react";
// //import {UserContext} from "./UserContext";
// import "./Header.css"
 
// export default function Header() {
  
//   return (
//     <header>
//       <Link to="/newsfeed" className="logo">CDP NEWSFEED</Link>
//       <nav>
//       <Link to="/newsfeed/createPost">Create Post</Link>

//       </nav>
//     </header>
//   );
// }

// Header.js

import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="newsfeed-header">
      <Link to="/newsfeed" className="newsfeed-logo">
        CDP NEWSFEED
      </Link>
      <nav className="newsfeed-nav">
        <Link to="/newsfeed/createPost" className="newsfeed-nav-link">
          Create Post
        </Link>
      </nav>
    </header>
  );
}

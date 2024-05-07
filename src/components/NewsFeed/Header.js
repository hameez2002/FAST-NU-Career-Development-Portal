import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/newsfeed" className="text-2xl font-bold">CDP NEWSFEED</Link>
      <nav className="ml-4">
      {/* {!localStorage.getItem('role') === 2 && */}
        <Link to="/newsfeed/createPost" className="bg-blue-500 hover:bg-blue-700 !text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">
          Create Post
        </Link>
      {/* } */}
      </nav>
    </header>
  );
}

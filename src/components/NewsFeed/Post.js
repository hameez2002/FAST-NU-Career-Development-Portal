import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import "./NewsFeed.css";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/newsfeed/post/${_id}`}>
          <img src={"http://localhost:7000/" + cover} alt="" />
          {/* <img src={"http://localhost:7000/newsfeed/uploads/2e61ad331570e46265781f7772b9f6a9.jpeg"} alt="" /> */}
          {/* console.log(`${cover}`); */}
        </Link>
      </div>
      <div className="texts">
        <Link to={`/newsfeed/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          {/* <a className="author">{author.username}</a> */}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
        <Link to={`/newsfeed/delete/${_id}`} className="delete-button">
          Delete Post
        </Link>
      </div>
    </div>
  );
}

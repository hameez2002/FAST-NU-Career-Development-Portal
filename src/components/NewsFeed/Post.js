import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

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
          <img src={"http://localhost:4000/newsfeed/" + cover} alt="" />
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

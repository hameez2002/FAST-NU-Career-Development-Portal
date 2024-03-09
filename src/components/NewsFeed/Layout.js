import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <main className="newsfeed-main">
      <div className="newsfeed-header-div">
        <Header />
      </div>
      <div className="newsfeed-outlet-div">
        <Outlet />
      </div>
    </main>
  );
}

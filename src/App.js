import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
// import { Career } from "./components/Pages/Career";
import { BoardOfDirectors } from "./components/Pages/BoardOfDirectors";
import { Jobs } from "./components/Pages/Jobs";
import NewsFeed from "./components/Pages/NewsFeed";
import CreatePost from "./components/NewsFeed/CreatePost";
import Layout from "./components/NewsFeed/Layout";
import PostPage from "./components/NewsFeed/PostPage";
import EditPost from "./components/NewsFeed/EditPost";
import DeletePost from "./components/NewsFeed/DeletePost";
import IndexPage from "./components/NewsFeed/IndexPage";
// import "./components/Newsfeed/NewsFeed.css";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        {/* <div className="pages"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          {/* <Route path="/newsfeed" element={<Layout />} />
          <Route path="/newsfeed/createPost" element={<CreatePost />}>
            <Route index element={<IndexPage />} />
            <Route path="/newsfeed/post/:id" element={<PostPage />} />
            <Route path="/newsfeed/edit/:id" element={<EditPost />} />
            <Route path="/newsfeed/delete/:id" element={<DeletePost />} /> */}
        <Route path="/newsfeed" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/newsfeed/createPost" element={<CreatePost />} />
          <Route path="/newsfeed/post/:id" element={<PostPage />} />
          <Route path="/newsfeed/edit/:id" element={<EditPost />} />
          <Route path="/newsfeed/delete/:id" element={<DeletePost />} />
        </Route>
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/board" element={<BoardOfDirectors />} />
          </Routes>

          
          </Router>
        {/* </div> */}
      
      <div style={{ flex: 1 }}></div>
      {/* <Footer /> */}
    </>
  );
}

export default App;

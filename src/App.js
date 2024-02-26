import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import NavBarWrapper from "./components/NavBar/NavBarWrapper";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { BoardOfDirectors } from "./components/Pages/BoardOfDirectors";
import { Jobs } from "./components/Pages/Jobs";
// import NewsFeed from "./components/Pages/NewsFeed";
import CreatePost from "./components/NewsFeed/CreatePost";
import Layout from "./components/NewsFeed/Layout";
import PostPage from "./components/NewsFeed/PostPage";
import EditPost from "./components/NewsFeed/EditPost";
import DeletePost from "./components/NewsFeed/DeletePost";
import IndexPage from "./components/NewsFeed/IndexPage";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import UserProfile from "./components/Pages/UserProfile";
import MyForm from "./components/Jobs/MyForm";
// import { FormDataProvider } from './components/Jobs/FormDataContext';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavBarWrapper>
              <Login />
            </NavBarWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <NavBarWrapper>
              <Home />
            </NavBarWrapper>
          }
        />
        <Route
          path="/jobs"
          element={
            <NavBarWrapper>
                <Jobs />
            </NavBarWrapper>

          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/profile"
          element={
            <NavBarWrapper>
              <UserProfile />
            </NavBarWrapper>
          }
        />
        <Route
          path="/email"
          element={
            <NavBarWrapper>
              <MyForm />
            </NavBarWrapper>
            
          }
        />

        <Route
          path="/newsfeed"
          element={
            <NavBarWrapper>
              <Layout />
            </NavBarWrapper>
          }
        >
          <Route index element={<IndexPage />} />
          <Route path="/newsfeed/createPost" element={<CreatePost />} />
          <Route path="/newsfeed/post/:id" element={<PostPage />} />
          <Route path="/newsfeed/edit/:id" element={<EditPost />} />
          <Route path="/newsfeed/delete/:id" element={<DeletePost />} />
        </Route>

        <Route
          path="/about"
          element={
            <NavBarWrapper>
              <About />
            </NavBarWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <NavBarWrapper>
              <Contact />
            </NavBarWrapper>
          }
        />
        <Route
          path="/board"
          element={
            <NavBarWrapper>
              <BoardOfDirectors />
            </NavBarWrapper>
          }
        />
      </Routes>
      <div style={{ flex: 1 }}></div>
    </Router>
  );
}

export default App;

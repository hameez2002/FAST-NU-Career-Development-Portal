import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Career } from "./components/Pages/Career";
import { BoardOfDirectors } from "./components/Pages/BoardOfDirectors";
import { Jobs } from "./components/Pages/Jobs";
import { NewsFeed } from "./components/Pages/NewsFeed";
//import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/board" element={<BoardOfDirectors />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;

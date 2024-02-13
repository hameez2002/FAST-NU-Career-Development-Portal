// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../logo-FAST-NU.png";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <header
//       className="navbar w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm"
//       style={{ height: "80px" }}
//     >
//       <div
//         className="container mx-auto flex justify-between items-center py-7 px-5"
//         style={{ height: "80px" }}
//       >
//         <NavLink
//           exact
//           to="/"
//           className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
//           style={{ textDecoration: 'none' }}
//         >
//           <img className="w-15 h-12  " src={logo} alt="FAST NUCES Logo" />
//           <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
//             Career Development Portal
//           </span>
//           <i className="fas fa-code"></i>
//         </NavLink>

//         <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
//           <NavLink
//             exact
//             to="/"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             exact
//             to="/jobs"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Jobs
//           </NavLink>
//           <NavLink
//             exact
//             to="/newsfeed"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             NewsFeed
//           </NavLink>
//           <NavLink
//             exact
//             to="/about"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             About
//           </NavLink>

//           <NavLink
//             exact
//             to="/contact"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Contact Us
//           </NavLink>
//           <NavLink
//             exact
//             to="/board"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Board of Directors
//           </NavLink>
//         </nav>

//         <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         </div>

//         <button
//           className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
//           onClick={handleClick}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {click && (
//           <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
//             <NavLink
//               exact
//               to="/"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               exact
//               to="/jobs"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Job Posting
//             </NavLink>
//             <NavLink
//               exact
//               to="/newsfeed"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               News Feed
//             </NavLink>
//             <NavLink
//               exact
//               to="/about"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               About
//             </NavLink>
//             <NavLink
//               exact
//               to="/Career"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Career
//             </NavLink>
//             <NavLink
//               exact
//               to="/contact"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Contact Us
//             </NavLink>
//             <NavLink
//               exact
//               to="/board"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Board of Directors
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo-FAST-NU.png";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <header
      className="navbar w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm"
      style={{ height: "80px" }}
    >
      <div
        className="container mx-auto flex justify-between items-center py-7 px-5"
        style={{ height: "80px" }}
      >
        <NavLink
          exact
          to="/home"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
          style={{ textDecoration: "none" }}
        >
          <img className="w-15 h-12  " src={logo} alt="FAST NUCES Logo" />
          <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
            Career Development Portal
          </span>
          <i className="fas fa-code"></i>
        </NavLink>

        <nav
          className="xs:hidden sm:hidden md:hidden xl:block md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide"
          style={{}}
        >
          <NavLink
            exact
            to="/login"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Login
          </NavLink>
          <NavLink
            exact
            to="/home"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/jobs"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Jobs
          </NavLink>
          <NavLink
            exact
            to="/newsfeed"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            NewsFeed
          </NavLink>
          <NavLink
            exact
            to="/about"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            About
          </NavLink>

          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            exact
            to="/board"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Board of Directors
          </NavLink>
        </nav>

        {/* <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div> */}

        <button
          className="xl:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {click && (
          <div className="w-full flex flex-col px-3 md:hidden  bg-gray-900 text-base uppercase text-center font-semibold navbar_drawer">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/jobs"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Job Posting
            </NavLink>
            <NavLink
              exact
              to="/newsfeed"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              News Feed
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              About
            </NavLink>
            <NavLink
              exact
              to="/Career"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Career
            </NavLink>
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
            <NavLink
              exact
              to="/board"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Board of Directors
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
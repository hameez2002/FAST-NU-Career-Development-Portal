// import React from "react";
// //import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const currentYear = new Date().getFullYear();

// const Footer = () => {
//   return (
//     <footer className="w-full sticky bottom-0 bg-gray-800 text-white p-4">
//       <div className="social-media">
//         <a
//           href="https://www.facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-link"
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//         </a>
//         <a
//           href="https://www.twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-link"
//         >
//           <FontAwesomeIcon icon={faTwitter} />
//         </a>
//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-link"
//         >
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>
//       </div>

//       <p className="footer-text">&copy; {currentYear} FAST Student Dashboard</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4">
        <div className="social-media flex mb-4 md:mb-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link mr-4 text-2xl hover:text-blue-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link mr-4 text-2xl hover:text-blue-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-2xl hover:text-pink-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p className="footer-text text-sm opacity-70">© {currentYear} FAST Student Dashboard</p>
      </div>
    </footer>
  );
};

export default Footer;

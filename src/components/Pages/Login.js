// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     user_id: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const redirectToRegister = () => {
//     navigate("/register");
//   };

//   const redirectToJobs = () => {
//     navigate("/jobs");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:7000/login", {
//         // const response = await axios.post("https://cdp-kappa.vercel.app/login", {
//         user_id: formData.user_id,
//         password: formData.password,
//       });
//       console.log("API Response:", response.data);
//       const token = response.data.token;
//       if (token) {
//         localStorage.setItem("token", token);
//         console.log("Token stored: ", token);
//         redirectToJobs();
//       } else {
//         console.error("Token is undefined");
//       }

//       console.log(response.data);
//       console.log("You have successfully logged in");

//       // Store the token in localStorage or a state for further authentication
//     } catch (error) {
//       console.error(error.response.data);
//       console.log("Invalid user id or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-h2">Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label className="login-label">
//           User ID:
//           <input
//             type="text"
//             name="user_id"
//             value={formData.user_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="login-label">
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <button className="login-button" type="submit">
//           Login
//         </button>
//         <button
//           className="login-button"
//           type="button"
//           onClick={redirectToRegister}
//         >
//           Create an account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate("/register");
  };

  const redirectToJobs = () => {
    navigate("/jobs");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post("http://localhost:7000/login", {
        const response = await axios.post("https://cdp-kappa.vercel.app/login", {

        user_id: formData.user_id,
        password: formData.password,
      });
      const { token, user_id } = response.data; // Extract user_id from response
      if (token && user_id) {
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id); // Store user_id in local storage
        redirectToJobs();
      } else {
        console.error("Token or user_id is undefined");
      }
    } catch (error) {
      console.error(error.response.data);
      console.log("Invalid user id or password");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-h2">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          User ID:
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button className="login-button" type="submit">
          Login
        </button>
        <button
          className="login-button"
          type="button"
          onClick={redirectToRegister}
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Login;

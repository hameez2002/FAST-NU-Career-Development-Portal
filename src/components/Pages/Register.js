import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  // const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [UserIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  //   setNameError("");
  // };

  const handleUserIDChange = (e) => {
    setUser_id(e.target.value);
    setUserIdError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setRegistrationError("");
    // setNameError("");
    setUserIdError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // if (!name.trim()) {
    //   setNameError("Name is required");
    //   return;
    // }

    if (!user_id.trim()) {
      setUserIdError("User ID is required");
      return;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    if (!userRole) {
      setRegistrationError("Please select a user role");
      return;
    }

    try {
      // const response = await axios.post("http://localhost:7000/register", 
        const response = await axios.post("https://backend-fast-nu-career-development-portal-tais.vercel.app/register", {
        // name,
        user_id,
        email,
        password,
        user_roles: parseInt(userRole),
      });
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.error(error.response.data);

      if (error.response.data.error.includes("user with email")) {
        setEmailError("User with this email already exists");
      } else if (error.response.data.error.includes("user with fast_id")) {
        setUserIdError("User with this user id already exists");
      } else {
        // Handle other registration errors
        setRegistrationError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="signup-page">
      <h1>Register</h1>
      <form className="signup_form" onSubmit={handleSubmit}>
        <label className="signup_label" htmlFor="userRole">
          User Role:
        </label>
        <select
          className="signup_input"
          id="userRole"
          value={userRole}
          onChange={handleRoleChange}
        >
          <option value="">Select User Role</option>
          {/* <option value="1">CSO</option> */}
          <option value="2">Student</option>
          <option value="3">Industry</option>
        </select>
        {/* <label className="signup_label" htmlFor="name">
          Name:
        </label>
        <input
          className="signup_input"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <div className="error-message">{nameError}</div>} */}

        <label className="signup_label" htmlFor="fast_id">
          User ID (eg: 20K-1234):
        </label>
        <input
          className="signup_input"
          type="text"
          id="user_id"
          value={user_id}
          onChange={handleUserIDChange}
        />
        {UserIdError && <div className="error-message">{UserIdError}</div>}

        <label className="signup_label" htmlFor="email">
          Email:
        </label>
        <input
          className="signup_input"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div className="error-message">{emailError}</div>}

        <label className="signup_label" htmlFor="password">
          Password:
        </label>
        <input
          className="signup_input"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}

        <label className="signup_label" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input
          className="signup_input"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {confirmPasswordError && (
          <div className="error-message">{confirmPasswordError}</div>
        )}

        <button className="signup_button" type="submit">
          Register
        </button>
        <button
          className="signup_button"
          type="button"
          onClick={redirectToLogin}
        >
          Already have an account?
        </button>

        {registrationError && (
          <div className="error-message">{registrationError}</div>
        )}
      </form>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import { Base64 } from "js-base64";
import "./MyForm.css";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const jobData = {
      jobTitle: queryParams.get("jobTitle"),
      jobType: queryParams.get("jobType"),
      jobDescription: queryParams.get("jobDescription"),
      jobLink: queryParams.get("jobLink"),
      deadlineDate: queryParams.get("deadlineDate"),
      noOfOpenings: queryParams.get("noOfOpenings"),
      qualificationRequirements: queryParams.get("qualificationRequirements"),
      responsibilities: queryParams.get("responsibilities"),
      about: queryParams.get("about"),
      jobStatus: queryParams.get("jobStatus"),
      postedOn: queryParams.get("postedOn"),
      updatedOn: queryParams.get("updatedOn"),
    };
    setSubject(jobData.jobTitle);

    const constructedMessage = `Job Type: ${jobData.jobType}\nDescription: ${jobData.jobDescription}\nLink: ${jobData.jobLink}\nDeadline Date: ${jobData.deadlineDate}\nOpenings: ${jobData.noOfOpenings}\nQualifications: ${jobData.qualificationRequirements}\nResponsibilities: ${jobData.responsibilities}\nAbout: ${jobData.about}\nStatus: ${jobData.jobStatus}\nPosted On: ${jobData.postedOn}\nUpdated On: ${jobData.updatedOn}`;

    setMessage(constructedMessage);
  }, []);

  // const baseUrl = "https://cdp-kappa.vercel.app";
  const baseUrl = "https://localhost:7000";
  const encryptPassword = (password) => {
    return Base64.encode(password);
  };

  const sendEmail = async () => {
    const password = window.prompt("Enter your email password:");
    if (!password) {
      alert("Password is required");
      return;
    }
    const encryptedPassword = encryptPassword(password);

    let dataSend = {
      email: email,
      subject: subject,
      message: message,
      password: encryptedPassword,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status > 199 && res.status < 300) {
      alert("Sent Successfully !");
      window.close();
    } else {
      alert("Failed to send email");
    }
  };

  return (
    <div className="my-form-container">
      <div className="my-form-box">
        <div className="my-form-header">
          <h1>Send Email</h1>
        </div>
        <div className="my-form-body">
          <div className="form-group">
            <label htmlFor="emailInput">Recipient's Email Address:</label>
            <input
              type="email"
              id="emailInput"
              placeholder="Enter recipient's email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subjectInput">Subject:</label>
            <input
              type="text"
              id="subjectInput"
              placeholder="Enter the subject here..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="messageInput">Message:</label>
            <textarea
              id="messageInput"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ height: "300px" }}
            />
          </div>
        </div>
        <div className="my-form-footer">
          <button onClick={sendEmail}>Send Email</button>
        </div>
      </div>
    </div>
  );
}

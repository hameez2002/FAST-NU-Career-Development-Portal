// import React, { useState } from "react";

// export default function MyForm() {
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const baseUrl = "http://localhost:7000";

//   const sendEmail = async () => {
//     let dataSend = {
//       email: email,
//       subject: subject,
//       message: message,
//     };

//     const res = await fetch(`${baseUrl}/email/sendEmail`, {
//       method: "POST",
//       body: JSON.stringify(dataSend),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         console.log(res);
//         if (res.status > 199 && res.status < 300) {
//           alert("Send Successfully !");
//         }
//       });

//     window.open("https://localhost:3000/", "_blank");
//   };

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7fafc" }}>
//       <div style={{ maxWidth: "lg", padding: "12px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", backgroundColor: "#fff" }}>
//         <div style={{ textAlign: "center" }}>
//           <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>EMAIL READY TO BE SENT</h1>
//           <p style={{ fontSize: "1.25rem", color: "#4a5568" }}>Dear CSO, Confirm and Send your Email ✉️</p>
//         </div>
//         <div style={{ marginTop: "2rem" }}>
//           <label style={{ display: "block", marginBottom: "0.5rem" }}>Email address</label>
//           <input
//             type="email"
//             placeholder="Receiver's Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", border: "1px solid #cbd5e0", borderRadius: "4px" }}
//           />
//           <label style={{ display: "block", marginBottom: "0.5rem" }}>Subject</label>
//           <input
//             type="text"
//             placeholder="Enter the subject here..."
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", border: "1px solid #cbd5e0", borderRadius: "4px" }}
//           />
//           <label style={{ display: "block", marginBottom: "0.5rem" }}>Message</label>
//           <textarea
//             placeholder="Enter your message here..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", border: "1px solid #cbd5e0", borderRadius: "4px" }}
//           />
//           <button
//             onClick={sendEmail}
//             style={{ background: "#4299e1", color: "#fff", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer", border: "none"  }}
//           >
//             Send Email
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// MyForm.js

import React, { useState } from "react";
import "./MyForm.css";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:7000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });

    window.open("https://localhost:3000/", "_blank");
  };

  return (
    <div className="email-form-container">
      <div className="email-form-box">
        <div className="email-form-header">
          <h1>Email Ready to be Sent</h1>
          <p>Dear CSO, Confirm and Send your Email ✉️</p>
        </div>
        <div className="email-form-body">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            id="emailInput"
            placeholder="Receiver's Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="subjectInput">Subject</label>
          <input
            type="text"
            id="subjectInput"
            placeholder="Enter the subject here..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label htmlFor="messageInput">Message</label>
          <textarea
            id="messageInput"
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendEmail}>Send Email</button>
        </div>
      </div>
    </div>
  );
}

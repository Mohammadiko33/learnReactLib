import React, { useEffect } from "react";

import "./App.css";
import apiReq from "./Services/Axios/configs";

export default function App() {
  const sendAReq = async (e) => {
    e.preventDefault();
    await apiReq
      .get("courses")
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        if (err.response.status < 300) {
          console.log(err.response.status);
        } else if (err.response.status < 400) {
          console.log(err.response.status);
        }
      });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={sendAReq}>
          <input type="text" placeholder="Name ..." />
          <input type="email" placeholder="Email ..." />
          <button type="submit" onSubmit={sendAReq}>Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

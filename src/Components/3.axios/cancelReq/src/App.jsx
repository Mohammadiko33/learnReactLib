import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  const abortController = new AbortController();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        // signal: abortController.signal,
        signal: AbortSignal.timeout(10),
      })
      .then((res) => {
        console.log(console.log(res.data));
      });

    return () => {
      abortController.abort(); // Cancel the request
    };
  });

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="Name ..." />
          <input type="email" placeholder="Email ..." />
          <button>Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

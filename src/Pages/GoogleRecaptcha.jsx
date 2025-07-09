import React, { useState } from "react";
import "../Components/3.axios/errorHandling/f/src/App.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function GoogleRecaptcha() {
  const [isBtnDisable, setIsBtnDisable] = useState(true);

  const loggedUser = (e) => {
    e.preventDefault();
    console.log("userLoggedIn")
  };

  return (
    <div className="login-page">
      <div className="form" onSubmit={loggedUser}>
        <form className="login-form">
          <input type="text" placeholder="Name ..." />
          <input type="email" placeholder="Email ..." />
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={() => setIsBtnDisable(false)}
          />
          <button type="submit" disabled={isBtnDisable}>
            Register
          </button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

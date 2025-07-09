import React, { useEffect, useState } from "react";
import "../3.axios/errorHandling/f/src/App.css";
import registerShema from "./Validator/registerPersianMsg";

export default function YupValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setErrors] = useState("");

  const validLive = async (e) => {
    e.preventDefault();

    // setIsFormValid(await registerShema.isValid({name , email}))

    try {
      const isValidIpts = await registerShema.validate(
        { name, email },
        {
          abortEarly: false,
        }
      );

      console.log({ isValidIpts });
    } catch (errs) {
      let errors = errs.inner.reduce(
        (acc, err) => ({
          ...acc,
          [err.path]: err.message,
        }),
        {}
      );
      console.log(errors)
      setErrors(errors);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("register");
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={validLive}>
            {error.name && (<div>{error.name}</div>)}
          <input
            type="text"
            placeholder="Name ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            {error.email && (<div>{error.email}</div>)}
          <input
            type="email"
            placeholder="Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onSubmit={validLive}>
            Rigester
          </button>
          <p className="message">
            {" "}
            Already registered? <a href="#">Sign In</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

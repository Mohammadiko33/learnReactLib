import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import headerFetch from "../headerFetch";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        password: "",
      });
    }, 5000);

    return () => clearTimeout(timeout);
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const res = await fetch(`http://localhost:4000/users`, {
      method: "POST",
      headers: headerFetch,
      body: JSON.stringify({
        name: formData.name,
        password: formData.password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setSubmitted(true);
      console.log(data);
    } else {
      console.log("you have error");
      if (res.status === 404) {
        console.log("this root is not defind");
      }
    }
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">فرم ثبت نام</h2>

        <div className="input-group">
          <label htmlFor="name" className="form-label">
            نام کامل:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام خود را وارد کنید"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="form-label">
            رمز عبور:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            placeholder="رمز خود را وارد کنید"
            min="1"
            max="120"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          ثبت نام
        </button>

        {submitted && (
          <div className="success-message">
            ثبت نام با موفقیت انجام شد! نام: {formData.name}, رمز عبور:{" "}
            {formData.password}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;

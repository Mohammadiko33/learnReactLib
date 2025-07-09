import React, { useEffect, useState } from "react";
import "../2.JsonServer/LoginPage.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import apiReq from "./confings";

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

    // film 31
    try {
      const res = await apiReq.post(`/users`, {
        name: formData.name,
        password: formData.password,
      });

      

      // film 29
      // try {
      //   const res = await axios.post("http://localhost:4000/users", {
      //     name: formData.name,
      //     password: formData.password,
      //   });
      setSubmitted(true);
      console.log(res);
      toast.success("ثبت نام با موفقیت انجام شد", {
        position: "bottom-right",
        className: "fdana",
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      return toast.error("خطایی در دریافت کاربران رخ داد", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="form-container">
      <ToastContainer />
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
            style={{ width: "100%" }}
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
            style={{ width: "100%" }}
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

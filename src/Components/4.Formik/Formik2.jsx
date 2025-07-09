import React from "react";
import "../../Components/3.axios/errorHandling/f/src/App.css";
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";

export default function Formik2() {
  return (
    <div className="login-page">
      <ToastContainer />
      <div className="form">
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values) =>
            toast.success(`به جمع ما خوش آمدی ${values.name}`, {
              position: "bottom-right",
              className: "ffunstI",
              rtl: true,
            })
          }
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name ..."
              />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email ..."
              />
              <button type="submit">Register</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

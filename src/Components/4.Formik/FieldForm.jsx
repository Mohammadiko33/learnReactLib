import React from "react";
import "../../Components/3.axios/errorHandling/f/src/App.css";
import { Field, Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";

export default function FieldForm() {
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
            <Form className="login-form">
              <Field type="text" name="name" placeholder="Name ..." />
              <Field type="email" name="email" placeholder="Email ..." />
              <button type="submit">Register</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </Form>
        </Formik>
      </div>
    </div>
  );
}

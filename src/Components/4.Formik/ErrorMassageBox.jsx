import React from "react";
import "../../Components/3.axios/errorHandling/f/src/App.css";
import { Field, Form, Formik , ErrorMessage } from "formik";
import { toast, ToastContainer } from "react-toastify";

export default function ErrorMassageBox() {
  return (
    <div className="login-page">
      <ToastContainer />
      <div className="form">
        <Formik
          validate={(values) => {
            const errors = {};
            if (values.name.length > 25) errors.name = "طول اسم شما از حدمجاز بیشتر است";
            if (values.name.length > 0 && values.name.length < 4) errors.name = "طول اسم شما خیلی کوتاه است";
            if (!values.name) errors.name = "وارد کردن اسم الزامی است";
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]{3,}\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "ایمیلی که شما وارد کرده اید معتبر نیست"
            if (values.email.length > 35) errors.email = "طول ایمیل شما از حد مجاز بیشتر است";
            if (!values.email) errors.email = "وارد کردن ایمیل الزامی است";
            return errors;
          }}
          validateOnBlur={true} // فعال‌سازی اعتبارسنجی پس از خارج‌شدن از فیلد
          initialValues={{ name: "", email: "" }}
          onSubmit={({ name }) =>
            toast.success(`به جمع ما خوش آمدی ${name}`, {
              position: "bottom-right",
              rtl: true,
            })
          }
        >
          {() => (
            <Form className="login-form">
              {/* {touched.name && errors.name && ( <div className="cred">{errors.name}</div> )} */}
              <ErrorMessage name="name"/>
              <Field type="text" name="name" placeholder="Name ..." />
              {/* {touched.email && errors.email && ( <div className="cred">{errors.email}</div> )} */}
              <ErrorMessage name="email"/>
              <Field type="email" name="email" placeholder="Email ..." />
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
}

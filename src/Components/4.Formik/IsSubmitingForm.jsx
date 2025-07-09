import React, { useState } from "react";
import "../../Components/3.axios/errorHandling/f/src/App.css";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";

export default function FormikCoustomHook() {
  const [touched, setTouched] = useState({ name: false, email: false }); // State برای مدیریت touched

  const { handleSubmit, errors, handleChange, isSubmitting, values } =
    useFormik({
      validate: (values) => {
        const errors = {};
        if (values.name.length > 25)
          errors.name = "طول اسم شما از حدمجاز بیشتر است";
        if (values.name.length > 0 && values.name.length < 4)
          errors.name = "طول اسم شما خیلی کوتاه است";
        if (!values.name) errors.name = "وارد کردن اسم الزامی است";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]{3,}\.[A-Z]{2,4}$/i.test(values.email))
          errors.email = "ایمیلی که شما وارد کرده اید معتبر نیست";
        if (values.email.length > 35)
          errors.email = "طول ایمیل شما از حد مجاز بیشتر است";
        if (!values.email) errors.email = "وارد کردن ایمیل الزامی است";
        return errors;
      },
      initialValues: { name: "", email: "" },
      onSubmit: (values, { setSubmitting }) => {
        const time = 2500
          setTimeout(() => {
            values.name = "";
            values.email = "";
          setSubmitting(false);
        }, time);
        toast.success(`به جمع ما خوش آمدی ${values.name}`, {
          position: "bottom-right",
          rtl: true,
          autoClose: time
        });
      },
    });

  // تابع برای مدیریت onBlur
  const handleCustomBlur = (fieldName) => {
    setTouched({ ...touched, [fieldName]: true });
  };

  return (
    <div className="login-page">
      <ToastContainer />
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          {/* نمایش خطا فقط اگر فیلد touched شده باشد */}
          {touched.name && errors.name && (
            <div className="cred">{errors.name}</div>
          )}
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={() => handleCustomBlur("name")} // مدیریت دستی onBlur
            placeholder="Name ..."
          />

          {touched.email && errors.email && (
            <div className="cred">{errors.email}</div>
          )}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={() => handleCustomBlur("email")} // مدیریت دستی onBlur
            placeholder="Email ..."
          />

          <button
            type="submit"
            className={`${isSubmitting ? "o5 " : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "فقط چند ثانیه" : "وارد شدن"}
          </button>
        </form>
      </div>
    </div>
  );
}

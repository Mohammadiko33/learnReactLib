import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { HiEye, HiEyeOff } from "react-icons/hi";
import "../Components/4.Formik/Formik.css"; // فایل CSS اختصاصی برای استایل بیشتر

const BeautifulForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-title">خوش آمدی !</h1>
          <p className="form-subtitle">  وارد اکانت خود شوید  </p>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "ایمیل خود را لطفا وارد کنید";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "ایمیل نامعتبر";
            }

            if (!values.password) {
              errors.password = "رمز خود را لطفا وارد کنید";
            } else if (values.password.length < 6) {
              errors.password = "پسورد حدعقل باید 6 کراکتر داشته باشد";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="form-body">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  ایمیل
                </label>
                <div className="input-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className={`ipt3 ${
                      errors.email && touched.email ? "border-red" : ""
                    }`}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="form-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  رمز عبور
                </label>
                <div className="input-group">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className={`ipt3 pr ${
                      errors.password && touched.password ? "border-red" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="toggle-password"
                  >
                    {showPassword ? (
                      <HiEyeOff className="icon-eye" />
                    ) : (
                      <HiEye className="icon-eye" />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="form-error"
                />
              </div>

              <div className="form-options">
                <div className="checkbox-group">
                  <Field type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">منو به خاطر بسپار</label>
                </div>
                <a href="#" className="link">
                  رمز خود را فراموش کرده اید ؟
                </a>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn5 b cp w100"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="apulse icon-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ... لطفا فقط چند ثانیه صبر کنید
                  </>
                ) : (
                  "ورود"
                )}
              </button>

              <div className="form-footer">
                <p>
                  اکانت ندارید?{' '}
                  <a href="#" className="tnone cblue">
                    ثبت نام
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BeautifulForm;
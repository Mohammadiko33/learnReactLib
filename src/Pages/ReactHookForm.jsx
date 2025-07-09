import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { HiEye, HiEyeOff } from "react-icons/hi";
import "../Components/4.Formik/Formik.css"; // فایل CSS اختصاصی برای استایل بیشتر
import { useForm } from "react-hook-form";

const BeautifulForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(errors);

  const registerUser = (data) => {
    console.log("data =>", data);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-title">خوش آمدی !</h1>
          <p className="form-subtitle"> وارد اکانت خود شوید </p>
        </div>

        <form className="form-body" onSubmit={handleSubmit(registerUser)}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              ایمیل
            </label>
            <div className="input-group">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  minLength: {
                    value: 13,
                    message: "ایمیل حداقل باید 13 رقم باشد",
                  },
                  maxLength: {
                    value: 30,
                    message: "ایمیل حداکثر باید 30 رقم باشد",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    // value: /^[\t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
                    message: "ایمیل نامعتبر است",
                  }
                })}
                placeholder="you@example.com"
                className={`ipt3`}
              />
              {errors.email && (
                <div className="cred">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              رمز عبور
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", {
                  required: "پسورد اجباری میباشد",
                  minLength: {
                    value: 8,
                    message: "پسورد حدعقل باید 8 رقم باشد",
                  },
                  maxLength: {
                    value: 25,
                    message: "پسورد حداکثر باید 25 رقم باشد",
                  },
                })}
                placeholder="••••••••"
                className={`ipt3 pr`}
              />
              {errors.password && (
                <div className="cred">{errors.password.message}</div>
              )}
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
          </div>

          <div className="form-options">
            <div className="checkbox-group">
              <input type="checkbox" id="remember" defaultValue={false} />
              <label htmlFor="remember">منو به خاطر بسپار</label>
            </div>
            <a href="#" className="link">
              رمز خود را فراموش کرده اید ؟
            </a>
          </div>

          <button
            type="submit"
            onSubmit={handleSubmit(registerUser)}
            // disabled={isSubmitting}
            className="btn5 b cp w100"
          >
            ورود
          </button>

          <div className="form-footer">
            <p>
              اکانت ندارید?
              <a href="#" className="tnone cblue">
                ثبت نام
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeautifulForm;

import React from "react";
import { useFormik } from "formik";

import "./App.css";
import { toast, ToastContainer } from "react-toastify";

export default function App() {
  const {
    values: { phone, name, address, email, password, desc, product, check },
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      phone: "",
      name: "",
      address: "",
      email: "",
      password: "",
      desc: "",
      product: "-1",
      check: false,
    },
    validateOnBlur: true,
    validate: (values) => {
      const errors = {};
      // Name validation
      if (values.name.length > 25)
        errors.name = "طول اسم شما از حدمجاز بیشتر است";
      if (values.name.length > 0 && values.name.length < 4)
        errors.name = "طول اسم شما خیلی کوتاه است";
      if (!values.name) errors.name = "وارد کردن اسم الزامی است";
      // Phone validation
      if (!/^[0-9]{11}$/.test(values.phone))
        errors.phone = "شماره تماس باید 11 رقم باشد";
      if (!values.phone) errors.phone = "وارد کردن شماره تماس الزامی است";
      // email validation
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]{3,}\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "ایمیلی که شما وارد کرده اید معتبر نیست";
      if (values.email.length > 35)
        errors.email = "طول ایمیل شما از حد مجاز بیشتر است";
      if (!values.email) errors.email = "وارد کردن ایمیل الزامی است";
      // address validation
      if (values.address.length < 5)
        errors.address = "آدرس باید حداقل 5 کاراکتر باشد";
      if (values.address.length > 50)
        errors.address = "آدرس شما از حد مجاز بیشتر است";
      if (!values.address) errors.address = "وارد کردن آدرس الزامی است";
      // desc validation
      if (values.desc.length < 10)
        errors.desc = "توضیحات باید حداقل 10 کاراکتر باشد";
      if (values.desc.length > 100)
        errors.desc = "توضیحات شما از حد مجاز بیشتر است";
      if (!values.desc) errors.desc = "وارد کردن توضیحات الزامی است";
      // password validation
      if (values.password.length < 6)
        errors.password = "رمز عبور باید حداقل 6 کاراکتر باشد";
      if (values.password.length > 20)
        errors.password = "رمز عبور شما از حد مجاز بیشتر است";
      if (!values.password) errors.password = "وارد کردن رمز عبور الزامی است";
      // product validation
      if (values.product === "-1") errors.product = "لطفا یک محصول انتخاب کنید";
      // rules validation
      if (!values.check) errors.check = "لطفا قوانین و مقررات را بپذیرید";
      return errors;
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      console.log(values.name);
      const time = 2500;
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, time);

      toast.success(`ورود با موفقیت انجام شد ${values.name}`, {
        position: "bottom-right",
        autoClose: time,
        rtl: true,
        draggable: true,
      });
    },
  });

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        {(touched.name && errors.name) ||
        (touched.phone && errors.phone) ||
        (touched.email && errors.email) ||
        (touched.address && errors.address) ||
        (touched.desc && errors.desc) ||
        (touched.password && errors.password) ||
        (touched.product && errors.product) ||
        (touched.check && errors.check) ? (
          <div className="modalErr">
            <h3 className="modalErrTiTle">
              {touched.name && errors.name
                ? errors.name
                : touched.phone && errors.phone
                ? errors.phone
                : touched.email && errors.email
                ? errors.email
                : touched.address && errors.address
                ? errors.address
                : touched.desc && errors.desc
                ? errors.desc
                : touched.password && errors.password
                ? errors.password
                : touched.product && errors.product
                ? errors.product
                : touched.check && errors.check
                ? errors.check
                : ""}
            </h3>
          </div>
        ) : null}
        <p className="form-title">لطفا فرم زیر را کامل کنید</p>

        <main>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="شماره تماس"
          />

          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="نام و نام خانوادگی"
          />
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="ادرس"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="ایمیل"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="رمز عبور"
            autoComplete="current-password" // این خط را اضافه کنید
          />
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="توضیحات"
          />
        </main>

        <section>
          <select
            name="product"
            value={product}
            onChange={handleChange}
            onBlur={handleBlur}
            id="selectBox"
          >
            <option value="-1">محصول خود را انتخاب کنید</option>
            <option value="kif">کیف</option>
            <option value="kafsh">کفش</option>
            <option value="kamarband">کمربند</option>
          </select>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            name="check"
            onChange={handleChange}
            checked={check}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            قوانین و مقررات و میپذیرم
          </label>
        </section>

        <button
          type="submit"
          onSubmit={handleSubmit}
          className={`${isSubmitting ? "o5 " : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "کمی صبر کنید" : "وارد شوید"}
        </button>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </form>
    </>
  );
}

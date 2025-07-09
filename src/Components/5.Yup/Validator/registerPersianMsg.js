import * as Yup from "yup";

const registerShema = Yup.object().shape({
  name: Yup.string()
    .min(3, "نام حدعقل باید 3 کراکتر داشته باشد")
    .max(20, "نام حداکثر باید 20 کراکتر داشته باشد")
    .required("نام یک ورودی الزامی است"),
  email: Yup.string()
    .min(13, "ایمیل حدعقل باید 13 کراکتر داشته باشد")
    .max(30, "ایمیل حداکثر باید 30 کراکتر داشته باشد")
    .email("ایمیل وارد شده معتبر نمیباشد")
    .required("ایمیل یک ورودی الزامی است"), // @gmail.com
});

export default registerShema;

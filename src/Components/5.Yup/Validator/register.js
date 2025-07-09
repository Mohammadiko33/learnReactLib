import * as Yup from "yup";

const registerShema = Yup.object().shape({
  name: Yup.string().min(3).max(20).required(),
  email: Yup.string().min(13).max(30).email().required(), // @gmail.com
});

export default registerShema;

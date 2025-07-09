import axios from "axios";
import { reject } from "lodash";

const apiReq = axios.create({
  baseURL: "http://localhost:4000/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

apiReq.interceptors.request.use(
  (confing) => {
    console.log("confing", confing);
    return confing;
  },
  (err) => {
    console.log("err", err);
   return Promise.reject(err)
  }
);

apiReq.interceptors.response.use(
  (confing) => {},
  (err) => {},
)

export default apiReq;

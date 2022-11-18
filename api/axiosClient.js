import { Axios } from "axios";
const axiosClient = axios.create({
  baseUrl: "https://js-post-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
export default axiosClient;

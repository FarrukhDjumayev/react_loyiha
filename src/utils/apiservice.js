import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

apiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
  }
);

let token = localStorage.getItem("access");
apiClient.interceptors.request.use(
  (conf) => {
    conf.headers.set("Authorization", `Bearer ${token}`);
    console.log(conf);
    return conf;
  },
  (err) => {
    console.log(err.message);
  }
);
import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",
});

instance.interceptors.request.use((check) => {
  const token = localStorage.getItem("token");
  if (token) {
    check.headers.Authorization = `Bearer ${token}`;
  }
  return check;
});
export default instance;

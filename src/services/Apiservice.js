import axios from "axios";
const axiosClient = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        Accept: "application/json",
        "Content-Type":  "multipart/form-data",
    },
});
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
  );
function showPdf (file) {
    return "http://localhost:5000/cv/" + file;
}

function get (url) {
    return axiosClient.get(url);
}
function post (url, data) {
    return axiosClient.post(url, data);
}
function patch (url, data) {
    return axiosClient.patch(url, data);
}
function put (url, data) {
    return axiosClient.put(url, data);
}
function drop (url) {
    return axiosClient.delete(url);
}

export default {
    get, post, patch, put, drop, showPdf
}

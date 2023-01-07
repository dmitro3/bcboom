import axios from "axios";

const url =
    // process.env.MIX_APP_ENV === "production"
         "https://bcboom.restoraweb.com/api"
        // : "http://localhost:8000/api";

export const axioInstance = axios.create({
    baseURL: url,
    timeout: 10000,
});

const apiService = (url, method, data, headers) => {
    return new Promise((resolve, reject) => {
        axioInstance({
            url,
            method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...headers,
            },
            data,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error.response);
            });
    });
};

export default apiService;

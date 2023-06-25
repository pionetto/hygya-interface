import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
    return api.post("/api/v1/login", { email, password });
}

export const getUsers = async() => {
    return api.get("/api/v1/users").then(function(response) {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
}
import apiService from "@/hooks/apiService";

const login = (payload) => apiService("/auth/login", "POST", payload);

const authFunctions = {
    login,
};

export default authFunctions;

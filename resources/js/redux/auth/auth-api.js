import apiService from "@/hooks/apiService";

const login = (payload) => apiService("/auth/login", "POST", payload);
const logout = () => apiService("/auth/logout", "POST");
const signup = (payload) => apiService("/auth/register", "POST", payload);
const authFunctions = {
    login,
    logout,
    signup
};

export default authFunctions;

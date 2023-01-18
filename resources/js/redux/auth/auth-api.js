import apiService from "@/hooks/apiService";

const login = (payload) => apiService("/auth/login", "POST", payload);
const logout = () => apiService("/auth/logout", "POST");
const signup = (payload) => apiService("/auth/register", "POST", payload);
const forgotPassword = (payload) =>
    apiService("/password/email", "POST", payload);

const resetPassword = (payload) =>
    apiService("/password/resetcode", "POST", payload);

const authFunctions = {
    login,
    logout,
    signup,
    forgotPassword,
    resetPassword,
};

export default authFunctions;

import apiService from "@/hooks/apiService";

const getMe = () => apiService("/auth/user-profile", "GET");
const changeUsername = (username) =>
    apiService("/update/username", "POST", username);
export const profileFunctions = {
    getMe,
    changeUsername,
};

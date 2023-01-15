import apiService from "@/hooks/apiService";

const getMe = () => apiService("/auth/user-profile", "GET");
const changeUsername = (username) =>
    apiService("/update/username", "POST", username);
const changeProfileImage = (profileImage) =>
    apiService("/image/update", "POST", profileImage);
export const profileFunctions = {
    getMe,
    changeUsername,
    changeProfileImage,
};

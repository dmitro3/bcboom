import apiService from "@/hooks/apiService";

const getMe = () => apiService("/auth/user-profile", "GET");
const changeUsername = (username) =>
    apiService("/update/username", "POST", username);
const changeProfileImage = (profileImage) =>
    apiService("/image/update", "POST", profileImage, {
        "Content-Type": "multipart/form-data"
    });
export const profileFunctions = {
    getMe,
    changeUsername,
    changeProfileImage,
};

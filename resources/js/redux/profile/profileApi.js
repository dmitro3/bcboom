import apiService from "@/hooks/apiService"

const getMe = () => apiService("/auth/user-profile", "GET");

export const profileFunctions = {
    getMe
}
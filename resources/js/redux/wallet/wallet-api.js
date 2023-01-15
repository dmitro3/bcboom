import apiService from "@/hooks/apiService";

const getWallet = async () => apiService("wallet/info", "GET");

export const walletFunctions = {
    getWallet,
};

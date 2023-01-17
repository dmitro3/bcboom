import apiService from "@/hooks/apiService";

const getWallet = async () => apiService("wallet/info", "GET");
const deposit = async (amount) => apiService("payment/pay", "POST", { amount });
export const walletFunctions = {
    getWallet,
    deposit,
};

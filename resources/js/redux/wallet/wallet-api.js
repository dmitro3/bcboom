import apiService from "@/hooks/apiService";

const getWallet = async () => apiService("wallet/info", "GET");
const deposit = async (amount) => apiService("payment/pay", "POST", { amount });
const widthdraw = async (payload) => apiService("withdrawal", "POST", payload);
const allPayments = async () => apiService("/all/payments", "GET");
const allWithdraws = async () => apiService("/all/withdrawals", "GET");
const getRates = async () => apiService("/exchange/rates", "GET");
export const walletFunctions = {
    getWallet,
    deposit,
    widthdraw,
    allPayments,
    allWithdraws,
    getRates,
};

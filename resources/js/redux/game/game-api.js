import apiService from "@/hooks/apiService";

const saveGame = (payload) => apiService("/game/new", "POST", payload);
const initializeGame = (payload) =>
    apiService(`/slot/games/init/${payload.name}`, "GET");
const fetchAllGames = () => apiService("/games/all", "GET");
const gameApiFunctions = {
    saveGame,
    fetchAllGames,
    initializeGame,
};

export default gameApiFunctions;

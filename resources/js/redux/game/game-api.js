import apiService from "@/hooks/apiService";

const saveGame = (payload) => apiService("/game/new", "POST", payload);
const fetchAllGames = () => apiService("/games/all", "GET");
const initializeGame = (payload) =>
    apiService(`/slot/games/init/${payload.name}`, "GET");
const gameApiFunctions = {
    saveGame,
    fetchAllGames,
    initializeGame,
};

export default gameApiFunctions;

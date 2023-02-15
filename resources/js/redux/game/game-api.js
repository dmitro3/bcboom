import apiService from "@/hooks/apiService";

const saveGame = (payload) => apiService("/game/new", "POST", payload);
const fetchAllGames = () => apiService("/games/all", "GET");
const gameApiFunctions = {
    saveGame,
    fetchAllGames,
};

export default gameApiFunctions;

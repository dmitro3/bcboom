import apiService from "@/hooks/apiService";

const saveGame = (payload) => apiService("/game/new", "POST", payload);

const gameApiFunctions = {
    saveGame,
};

export default gameApiFunctions;

import DiceButtonGrid from "@/Components/Game/buttongrids/DiceButtonGrid";
import DiceFrame from "@/Components/Game/frames/DiceFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { DiceWrapper } from "@/Components/Game/styles/diceStyles";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { setSound } from "@/redux/app-state/app-slice";
import { saveGame, setGameData, setGameIsOn } from "@/redux/game/game-slice";
import { calcPayout, sleep } from "@/utils/util";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSound from "use-sound";

const DiceCloudBg = () => (
    <DiceWrapper>
        <div className="shootingStarContainer">
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
        </div>
        <div className="shootingStarContainer">
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
        </div>
        <div className="shootingStarContainer">
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
            <div className="shootingStar"></div>
        </div>

        <div className="stars"></div>
        <div className="twinkleMask"></div>
        <div className="twinkleMask2"></div>
        <div className="clouds"></div>

        <div className="fogContainer">
            <div className="fog"></div>
        </div>
    </DiceWrapper>
);

const GamesPageWrapper = styled("div")(({ isMobile }) => ({
    background: "#1D2036",
    width: `${isMobile ? "99%" : "98%"}`,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: `${isMobile ? "1.3rem" : "2rem"}`,
    paddingTop: "2.125rem",
    paddingLeft: `${isMobile ? "0.8rem" : "1rem"}`,
    paddingRight: `${isMobile ? "0" : "1rem"}`,
    paddingBottom: "2.125rem",
    height: "80%",
    position: "relative",
}));
const DicePage = () => {
    const { isMobile } = useScreenResolution();
    const [playing, setPlaying] = useState(false);
    const [playDeter, setPlayDeter] = useState(true);
    const { gameData } = useSelector((state) => state.game);
    const dispatch = useDispatch();
    const { sound } = useSelector((state) => state.app);

    const [play, { stop, isPlaying }] = useSound(sound.currentSound);

    const handleDiceRoll = async (diceNumber) => {
        await sleep(2000);
        const rolled = diceNumber.reduce((a, b) => a + b, 0);
        let differenceInChance = gameData.rollUnder.value.split(" - ");
        // differenceInChance = Math.abs(
        //     differenceInChance[1] - differenceInChance[0]
        // );
        const array = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        ];
        const rolledArray = array.slice(
            differenceInChance[0],
            differenceInChance[1]
        );
        const status = rolledArray.includes(rolled) ? "won" : "lose";
        // const status =
        //     rolled <= differenceInChance[0] || rolled >= differenceInChance[1]
        //         ? "won"
        //         : "lose";
        // const status = rolled <= differenceInChance ? "won" : "lose";
        const amount = status === "won" ? gameData.payout : gameData.betAmount;
        toast.info("You rolled " + rolled + ` and ${status} ` + amount, {
            position: "top-center",
        });
        dispatch(setGameData({ ...gameData, diceNumber: [0] }));
        dispatch(setSound({ field: "muted", value: true }));
        stop();
        await sleep(5000);
        const response = await dispatch(
            saveGame({
                name: "dice",
                status,
                amount: gameData.betAmount,
                earning: status === "won" ? gameData.payout : 0,
                loss: status === "won" ? 0 : gameData.betAmount,
            })
        );
        if (response.type === "game/new/rejected") {
            toast.error(response.payload.message, {
                position: "top-center",
            });
        }
        if (response.payload.data.message === "success")
            dispatch(setGameIsOn(false));
    };

    useEffect(() => {
        calcPayout(gameData, dispatch, setGameData);
        // for (let i = 0; i < +gameData.numberOfPlay; i++) {
        if (gameData.diceNumber.length === 3) {
            // console.log("gothereerer");
            // setTimeout(() => {
            //     dispatch(setGameIsOn(false));
            // }, 300);
            handleDiceRoll(gameData.diceNumber);
            // }
        }
    }, [gameData.winChance, gameData.betAmount, gameData.diceNumber]);

    console.log("gaeData: ", gameData);
    // useEffect(() => {
    //     calcPayout(gameData, dispatch, setGameData);
    // }, [gameData.rollUnder]);

    return (
        <div>
            <Head title="Games Dice" />
            {/* <GuestLayout> */}
        <PageTemplate innerHeader={true}>
                <GamesPageWrapper isMobile={isMobile}>
                    <GameLayout
                        GameFrameText={"Dice"}
                        GameFrame={
                            <DiceFrame
                                setPlaying={setPlaying}
                                playing={playing}
                            />
                        }
                        ButtonGrid={
                            <DiceButtonGrid
                                playDeter={playDeter}
                                setPlayDeter={setPlayDeter}
                            />
                        }
                        customFrameHeader={true}
                        innerHeader={true}
                        customFrameBoxStyles={{
                            height: "30rem",
                            position: "relative",
                        }}
                        GameBg={DiceCloudBg()}
                        customFrameStyles={{
                            position: "relative",
                        }}
                    />
                </GamesPageWrapper>
            </PageTemplate>
            {/* </GuestLayout> */}
        </div>
    );
};

export default DicePage;

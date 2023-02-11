import DiceButtonGrid from "@/Components/Game/buttongrids/DiceButtonGrid";
import DiceFrame from "@/Components/Game/frames/DiceFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { DiceWrapper } from "@/Components/Game/styles/diceStyles";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { setGameData } from "@/redux/game/game-slice";
import { sleep } from "@/utils/util";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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

    const handleDiceRoll = async (diceNumber) => {
        await sleep(2000);
        const rolled = diceNumber.reduce((a, b) => a + b, 0);
        toast.info("You rolled " + rolled);
        dispatch(setGameData({ ...gameData, diceNumber: [0] }));
    };

    useEffect(() => {
        let payout = (
            ((100 - 0.2) / gameData.winChance) *
            gameData.betAmount *
            0.7
        ).toFixed(4);
        if (gameData.winChance === 0) payout = 0;
        if (payout === "Infinity" || payout === "undefined" || payout === NaN)
            payout = 0;
        if (
            Number(String(payout).split(".")[0]) <
            Number(String(gameData.betAmount).split(".")[0])
        )
            payout = (
                gameData.betAmount *
                1.1 *
                0.01 *
                gameData.winChance
            ).toFixed(4);
        const loseAmount = gameData.betAmount;
        dispatch(
            setGameData({
                ...gameData,
                loseAmount,
                payout,
            })
        );

        if (gameData.diceNumber.length === 3) {
            handleDiceRoll(gameData.diceNumber);
            // console.log("playDeter", gameData.diceNumber);
        }
    }, [gameData.winChance, gameData.betAmount, gameData.diceNumber]);

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

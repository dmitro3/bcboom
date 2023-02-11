import DiceButtonGrid from "@/Components/Game/buttongrids/DiceButtonGrid";
import DiceFrame from "@/Components/Game/frames/DiceFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { DiceWrapper } from "@/Components/Game/styles/diceStyles";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { sleep } from "@/utils/util";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

    useEffect(() => {
        console.log("gameData", gameData);
    }, [gameData]);

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

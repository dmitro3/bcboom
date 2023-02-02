import DiceButtonGrid from "@/Components/Game/buttongrids/DiceButtonGrid";
import DiceFrame from "@/Components/Game/frames/DiceFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import React, { useRef, useState } from "react";
import { DiceWrapper } from "@/Components/Game/styles/diceStyles";

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

const Dice = () => {
    const { isMobile } = useScreenResolution();
    const GamesPageWrapper = styled("div")(() => ({
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
    const [btnClicked, setBtnClicked] = useState(false);
    const [diceRef, setDiceRef] = useState(useRef(null));
    async function rollDice(diceRef) {
        const min = 1;
        const max = 24;
        function getRandomInt(min, max) {
            return (Math.floor(Math.random() * (max - min)) + min) * 90;
        }
        const xRand = getRandomInt(min, max);
        const yRand = getRandomInt(min, max);
        console.log("refff", ref);
        ref.current.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`; // rotateZ(${zRand}deg)
        // await sleep(2000);
        ref.current.style.webkitTransform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;
        // setBtnClicked(false);
    }
    const gripProps = {
        setDiceRef,
        rollDice,
    };

    return (
        <div>
            <Head title="Games Dice" />
            {/* <GuestLayout> */}
            <PageTemplate innerHeader={true}>
                <GamesPageWrapper>
                    <GameLayout
                        GameFrameText={"Dice"}
                        GameFrame={DiceFrame(gripProps)}
                        ButtonGrid={DiceButtonGrid(gripProps)}
                        customFrameHeader={true}
                        innerHeader={true}
                        customFrameBoxStyles={{
                            height: "21rem",
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

export default Dice;

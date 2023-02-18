import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setGameData, setGameIsOn } from "@/redux/game/game-slice";
import { setSound } from "@/redux/app-state/app-slice";
import { randomDiceOutput, sleep } from "@/utils/util";
import { styled } from "@mui/system";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSound from "use-sound";

const DicesWrapper = styled("div")(({ isMobile }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    // width: "100%",
    // height: "100%",
    // position: "absolute",
    // top: "0",
    // left: "0",
    zIndex: "999",
    // backgroundColor: "rgba(0,0,0,0.5)",
    // backdropFilter: "blur(5px)",

    "& > *": {
        width: isMobile && "100px",
    },
}));

const containerStyle = {
    width: "100px",
    height: "100px",
    position: "relative",
    margin: "0 auto 40px",
    // border: "1px solid #FFF",
    perspective: "1000px",
    perspectiveOrigin: "50% 100%",
};

const cubeStyle = {
    width: "100%",
    height: "100%",
    top: "100px",
    position: "absolute",
    transformStyle: "preserve-3d",
    transition: "transform 2s",
};

const cubeDivStyle = {
    background: "hsla(0, 85%, 50%, 0.8)",
    display: "block",
    position: "absolute",
    width: "200px",
    height: "200px",
    border: "2px solid #ab1a1a",
    margin: "0 auto",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "500%",
    textAlign: "center",
    padding: "50px 0",
};
const dotStyle = {
    display: "block",
    position: "absolute",
    width: "30px",
    height: "30px",
    background: "#fff",
    borderRadius: "15px",
};

const wrapperStyle = (isMobile) => {
    return {
        transform: `scale(${isMobile ? "0.25" : ".35"})`,
        marginTop: "-1rem",
        marginBottom: "2rem",
        padding: "1rem",
    };
};

const DiceWrapperOne = styled("div")(({ isMobile }) => ({
    ...wrapperStyle(isMobile),
    "&": {
        "#cube .front": { transform: "translateZ(100px)" },
        "#cube .back": { transform: "rotateX(-180deg)    translateZ(100px)" },
        "#cube .right": { transform: "rotateY(90deg)    translateZ(100px)" },
        "#cube .left": { transform: "rotateY(-90deg)    translateZ(100px)" },
        "#cube .top": { transform: "rotateX(90deg)    translateZ(100px)" },
        "#cube .bottom": { transform: "rotateX(-90deg)    translateZ(100px)" },

        // width: "200px",
        // height: "200px",
        ".container": {
            ...containerStyle,
        },
        "#cube": {
            ...cubeStyle,
        },
        "#cube:hover": { cursor: "pointer" },
        "#cube div": {
            ...cubeDivStyle,
        },
        ".dot": {
            ...dotStyle,
        },
        ".front .dot1": { top: "85px", left: "85px" },
        ".back .dot1": { top: "45px", left: "45px" },
        ".back .dot2": { top: "125px", left: "125px" },
        ".right .dot1": { top: "45px", left: "45px" },
        ".right .dot2": { top: "85px", left: "85px" },
        ".right .dot3": { top: "125px", left: "125px" },
        ".left .dot1": { top: "45px", left: "45px" },
        ".left .dot2": { top: "45px", left: "125px" },
        ".left .dot3": { top: "125px", left: "45px" },
        ".left .dot4": { top: "125px", left: "125px" },
        ".top .dot1": { top: "45px", left: "45px" },
        ".top .dot2": { top: "45px", left: "125px" },
        ".top .dot3": { top: "85px", left: "85px" },
        ".top .dot4": { top: "125px", left: "45px" },
        ".top .dot5": { top: "125px", left: "125px" },
        ".bottom .dot1": { top: "45px", left: "45px" },
        ".bottom .dot2": { top: "45px", left: "85px" },
        ".bottom .dot3": { top: "45px", left: "125px" },
        ".bottom .dot4": { top: "125px", left: "45px" },
        ".bottom .dot5": { top: "125px", left: "85px" },
        ".bottom .dot6": { top: "125px", left: "125px" },
    },
}));

const DiceWrapperTwo = styled("div")(({ isMobile }) => ({
    ...wrapperStyle(isMobile),
    "#cube2 .front2": { transform: "translateZ(100px)" },
    "#cube2 .back2": { transform: "rotateX(-180deg)    translateZ(100px)" },
    "#cube2 .right2": { transform: "rotateY(90deg)    translateZ(100px)" },
    "#cube2 .left2": { transform: "rotateY(-90deg)    translateZ(100px)" },
    "#cube2 .top2": { transform: "rotateX(90deg)    translateZ(100px)" },
    "#cube2 .bottom2": { transform: "rotateX(-90deg)    translateZ(100px)" },

    // width: "200px",
    // height: "200px",
    ".container2": {
        ...containerStyle,
    },
    "#cube2": {
        ...cubeStyle,
    },
    "#cube2:hover": { cursor: "pointer" },
    "#cube2 div": {
        ...cubeDivStyle,
    },
    ".dot2": {
        ...dotStyle,
    },
    ".front2 .dot21": { top: "85px", left: "85px" },
    ".back2 .dot21": { top: "45px", left: "45px" },
    ".back2 .dot22": { top: "125px", left: "125px" },
    ".right2 .dot21": { top: "45px", left: "45px" },
    ".right2 .dot22": { top: "85px", left: "85px" },
    ".right2 .dot23": { top: "125px", left: "125px" },
    ".left2 .dot21": { top: "45px", left: "45px" },
    ".left2 .dot22": { top: "45px", left: "125px" },
    ".left2 .dot23": { top: "125px", left: "45px" },
    ".left2 .dot24": { top: "125px", left: "125px" },
    ".top2 .dot21": { top: "45px", left: "45px" },
    ".top2 .dot22": { top: "45px", left: "125px" },
    ".top2 .dot23": { top: "85px", left: "85px" },
    ".top2 .dot24": { top: "125px", left: "45px" },
    ".top2 .dot25": { top: "125px", left: "125px" },
    ".bottom2 .dot21": { top: "45px", left: "45px" },
    ".bottom2 .dot22": { top: "45px", left: "85px" },
    ".bottom2 .dot23": { top: "45px", left: "125px" },
    ".bottom2 .dot24": { top: "125px", left: "45px" },
    ".bottom2 .dot25": { top: "125px", left: "85px" },
    ".bottom2 .dot26": { top: "125px", left: "125px" },
}));
const DiceWrapperThree = styled("div")(({ isMobile }) => ({
    ...wrapperStyle(isMobile),
    "#cube3 .front3": { transform: "translateZ(100px)" },
    "#cube3 .back3": { transform: "rotateX(-180deg)    translateZ(100px)" },
    "#cube3 .right3": { transform: "rotateY(90deg)    translateZ(100px)" },
    "#cube3 .left3": { transform: "rotateY(-90deg)    translateZ(100px)" },
    "#cube3 .top3": { transform: "rotateX(90deg)    translateZ(100px)" },
    "#cube3 .bottom3": { transform: "rotateX(-90deg)    translateZ(100px)" },

    // width: "200px",
    // height: "200px",
    ".container3": {
        ...containerStyle,
    },
    "#cube3": {
        ...cubeStyle,

        
    },
    "#cube3:hover": { cursor: "pointer" },
    "#cube3 div": {
        ...cubeDivStyle,
    },
    ".dot3": {
        ...dotStyle,
    },
    ".front3 .dot31": { top: "85px", left: "85px" },
    ".back3 .dot31": { top: "45px", left: "45px" },
    ".back3 .dot32": { top: "125px", left: "125px" },
    ".right3 .dot31": { top: "45px", left: "45px" },
    ".right3 .dot32": { top: "85px", left: "85px" },
    ".right3 .dot33": { top: "125px", left: "125px" },
    ".left3 .dot31": { top: "45px", left: "45px" },
    ".left3 .dot32": { top: "45px", left: "125px" },
    ".left3 .dot33": { top: "125px", left: "45px" },
    ".left3 .dot34": { top: "125px", left: "125px" },
    ".top3 .dot31": { top: "45px", left: "45px" },
    ".top3 .dot32": { top: "45px", left: "125px" },
    ".top3 .dot33": { top: "85px", left: "85px" },
    ".top3 .dot34": { top: "125px", left: "45px" },
    ".top3 .dot35": { top: "125px", left: "125px" },
    ".bottom3 .dot31": { top: "45px", left: "45px" },
    ".bottom3 .dot32": { top: "45px", left: "85px" },
    ".bottom3 .dot33": { top: "45px", left: "125px" },
    ".bottom3 .dot34": { top: "125px", left: "45px" },
    ".bottom3 .dot35": { top: "125px", left: "85px" },
    ".bottom3 .dot36": { top: "125px", left: "125px" },
}));

const DiceComponent = ({ setPlaying }) => {
    const { isMobile } = useScreenResolution();
    const diceOneRef = useRef(null);
    const diceTwoRef = useRef(null);
    const diceThreeRef = useRef(null);
    const dispatch = useDispatch();
    const { gameData } = useSelector((state) => state.game);
    async function rollDice(dice, idx) {
        dice.style.transition = "transform 3s ease";
        dice.style.webkitTransform = `rotateX(${Math.floor(
            Math.random() * 360 + 1
        )}deg) rotateY(${Math.floor(Math.random() * 360 + 1)}deg)`;
        const diceNumber = randomDiceOutput(1, 6);
        await sleep(900).then(() => {
            let yRand = 720;
            let xRand = 450;
            switch (diceNumber) {
                case 1:
                    yRand = 16200;
                    xRand = 9720;
                    break;
                case 2:
                    yRand = 11340;
                    xRand = 3240;
                    break;
                case 3:
                    yRand = 18630;
                    xRand = 12960;
                    break;
                case 4:
                    yRand = 12150;
                    xRand = 14580;
                    break;
                case 5:
                    yRand = 12150;
                    xRand = 8910;
                    break;
            }

            dice.style.transform =
                "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
            dice.style.webkitTransform =
                "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
            dice.style.transition = "transform 2s ease";
            dice.style.webkitTransition = "transform 2s ease";
        });
        return diceNumber;
    }
    const { playing } = useSelector((state) => state.game);
    const { sound } = useSelector((state) => state.app);
    const [play, { stop, isPlaying }] = useSound(sound.currentSound);
    useEffect(() => {
        if (
            playing &&
            diceOneRef.current &&
            diceTwoRef.current &&
            diceThreeRef.current
        ) {
            play();
            console.log("sound: ", sound.currentSound);
            async function diceFn() {
                setPlaying(true);
                let x = await Promise.allSettled([
                    rollDice(diceOneRef.current, 1),
                    rollDice(diceTwoRef.current, 2),
                    rollDice(diceThreeRef.current, 3),
                ]);
                dispatch(
                    setGameData({
                        ...gameData,
                        diceNumber: x.map((item) => item.value),
                    })
                );
            }

            diceFn();
            setPlaying(false);
        }
    }, [playing]);
    return (
        <DicesWrapper isMobile={isMobile}>
            <DiceWrapperOne isMobile={isMobile}>
                <section className="container">
                    <div id="cube" ref={diceOneRef}>
                        <div className="front">
                            <span className="dot dot1"></span>
                        </div>
                        <div className="back">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                        </div>
                        <div className="right">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                        </div>
                        <div className="left">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                            <span className="dot dot4"></span>
                        </div>
                        <div className="top">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                            <span className="dot dot4"></span>
                            <span className="dot dot5"></span>
                        </div>
                        <div className="bottom">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                            <span className="dot dot4"></span>
                            <span className="dot dot5"></span>
                            <span className="dot dot6"></span>
                        </div>
                    </div>
                </section>
            </DiceWrapperOne>
            <DiceWrapperTwo isMobile={isMobile}>
                <section className="container2">
                    <div id="cube2" ref={diceTwoRef}>
                        <div className="front2">
                            <span className="dot2 dot21"></span>
                        </div>
                        <div className="back2">
                            <span className="dot2 dot21"></span>
                            <span className="dot2 dot22"></span>
                        </div>
                        <div className="right2">
                            <span className="dot2 dot21"></span>
                            <span className="dot2 dot22"></span>
                            <span className="dot2 dot23"></span>
                        </div>
                        <div className="left2">
                            <span className="dot2 dot21"></span>
                            <span className="dot2 dot22"></span>
                            <span className="dot2 dot23"></span>
                            <span className="dot2 dot24"></span>
                        </div>
                        <div className="top2">
                            <span className="dot2 dot21"></span>
                            <span className="dot2 dot22"></span>
                            <span className="dot2 dot23"></span>
                            <span className="dot2 dot24"></span>
                            <span className="dot2 dot25"></span>
                        </div>
                        <div className="bottom2">
                            <span className="dot2 dot21"></span>
                            <span className="dot2 dot22"></span>
                            <span className="dot2 dot23"></span>
                            <span className="dot2 dot24"></span>
                            <span className="dot2 dot25"></span>
                            <span className="dot2 dot26"></span>
                        </div>
                    </div>
                </section>
            </DiceWrapperTwo>
            <DiceWrapperThree isMobile={isMobile}>
                <section className="container3">
                    <div id="cube3" ref={diceThreeRef}>
                        <div className="front3">
                            <span className="dot3 dot31"></span>
                        </div>
                        <div className="back3">
                            <span className="dot3 dot31"></span>
                            <span className="dot3 dot32"></span>
                        </div>
                        <div className="right3">
                            <span className="dot3 dot31"></span>
                            <span className="dot3 dot32"></span>
                            <span className="dot3 dot33"></span>
                        </div>
                        <div className="left3">
                            <span className="dot3 dot31"></span>
                            <span className="dot3 dot32"></span>
                            <span className="dot3 dot33"></span>
                            <span className="dot3 dot34"></span>
                        </div>
                        <div className="top3">
                            <span className="dot3 dot31"></span>
                            <span className="dot3 dot32"></span>
                            <span className="dot3 dot33"></span>
                            <span className="dot3 dot34"></span>
                            <span className="dot3 dot35"></span>
                        </div>
                        <div className="bottom3">
                            <span className="dot3 dot31"></span>
                            <span className="dot3 dot32"></span>
                            <span className="dot3 dot33"></span>
                            <span className="dot3 dot34"></span>
                            <span className="dot3 dot35"></span>
                            <span className="dot3 dot36"></span>
                        </div>
                    </div>
                </section>
            </DiceWrapperThree>
        </DicesWrapper>
    );
};

export default DiceComponent;

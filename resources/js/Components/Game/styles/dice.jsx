import { setGameIsOn } from "@/redux/game/game-slice";
import { styled } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainWrapper = styled("div")(() => ({
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
}));

const DicesWrapper = ({ children }) => {
    // const refs = useRef([]);

    // useEffect(() => {
    //     refs.current = refs.current.slice(0, children.length);
    //     refs.current.forEach((ref, index) => {
    //         // const container = ref.querySelector(".container");
    //         const front = window.getComputedStyle(
    //            ref.querySelector(`.front${index + 1}`)
    //         ).transform;
    //         const backTop = ref.querySelector(`.back${index + 1}`).offsetTop;
    //         const backLeft = ref.querySelector(`.back${index + 1}`).offsetLeft;
    //         const right = ref.querySelector(`.right${index + 1}`);
    //         const left = ref.querySelector(`.left${index + 1}`);
    //         const top = ref.querySelector(`.top${index + 1}`);
    //         const bottom = ref.querySelector(`.bottom${index + 1}`);

    //         console.log(
    //             `Child child: ${index + 1} width:`,
    //             // ref,
    //             // container,
    //             // window.getComputedStyle(front.style).transform,
    //             front,
    //             backTop,
    //             backLeft,
    //             // right,
    //             // left,
    //             // top,
    //             // bottom
    //         );
    //     });
    // }, [children]);

    return (
        <MainWrapper>
            {/* {children.map((child, index) => {
                return React.cloneElement(child, {
                    ref: (el) => (refs.current[index] = el),
                });
            })} */}
            {children}
        </MainWrapper>
    );
};

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
    boxShadow: "-3px 4px 42px -16px rgba(0,0,0,0.45) inset;",
};

const wrapperStyle = {
    transform: "scale(0.35)",
    marginTop: "-1rem",
    marginBottom: "2rem",
    padding: "1rem",
};

const DiceWrapperOne = styled("div")(() => ({
    ...wrapperStyle,
    "&": {
        ".front1": { transform: "translateZ(100px)" },
        ".back1": { transform: "rotateX(-180deg)    translateZ(100px)" },
        ".right1": { transform: "rotateY(90deg)    translateZ(100px)" },
        ".left1": { transform: "rotateY(-90deg)    translateZ(100px)" },
        ".top1": { transform: "rotateX(90deg)    translateZ(100px)" },
        ".bottom1": { transform: "rotateX(-90deg)    translateZ(100px)" },

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
        ".front1 .dot1": { top: "85px", left: "85px" },
        ".back1 .dot1": { top: "45px", left: "45px" },
        ".back1 .dot2": { top: "125px", left: "125px" },
        ".right1 .dot1": { top: "45px", left: "45px" },
        ".right1 .dot2": { top: "85px", left: "85px" },
        ".right1 .dot3": { top: "125px", left: "125px" },
        ".left1 .dot1": { top: "45px", left: "45px" },
        ".left1 .dot2": { top: "45px", left: "125px" },
        ".left1 .dot3": { top: "125px", left: "45px" },
        ".left1 .dot4": { top: "125px", left: "125px" },
        ".top1 .dot1": { top: "45px", left: "45px" },
        ".top1 .dot2": { top: "45px", left: "125px" },
        ".top1 .dot3": { top: "85px", left: "85px" },
        ".top1 .dot4": { top: "125px", left: "45px" },
        ".top1 .dot5": { top: "125px", left: "125px" },
        ".bottom1 .dot1": { top: "45px", left: "45px" },
        ".bottom1 .dot2": { top: "45px", left: "85px" },
        ".bottom1 .dot3": { top: "45px", left: "125px" },
        ".bottom1 .dot4": { top: "125px", left: "45px" },
        ".bottom1 .dot5": { top: "125px", left: "85px" },
        ".bottom1 .dot6": { top: "125px", left: "125px" },
    },
}));

const DiceWrapperTwo = styled("div")(() => ({
    ...wrapperStyle,
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
const DiceWrapperThree = styled("div")(() => ({
    ...wrapperStyle,
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

const DiceComponent = () => {
    const diceOneRef = useRef(null);
    const diceTwoRef = useRef(null);
    const diceThreeRef = useRef(null);
    const dispatch = useDispatch();
    function getRandom(max, min) {
        const array = new Uint32Array(1);
        self.crypto.getRandomValues(array);
        const random = (((array[0] % 6) + 1) * (max - min) + min) * 810;
        const generated =
            (Math.floor(Math.random() * (max - min + 1)) + min) * 810;
        // console.log("random", random, generated);
        return generated;
    }
    // const [dicesArray, setDicesArray] = useState([]);
    // useEffect(() => {
    //     const outcomeDeter = {
    //         0: { front: null },
    //         1: { front: null },
    //         2: { front: null },
    //     };
    //     if (dicesArray.length === 3) {
    //         dicesArray.forEach((dice, i) => {
    //             // outcomeDeter[i]['front'] = dice.querySelector(".front");
    //             console.log("outcomeDeter", window.getComputedStyle(dice.querySelector(`.front${i + 1}`)).transform);
    //         });
    //     }
    //     console.log("outcomeDeter", outcomeDeter, dicesArray);
    //     // return () => setDicesArray([]);
    // }, [dicesArray]);
    function rollDice(dice) {
        const xRand = getRandom(24, 1);
        const yRand = getRandom(24, 1);
        dice.style.transform =
            "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)"; 
        dice.style.webkitTransform =
            "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
        dice.style.transition = "transform 2s ease";
        dice.style.webkitTransition = "transform 2s ease";
        // const transformValues = window.getComputedStyle(dice);
        // const rotateX = parseFloat(transformValues.getPropertyValue('transform').split(',')[4]);
        // const rotateY = parseFloat(transformValues.getPropertyValue('transform').split(',')[5]);

        // Convert the rotation values to radians
        const radX = rotateX * (Math.PI / 180);
        const radY = rotateY * (Math.PI / 180);

        // Calculate the final orientation of the div
        const orientation = Math.round(
            ((((Math.sin(radX) * Math.cos(radY)) / 2 + 0.5) * 6) % 6) +
                1
        );

        // Map the orientation to the side of the dice
        // const side = orientation;

        console.log(
            "The current side facing the user is:",
            orientation, radX, radY, rotateX, rotateY
        );
        // const x = transformValues.split(",").map((value) => parseFloat(value));
        // console.log("orientation x", x, xRand, yRand);
        // const orientation = (x + y) / 60 % 6;
        // const number = [1, 6, 2, 5, 3, 4][orientation] || 6;
        // console.log("orientation", orientation, number, x, y, transformValues);
        // setDicesArray((prev) => [...prev, dice]);
    }
    const { playing } = useSelector((state) => state.game);
    useEffect(() => {
        if (
            playing &&
            diceOneRef.current &&
            diceTwoRef.current &&
            diceThreeRef.current
        ) {
            rollDice(diceOneRef.current);
            rollDice(diceTwoRef.current);
            rollDice(diceThreeRef.current);
        }
        dispatch(setGameIsOn(false));
    }, [playing]);
    return (
        <DicesWrapper>
            <DiceWrapperOne>
                <section className="container">
                    <div id="cube" ref={diceOneRef}>
                        <div className="front1">
                            <span className="dot dot1"></span>
                        </div>
                        <div className="back1">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                        </div>
                        <div className="right1">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                        </div>
                        <div className="left1">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                            <span className="dot dot4"></span>
                        </div>
                        <div className="top1">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                            <span className="dot dot4"></span>
                            <span className="dot dot5"></span>
                        </div>
                        <div className="bottom1">
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
            <DiceWrapperTwo>
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
            <DiceWrapperThree>
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

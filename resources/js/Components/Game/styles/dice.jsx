import { styled } from "@mui/system";
import React, { useEffect, useRef } from "react";

const DiceWrapper = styled("div")(() => ({
    h1: { fontFamily: "Arial, Helvetica, sans-serif", textAlign: "center" },
    "#cube .front": { transform: "translateZ(100px)" },
    "#cube .back": { transform: "rotateX(-180deg)    translateZ(100px)" },
    "#cube .right": { transform: "rotateY(90deg)    translateZ(100px)" },
    "#cube .left": { transform: "rotateY(-90deg)    translateZ(100px)" },
    "#cube .top": { transform: "rotateX(90deg)    translateZ(100px)" },
    "#cube .bottom": { transform: "rotateX(-90deg)    translateZ(100px)" },
    ".container": {
        width: "200px",
        height: "200px",
        position: "relative",
        margin: "0 auto 40px",
        border: "1px solid #FFF",
        perspective: "1000px",
        perspectiveOrigin: "50% 100%",
    },
    "#cube": {
        width: "100%",
        height: "100%",
        top: "100px",
        position: "absolute",
        transformStyle: "preserve-3d",
        transition: "transform 6s",
    },
    "#cube:hover": { cursor: "pointer" },
    "#cube div": {
        background: "hsla(0, 85%, 50%, 0.8)",
        display: "block",
        position: "absolute",
        width: "200px",
        height: "100px",
        border: "2px solid #ab1a1a",
        margin: "0 auto",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "500%",
        textAlign: "center",
        padding: "50px 0",
    },
    ".dot": {
        display: "block",
        position: "absolute",
        width: "30px",
        height: "30px",
        background: "#fff",
        borderRadius: "15px",
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
}));

const DiceComponent = () => {
    const diceRef = useRef(null);
    function getRandom(max, min) {
        return (Math.floor(Math.random() * (max - min)) + min) * 90;
    }
    useEffect(() => {
        var min = 1;
        var max = 24;
        if (diceRef.current) {
            diceRef.current.addEventListener("click", () => {
                const xRand = getRandom(max, min);
                const yRand = getRandom(max, min);

                cube.style.webkitTransform =
                    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
                cube.style.transform =
                    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
            });
        }
    });
    return (
        <DiceWrapper>
            <section className="container">
                <div id="cube" ref={diceRef}>
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
        </DiceWrapper>
    );
};

export default DiceComponent;

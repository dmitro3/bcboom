import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./dice.css";
const Dice = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [dice3, setDice3] = useState(1);
    const animation = useAnimation();

    const handleRoll = () => {
        animation.start({
            rotate: 360,
            transition: { duration: 0.5 },
            onComplete: () => {
                setDice1(Math.floor(Math.random() * 6) + 1);
                setDice2(Math.floor(Math.random() * 6) + 1);
                setDice3(Math.floor(Math.random() * 6) + 1);
                animation.start({ rotate: 0 });
            },
        });
    };

    return (
        <div>
            <motion.div
                animate={animation}
                className="cloud-background"
                style={{ background: "white", height: "100vh" }}
            >
                <motion.img
                    className="cloud"
                    src="cloud1.png"
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 10, yoyo: Infinity }}
                />
                <motion.img
                    className="cloud"
                    src="cloud2.png"
                    animate={{ x: [0, -100, 0] }}
                    transition={{ duration: 15, yoyo: Infinity }}
                />
                <div className="dice-container">
                    <motion.div
                        className="dice"
                        animate={animation}
                        style={{ backgroundImage: `url(dice${dice1}.png)` }}
                    />
                    <motion.div
                        className="dice"
                        animate={animation}
                        style={{ backgroundImage: `url(dice${dice2}.png)` }}
                    />
                    <motion.div
                        className="dice"
                        animate={animation}
                        style={{ backgroundImage: `url(dice${dice3}.png)` }}
                    />
                </div>
                <button onClick={handleRoll}>Roll Dice</button>
            </motion.div>
        </div>
    );
};

export default Dice;

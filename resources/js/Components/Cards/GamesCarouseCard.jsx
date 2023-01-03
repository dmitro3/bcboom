import { styled } from "@mui/system";
import React, { useState } from "react";
import cup from "../../../../public/images/svg/cup.svg";
import batch from "../../../../public/images/svg/batch.svg";
import users from "../../../../public/images/svg/users.svg";
import real from "../../../../public/images/user/realsmall.png";
import asianman from "../../../../public/images/user/asianman.png";
import Text from "../Text/Text";
import CountdownTimer from "../UtilComponents/CountdownTimer";
import { Flex } from "../UtilComponents/Flex";
const CardWrapper = styled("div")(({ color }) => ({
    background: "#2A2F51",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "516px",
    width: "292px",
    margin: "0 auto",
    borderRadius: "10px",
    position: "relative",
    cursor: "move",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "20%",
        left: "0",
        width: "100%",
        height: "50%",
        background: `${color[1]}`,
        filter: "blur(90px)",
        borderRadius: "10px 0px 50px",
        opacity: "0.2",
        zIndex: 1,
    },
}));

const GameCount = styled("div")(({ color }) => ({
    background: `linear-gradient(93.77deg, ${color[1]} 2.29%, ${color[0]} 100%)`,
    borderRadius: "10px 0px 50px",
    // position: "absolute",
    // top: "0",
    // left: "0",
    width: "50%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    "& span": {
        color: "#fff",
        fontFamily: "Montserrat",
        marginLeft: "10px",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
}));
const JumboText = styled("div")(() => ({
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: "40px",
    fontWeight: "bold",
}));

const JumboStats = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
}));

const Toppers = styled("div")(() => ({
    padding: "10px 20px",

    "& > *": {
        margin: "10px 0",
    },
}));
const Topper = styled("div")(() => ({}));

const Stats = ({ icon, text, count }) => {
    return (
        <div
            style={{
                background: "#1D2636",
                marginTop: "20px",
                borderRadius: "15px",
                padding: "10px 25px",
                // height: '100px',
                // width: '100px',
            }}
        >
            <Flex alignItems="center">
                <img
                    src={icon}
                    alt={text}
                    style={{ height: "30px", marginTop: "8px" }}
                />
                <Text
                    type="p"
                    text={count}
                    color="white"
                    fontSize="15px"
                    fontWeight="bold"
                    paddingLeft="10px"
                />
            </Flex>
            <Text
                type="p"
                text={text}
                color="#A6AFE0"
                fontSize="12px"
                fontWeight="light"
            />
        </div>
    );
};
const OverLay = styled("div")(({ visible }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    borderRadius: "10px",
    zIndex: 2,
    display: visible ? "block" : "none",
}));

const GamesCarouseCard = ({ card, index }) => {
    const [mouseOver, setMouseOver] = useState(-1);
    return (
        <>
            {/* <OverLay visible={mouseOver === index} /> */}
            <CardWrapper
                color={card.cardColors}
                onMouseEnter={() => setMouseOver(index)}
                onMouseLeave={() => setMouseOver(-1)}
            >
                <Flex alignItems="center">
                    <GameCount color={card.cardColors}>
                        <img
                            src={cup}
                            alt=""
                            style={{ width: "25px", marginTop: "5px" }}
                        />
                        <span>2000</span>
                    </GameCount>
                    <CountdownTimer />
                </Flex>
                <JumboText>
                    <Text
                        type="p"
                        text={card.title.split(" ")[0]}
                        fontSize="123%"
                    />

                    <Text
                        type="p"
                        text={card.title.split(" ").slice(1, 4).join(" ")}
                        fontSize="190%"
                        whiteSpace="nowrap"
                    />
                </JumboText>
                <JumboStats>
                    {[
                        { icon: users, text: "Members", count: 100 },
                        { icon: batch, text: "price Places", count: 20 },
                    ].map((item, key) => (
                        <Stats
                            key={key}
                            icon={item.icon}
                            count={item.count}
                            text={item.text}
                        />
                    ))}
                </JumboStats>
                <Toppers>
                    {Array.from({ length: 5 }).map((key) => (
                        <Flex
                            key={key}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Flex alignItems="center">
                                <img
                                    src={asianman}
                                    alt=""
                                    style={{
                                        height: "40px",
                                        width: "40px",
                                        padding: "2px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <Text
                                    type="p"
                                    text="execubeweb"
                                    color="#A6AFE0"
                                    fontSize="13px"
                                    paddingLeft="10px"
                                />
                            </Flex>
                            <Flex>
                                <img
                                    src={real}
                                    alt=""
                                    style={{ height: "30px" }}
                                />
                                <Text
                                    type="p"
                                    text="2430.00"
                                    color="#A6AFE0"
                                    fontSize="12px"
                                    fontWeight="bold"
                                />
                            </Flex>
                        </Flex>
                    ))}
                </Toppers>
            </CardWrapper>
        </>
    );
};

export default GamesCarouseCard;

import { styled } from "@mui/system";
import React from "react";
import Text from "../Text/Text";
import { Flex } from "../UtilComponents/Flex";
import faq from "../../../../public/images/svg/faq.svg";
import levelBg from "../../../../public/images/vip/levelBg.png";
import level1 from "../../../../public/images/vip/level1.svg";
import Tooltip from "@mui/material/Tooltip";

import { styled as MuiStyle } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { useSelector } from "react-redux";

const BcTooltip = MuiStyle(({ className, ...props }) => (
    <Tooltip
        {...props}
        componentsProps={{ tooltip: { className: className } }}
    />
))(`
    color: white;
    background-color: #181E46;
    font-size: 11px;
    font-family: Montserrat;
    padding: 15px;
    line-height: 2;
`);

const useStyles = makeStyles((theme) => ({
    arrow: {
        "&:before": {
            border: "1px solid white",
        },
        color: "#1D2036",
    },
    tooltip: {
        backgroundColor: "#1D2036",
        border: "1px solid #E6E8ED",
        color: "white",
    },
}));

const RangeInput = styled("div")(({ value }) => ({
    width: "100%",
    "input[type='range']": {
        background: `linear-gradient(to right, #3586FF 0%, #3586FF ${value}%, #62679E ${value}%, #62679E 100%)`,
        borderRadius: "10px",
        height: "18px",
        // width: "356px",
        outline: "none",
        transition: "background 450ms ease-in",
        WebkitAppearance: "none",
    },
    // "input[type='range']::-webkit-slider-runnable-track": {
    //     height: "10px",
    //     WebkitAppearance: "none",
    //     color: "blue",
    //     marginTop: "-1px",
    // },
    "input[type='range']::-webkit-slider-thumb": {
        width: "10px",
        WebkitAppearance: "none",
        // height: "50px",
        background: "red",
        // boxShadow: "-80px 0 0 80px #43e5f7",
    },
}));

const VipLevelCard = styled("div")(({ isMobile }) => ({
    background: `url(${levelBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    textAlign: "center",
    width: isMobile ? "100%" : "35%",
    padding: "1.5rem",
    borderRadius: "10px",
}));

const MyVIPLevel = () => {
    let classes = useStyles();
    const { isMobile } = useScreenResolution();
    const { wallet, level } = useSelector((state) => state.wallet);
    return (
        <VipLevelCard isMobile={isMobile}>
            <Flex
                alignItems="center"
                textAlign="center"
                justifyContent="center"
            >
                <Text
                    type="p"
                    text="Your Current VIP Level is"
                    textTransform="uppercase"
                    fontSize="15px"
                    fontWeight="bolder"
                />
                <BcTooltip
                    title="Upgrade Levels and Bonuses VIP upgrade needs to reach both the next deposit level and the bet amount upgrade conditions, you will automatically receive the corresponding VIP level bonus."
                    placement="bottom-start"
                    arrow
                    classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                >
                    <img
                        src={faq}
                        alt="tooltip"
                        style={{ marginLeft: "10px", cursor: "pointer" }}
                    />
                </BcTooltip>
            </Flex>
            <Text
                type="p"
                text={`LEVEL ${level.currentLevel || 0}`}
                color="#3586FF"
                fontSize="15px"
                fontWeight="bolder"
            />
            <Flex justifyContent="center" padding="30px 0 20px 0">
                <img src={level1} alt="" />
            </Flex>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Flex justifyContent="space-between" width="80%">
                    <Text
                        type="p"
                        text="Deposit"
                        fontSize="15px"
                        fontWeight="bold"
                    />
                    <Flex alignItems="center" gap="3px">
                        <Text
                            type="p"
                            text={"R$" + wallet?.deposit || 0}
                            fontSize="15px"
                            fontWeight="bold"
                        />
                        <small>/</small>
                        <Text
                            type="p"
                            text={`R$${level?.maxDeposit}`}
                            fontSize="15px"
                            fontWeight="bold"
                            color="#FFCD4D"
                        />
                    </Flex>
                </Flex>
                <RangeInput
                    style={{ width: "80%", marginTop: "10px" }}
                    value={level?.depositProgress}
                >
                    <Flex alignItems="center" gap="6px">
                        <input
                            type="range"
                            max={100}
                            min={0}
                            value={10}
                            style={{ width: "100%" }}
                        />
                        <Text
                            text={`${level.depositProgress}%`}
                            type="p"
                            fontWeight="bold"
                        />
                    </Flex>
                </RangeInput>
            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "40px",
                }}
            >
                <Flex justifyContent="space-between" width="80%">
                    <Text
                        type="p"
                        text="Bet"
                        fontSize="15px"
                        fontWeight="bold"
                    />
                    <Flex alignItems="center" gap="3px">
                        <Text
                            type="p"
                            text={`R$ ${wallet?.bet || 0}`}
                            fontSize="15px"
                            fontWeight="bold"
                        />
                        <small>/</small>
                        <Text
                            type="p"
                            text={`R$${level?.maxBet}`}
                            fontSize="15px"
                            fontWeight="bold"
                            color="#43BB41"
                        />
                    </Flex>
                </Flex>
                <RangeInput style={{ width: "80%", marginTop: "10px" }}>
                    <Flex alignItems="center" gap="6px">
                        <input
                            type="range"
                            max={100}
                            min={0}
                            value={10}
                            style={{ width: "100%" }}
                        />
                        <Text
                            text={`${level.betProgress}%`}
                            type="p"
                            fontWeight="bold"
                        />
                    </Flex>
                </RangeInput>
            </div>
            <div style={{ marginTop: "20px" }}>
                <Text
                    type="p"
                    text="Upgrading to VIP 1 also requires:"
                    fontSize={isMobile ? "12px" : "17px"}
                    fontWeight="bold"
                />
            </div>
            <Flex
                justifyContent="center"
                alignItems="center"
                gap="30px"
                margin="20px 0 20px 0"
            >
                <div
                    style={{
                        background: "#121539",
                        padding: isMobile ? "10px 30px" : "14px 45px",
                        borderRadius: "20px",
                        width: "50%",
                    }}
                >
                    <Text
                        type="p"
                        text="Bet"
                        fontSize={isMobile ? "12px" : "17px"}
                        fontWeight="bold"
                    />
                    <Text
                        type="p"
                        text="R$ 800"
                        fontSize={isMobile ? "12px" : "17px"}
                        fontWeight="bold"
                        color="#3586FF"
                        whiteSpace="nowrap"
                    />
                </div>
                <div
                    style={{
                        background: "#121539",
                        padding: isMobile ? "10px 30px" : "14px 45px",

                        borderRadius: "20px",
                        width: "50%",
                    }}
                >
                    <Text
                        type="p"
                        text="Deposit"
                        fontSize={isMobile ? "12px" : "17px"}
                        fontWeight="bold"
                    />
                    <Text
                        type="p"
                        text="R$ 100"
                        fontSize={isMobile ? "12px" : "17px"}
                        fontWeight="bold"
                        color="#3586FF"
                    />
                </div>
            </Flex>
        </VipLevelCard>
    );
};

export default MyVIPLevel;

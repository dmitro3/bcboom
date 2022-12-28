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
        color: "red",
    },
    tooltip: {
        backgroundColor: "red",
        border: "1px solid #E6E8ED",
        color: "#4A4A4A",
    },
}));

const RangeInput = styled("div")(() => ({
    width: "100%",
    "& input[type='range']": {
        overflow: "hidden",
        borderRadius: "10px",
        WebkitAppearance: "none",
        backgroundColor: "#172C4F",
    },
    "& input[type='range']::-webkit-slider-runnable-track": {
        height: "20px",
        WebkitAppearance: "none",
        color: "blue",
        marginTop: "-1px",
    },
    "& input[type='range']::-webkit-slider-thumb": {
        width: "10px",
        WebkitAppearance: "none",
        height: "10px",
        cursor: "ew-resize",
        background: "#434343",
        display: "none",
    },
}));

const VipLevelCard = styled("div")(() => ({
    background: `url(${levelBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    textAlign: "center",
    width: "35%",
    padding: "1.5rem",
    borderRadius: "10px",
}));

const MyVIPLevel = () => {
    let classes = useStyles();
    return (
        <VipLevelCard>
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
                text="LEVEL 0"
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
                            text="R$0"
                            fontSize="15px"
                            fontWeight="bold"
                        />
                        <small>/</small>
                        <Text
                            type="p"
                            text="R$100"
                            fontSize="15px"
                            fontWeight="bold"
                            color="#FFCD4D"
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
                        <Text text="0%" type="p" fontWeight="bold" />
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
                            text="R$0"
                            fontSize="15px"
                            fontWeight="bold"
                        />
                        <small>/</small>
                        <Text
                            type="p"
                            text="R$100"
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
                        <Text text="0%" type="p" fontWeight="bold" />
                    </Flex>
                </RangeInput>
            </div>
            <div style={{ marginTop: "20px" }}>
                <Text
                    type="p"
                    text="Upgrading to VIP 1 also requires:"
                    fontSize="17px"
                    fontWeight="bold"
                />
            </div>
            <Flex justifyContent='center' alignItems='center' gap='30px' margin='20px 0 20px 0'>
                    <div style={{ background: "#121539", padding: "14px 45px", borderRadius: '20px' }}>
                    <Text
                        type="p"
                        text="Bet"
                        fontSize="17px"
                        fontWeight="bold"
                    />
                    <Text
                        type="p"
                        text="R$ 800"
                        fontSize="17px"
                        fontWeight="bold"
                        color="#3586FF"
                    />
                </div>
                <div style={{ background: "#121539", padding: "14px 45px", borderRadius: '20px' }}>
                    <Text
                        type="p"
                        text="Deposit"
                        fontSize="17px"
                        fontWeight="bold"
                    />
                    <Text
                        type="p"
                        text="R$ 100"
                        fontSize="17px"
                        fontWeight="bold"
                        color="#3586FF"
                    />
                </div>
            </Flex>
        </VipLevelCard>
    );
};

export default MyVIPLevel;

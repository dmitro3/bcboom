import { styled } from "@mui/system";
import React from "react";
import fullbg from "../../../../public/images/vip/fullbg.png";
import level0 from "../../../../public/images/vip/levels00.svg";
import level1 from "../../../../public/images/vip/levels01.svg";
import level2 from "../../../../public/images/vip/levels02.svg";
import level3 from "../../../../public/images/vip/levels03.svg";
import level4 from "../../../../public/images/vip/levels04.svg";
import Text from "../Text/Text";
import { Flex } from "../UtilComponents/Flex";

const FullVipBonusWrapper = styled("div")(({}) => ({
    background: `url(${fullbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    textAlign: "center",
    width: "75%",
    padding: "1.5rem",
    borderRadius: "10px",
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

const BonusLevels = styled("div")(({}) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
}));

const FullVIPBonus = () => {
    return (
        <FullVipBonusWrapper>
            <Text
                type="p"
                text="FULL VIP BONUS"
                color="white"
                fontSize="17px"
                fontWeight="bold"
                paddingTop="20px"
            />

            <BonusLevels>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    width="80%"
                >
                    {[level0, level1, level2, level3, level4].map(
                        (level, index) => (
                            <img
                                src={level}
                                alt=""
                                key={index}
                                // style={{ width: "25" }}
                            />
                        )
                    )}
                </Flex>
                <RangeInput
                    style={{ width: "80%", marginTop: "30px" }}
                    value={25}
                >
                    <div>
                        <input
                            type="range"
                            max={100}
                            min={0}
                            value={25}
                            style={{ width: "100%" }}
                        />
                        <Text
                            type="p"
                            text="The BetDino VIP level system is created with 10 levels, each with a corresponding cash prize. The more you play, the higher the VIP level and the more you will receive."
                            color="white"
                            fontSize="14px"
                            fontWeight="medium"
                            textAlign="left"
                            paddingTop="40px"
                        />
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap="30px"
                            margin="20px 0 20px 0"
                        >
                            <div
                                style={{
                                    background: "#121539",
                                    padding: "14px 45px",
                                    borderRadius: "20px",
                                }}
                            >
                                <Text
                                    type="p"
                                    text="Accumulated Bet Amount"
                                    fontSize="17px"
                                    fontWeight="bold"
                                />
                                <Text
                                    type="p"
                                    text="R$ 0"
                                    fontSize="17px"
                                    fontWeight="bold"
                                    color="#3586FF"
                                />
                            </div>
                            <div
                                style={{
                                    background: "#121539",
                                    padding: "14px 45px",
                                    borderRadius: "20px",
                                }}
                            >
                                <Text
                                    type="p"
                                    text="Accumulated Deposit Amount"
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
                    </div>
                </RangeInput>
            </BonusLevels>
        </FullVipBonusWrapper>
    );
};

export default FullVIPBonus;

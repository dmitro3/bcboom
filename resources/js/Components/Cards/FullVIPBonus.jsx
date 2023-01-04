import { useScreenResolution } from "@/hooks/useScreeResolution";
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

const FullVipBonusWrapper = styled("div")(({ isMobile }) => ({
    background: `url(${fullbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    textAlign: "center",
    width: isMobile ? "100%" : "75%",
<<<<<<< HEAD
    padding: "1.5rem",
=======
    padding: !isMobile && "1.5rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
    const { isMobile } = useScreenResolution();
    return (
        <FullVipBonusWrapper isMobile={isMobile}>
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
                                style={{ width: "12%" }}
                            />
                        )
                    )}
                </Flex>
                <RangeInput
<<<<<<< HEAD
                    style={{ width: "80%", marginTop: "30px" }}
                    value={28}
=======
                    style={{ width: "80%", marginTop: "70px" }}
                    value={22}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                >
                    <div>
                        <input
                            type="range"
                            max={100}
                            min={0}
<<<<<<< HEAD
                            value={30}
=======
                            value={2}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            style={{ width: "100%" }}
                        />
                        <Text
                            type="p"
                            text="The BetDino VIP level system is created with 10 levels, each with a corresponding cash prize. The more you play, the higher the VIP level and the more you will receive."
                            color="white"
                            fontSize="14px"
                            fontWeight="medium"
                            textAlign="left"
<<<<<<< HEAD
                            paddingTop="40px"
=======
                            paddingTop="20px"
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        />
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap={isMobile ? '10px' : "30px"}
                            margin="20px 0 20px 0"
                        >
                            <div
                                style={{
                                    background: "#121539",
                                    padding: isMobile
                                        ? "10px 30px"
                                        : "14px 45px",
                                    borderRadius: "20px",
                                }}
                            >
                                <Text
                                    type="p"
<<<<<<< HEAD
                                    text="Accumulated Bet Amount"
=======
                                    text="Accumulated"
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontSize={isMobile ? "12px" : "17px"}
                                    fontWeight="bold"
                                />
                                <Text
                                    type="p"
<<<<<<< HEAD
=======
                                    text="Bet Amount"
                                    fontSize={isMobile ? "12px" : "17px"}
                                    fontWeight="bold"
                                    whiteSpace="nowrap"
                                />
                                <Text
                                    type="p"
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    text="R$ 0"
                                    fontSize={isMobile ? "12px" : "17px"}
                                    fontWeight="bold"
                                    color="#3586FF"
                                />
                            </div>
                            <div
                                style={{
                                    background: "#121539",
                                    padding: isMobile
                                        ? "10px 30px"
                                        : "14px 45px",
                                    borderRadius: "20px",
                                }}
                            >
                                <Text
                                    type="p"
<<<<<<< HEAD
                                    text="Accumulated Deposit Amount"
=======
                                    text="Accumulated"
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontSize={isMobile ? "12px" : "17px"}
                                    fontWeight="bold"
                                />
                                <Text
                                    type="p"
<<<<<<< HEAD
=======
                                    text="Deposit Amount"
                                    fontSize={isMobile ? "12px" : "17px"}
                                    fontWeight="bold"
                                    whiteSpace="nowrap"
                                />
                                <Text
                                    type="p"
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    text="R$ 100"
                                    fontSize={isMobile ? "12px" : "17px"}
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

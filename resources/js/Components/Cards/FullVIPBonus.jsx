import { styled } from "@mui/system";
import React from "react";
import fullbg from "../../../../public/images/vip/fullbg.png";
import Text from "../Text/Text";

const FullVipBonusWrapper = styled("div")(({}) => ({
    background: `url(${fullbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    textAlign: "center",
    width: "75%",
    padding: "1.5rem",
    borderRadius: "10px",
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
            />
        </FullVipBonusWrapper>
    );
};

export default FullVIPBonus;

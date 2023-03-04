import React from "react";

// import level0 from "../../../../public/images/vip/level0.png";
import level0 from "../../../public/images/vip/level0.png";
import levels from "../../../public/images/vip/level.png";
import { styled } from "@mui/system";
import Text from "@/Components/Text/Text";

const VipLevelIcon = ({ color, level }) => {
    return (
        <LevelIcon level={level === 0 ? level0 : levels}>
            <div>

            <Text
                color={color}
                text="R$ 0"
                type="p"
                fontSize="1.1rem"
                fontFamily="Montserrat"
                fontWeight="700"
                />
            <Text
                color={color}
                text={level}
                type="p"
                fontSize="1.1rem"
                fontFamily="Montserrat"
                fontWeight="700"
                />
                </div>
        </LevelIcon>
    );
};

const LevelIcon = styled("div")(({ color, level }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundImage: `url(${level})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "80px",
    height: "145px",
}));

export default VipLevelIcon;

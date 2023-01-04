import React from "react";
import Text from "../Text/Text";

const TextWithBg = ({
    bg,
    primaryText,
    secondaryText,
    primaryTextSize,
    secondaryTextSize,
    primaryColor,
    secondaryColor,
    padding,
<<<<<<< HEAD
}) => {
    console.log("sdfsdf: ", bg);
=======
    width,
    nowrap
}) => {
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    return (
        <div
            style={{
                background: bg,
                padding: padding || "14px 45px",
                borderRadius: "20px",
                textAlign: "center",
<<<<<<< HEAD
=======
                width: width && width,
                whiteSpace: nowrap && "nowrap",
                zIndex: 200
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
            }}
        >
            <Text
                type="p"
                text={primaryText}
                fontSize={primaryTextSize || "17px"}
                fontWeight="bold"
                color={primaryColor || "white"}
            />
            <Text
                type="p"
                text={secondaryText}
                fontSize={secondaryTextSize || "17px"}
                fontWeight="bold"
                color={secondaryColor || "white"}
            />
        </div>
    );
};

export default TextWithBg;

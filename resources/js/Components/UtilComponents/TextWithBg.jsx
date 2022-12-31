import React from "react";
import Text from "../Text/Text";

const TextWithBg = ({
    bg,
    primaryText,
    secondaryText,
    primaryTextSize,
    secondaryTextSize,
    secondaryColor,
    padding,
}) => {
    console.log("sdfsdf: ", bg);
    return (
        <div
            style={{
                background: bg,
                padding: padding || "14px 45px",
                borderRadius: "20px",
                textAlign: "center",
            }}
        >
            <Text
                type="p"
                text={primaryText}
                fontSize={primaryTextSize || "17px"}
                fontWeight="bold"
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

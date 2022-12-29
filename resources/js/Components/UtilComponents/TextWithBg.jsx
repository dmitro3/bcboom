import React from "react";
import Text from "../Text/Text";

const TextWithBg = ({ bg, primaryText, secondaryText }) => {
    console.log("sdfsdf: ", bg);
    return (
        <div
            style={{
                background: bg,
                padding: "14px 45px",
                borderRadius: "20px",
                textAlign: "center",
            }}
        >
            <Text
                type="p"
                text={primaryText}
                fontSize="17px"
                fontWeight="bold"
            />
            <Text
                type="p"
                text={secondaryText}
                fontSize="17px"
                fontWeight="bold"
            />
        </div>
    );
};

export default TextWithBg;

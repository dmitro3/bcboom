import { styled } from "@mui/system";
import React from "react";
import link from "../../../../public/images/svg/link.svg";
const Wrapper = styled("div")(({ splitted, size , background}) => ({
    border: "1px solid #ABB7E2",
    borderRadius: "10px",
    position: "relative",
    background: background,
    height: "40px",
    fontSize: size || "16px",
    "& p": {
        overflow: "hidden",
        padding: "6px 50px 1px 3px",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        height: "100%",
        whiteSpace: "nowrap",
        "& span": {
            "&:nth-child(1)": {
                color: splitted && "#F93C56",
            },
        },
    },
}));
const CopyableLink = ({ text, addon, background, size }) => {
    const newText = text.split("_");
    return (
        <Wrapper splitted={newText[1]} size={size} background={background}>
            {/* <input type="text"  */}
            <p>
                <span>{newText[0]}</span>
                <span style={{ color: "#4792FF" }}>_</span>
                <span>{newText[1]}</span>
            </p>
            {/* disabled /> */}
            {addon && (
                <div
                    style={{
                        background: "#4792FF",
                        position: "absolute",
                        top: 0,
                        right: "0",
                        height: "100%",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "0px 10px 10px 0px",
                        cursor: "pointer",
                    }}
                >
                    <img src={link} alt="" />
                </div>
            )}
        </Wrapper>
    );
};

export default CopyableLink;

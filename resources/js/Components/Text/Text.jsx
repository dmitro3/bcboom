import { styled } from "@mui/system";
import React from "react";
const StyledPTag = styled("p")(({ tagStyles }) => ({
    fontFamily: 'Montserrat , "sans-serif"',
    ...tagStyles,
}));
const Text = ({ type, text, ...styles }) => {
    console.log("styless", styles);
    if (type === "h1") {
        return <h1>{text}</h1>;
    }
    if (type === "h2") {
        return <h2>{text}</h2>;
    }
    if (type === "p") {
        return <StyledPTag tagStyles={styles}>{text}</StyledPTag>;
    }
    return <div>{text}</div>;
};

export default Text;

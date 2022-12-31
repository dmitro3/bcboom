import { styled } from "@mui/system";
import React from "react";
const StyledPTag = styled("p")(({ tagStyles }) => ({
    fontFamily: 'Montserrat , "sans-serif"',
    ...tagStyles,
}));
const StyledListItem = styled("li")(({ tagStyles }) => ({
    fontFamily: 'Montserrat , "sans-serif"',
    textIndent: "-17px",
    ...tagStyles,
}));
const Text = ({ type, text, pre, ...styles }) => {
    if (type === "h1") {
        return <h1>{text}</h1>;
    }
    if (type === "h2") {
        return <h2>{text}</h2>;
    }
    if (type === "li") {
        return <StyledListItem tagStyles={styles}>{text}</StyledListItem>;
    }
    if (type === "p") {
        // text = String(text);
        // const specialStrings = text.slice(text.indexOf("{{"), text.indexOf("}}") + 2);
        // text = text.replace(/{{/g, "");
        // text = text.replace(/}}/g, "");
        // console.log('sdfsdf: ', specialStrings)
        return (
            <StyledPTag tagStyles={styles}>
                {text}
            </StyledPTag>
        );
    }
    return <div>{text}</div>;
};

export default Text;

import { styled } from "@mui/system";
import React from "react";
const ButtonWrapper = styled("button")(({ color, background, styles }) => ({
    background: background,
    color: color || "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "700",
    fontFamily: "Montserrat, sans-serif",
    transition: "all 0.3s ease",
    "&:hover": {
        background: "#3586FF",
        color: "#fff",
    },
    ...styles,
}));
const Button = ({ text, color, background, onSubmit, styles }) => {
    return (
        <ButtonWrapper
            color={color}
            background={background}
            styles={styles}
            onClick={onSubmit}
        >
            {text}
        </ButtonWrapper>
    );
};

export default Button;

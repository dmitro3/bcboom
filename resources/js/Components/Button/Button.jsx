import { styled } from "@mui/system";
import React from "react";
import { Flex } from "../UtilComponents/Flex";
<<<<<<< HEAD
const ButtonWrapper = styled("button")(({ color, background, styles }) => ({
=======
import { Button } from "@mui/material";

const ButtonWrapper = styled("div")(({ color, background, styles }) => ({
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
const Button = ({ text, color, background, addon, onSubmit, ...styles }) => {
    return (
        <ButtonWrapper
            color={color}
            background={background}
            styles={styles}
            onClick={onSubmit}
        >
            <Flex justifyContent="center" alignItems="center">
                {addon && <img src={addon} alt="" style={{paddingRight: '10px'}} />}
                {text}
            </Flex>
        </ButtonWrapper>
    );
};

export default Button;
=======
const BcButton = ({ text, color, background, addon, onSubmit, ...styles }) => {
    const Btnstyles = {
        background: background,
        color: color || "#fff",
        ...styles,
    };
    return (
        <div onClick={onSubmit}>
            <Button sx={{ ...Btnstyles }}>
                <Flex justifyContent="center" alignItems="center">
                    {addon && (
                        <img
                            src={addon}
                            alt=""
                            style={{ paddingRight: "10px" }}
                        />
                    )}
                    {text}
                </Flex>
            </Button>
        </div>
    );
};

export default BcButton;
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa

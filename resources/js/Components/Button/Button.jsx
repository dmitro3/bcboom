import { styled } from "@mui/system";
import React from "react";
import { Flex } from "../UtilComponents/Flex";
import { Button } from "@mui/material";

const ButtonWrapper = styled("div")(({ color, background, styles }) => ({
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

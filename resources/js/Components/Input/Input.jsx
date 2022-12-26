import { styled } from "@mui/system";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const InputWrapper = styled("div")(({ br }) => ({
    background: "transparent",
    borderRadius: br || "32px",
    border: "1px solid #464F85",
    position: "relative",
    width: "100%",
    "& label": {
        position: "absolute",
        top: "-10px",
        left: "20px",
        background: "#272C4B",
        padding: "0 10px",
        color: "#fff",
        fontSize: "12px",
    },
    "& small": {
        position: "absolute",
        top: "50%",
        left: "20px",
        transform: "translateY(-50%)",
        color: "#fff",
    },
    "& p": {
        position: "absolute",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        color: "#4F95FF",
        fontWeight: "bold",
    },
}));
const InputItem = styled("input")(({ addon, isMobile, bg, br }) => ({
    // width: isMobile ? "100%" : "380px",
    width: "100%",
    padding: addon ? "12px 50px" : "12px 20px",
    border: "none",
    borderRadius: br || "32px",
    background: bg || "transparent",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    
    "&::placeholder": {
        color: "#fff",
    },
    "&:focus": {
        // color: "#3586FF",
        outline: "none",
        border: "none",
        boxShadow: "none",
    },
    "&::-webkit-outer-spin-button,&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: "0",
    },
}));
const PasswordToggler = styled("div")(({}) => ({
    position: "absolute",
    top: "22%",
    right: "20px",
    cursor: "pointer",
}));
const Input = ({
    label,
    addon,
    type,
    placeholder,
    value,
    onChange,
    bg,
    br,
    afterInputText,
    disabled
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const { isMobile } = useScreenResolution();
    return (
        <InputWrapper br={br}>
            <label>{label}</label>
            {addon && <small>{addon}</small>}
            <InputItem
                type={
                    type === "password"
                        ? showPassword
                            ? "text"
                            : "password"
                        : type
                }
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete="off"
                addon={addon}
                isMobile={isMobile}
                bg={bg}
                br={br}
                disabled={disabled}
            />
            {afterInputText && <p>{afterInputText}</p>}
            {type === "password" && (
                <PasswordToggler onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                        <VisibilityIcon sx={{ color: "#fff" }} />
                    ) : (
                        <VisibilityOffIcon sx={{ color: "#fff" }} />
                    )}
                </PasswordToggler>
            )}
        </InputWrapper>
    );
};

export default Input;

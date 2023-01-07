import ReCAPTCHA from "react-google-recaptcha";

import Button from "@/Components/Button/Button";
import Input from "@/Components/Input/Input";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import apiService from "@/hooks/apiService";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setAuthModalState } from "@/redux/auth/auth-slice";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../../../../../public/images/svg/closeModal.svg";
import lock from "../../../../../public/images/svg/lock.svg";
import mobileclose from "../../../../../public/images/svg/mobileclose.svg";
import user from "../../../../../public/images/svg/user.svg";
import CustomModal from "../Modal";
const LoginSignupModalWrapper = styled("div")(({ isMobile }) => ({
    background: "#272C4B",
    position: "relative",
    borderRadius: "20px",
    border: "transparent",
    padding: !isMobile && "20px 30px",
    width: isMobile ? "90vw" : "600px",
    margin: isMobile && "0 auto",
}));
const CloseIcon = styled("div")(({ isMobile }) => ({
    position: "absolute",
    cursor: "pointer",
    top: isMobile ? "-1%" : "20px",
    right: isMobile ? "-10px" : "20px",
}));
const LoginFormWrapper = styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    gap: "20px",
}));
const SignupFormWrapper = styled("div")(({ isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    gap: "20px",
    width: isMobile ? "100%" : "480px",
}));
const SignupForm = ({ isMobile }) => {
    const onRecaptchaChange = (value) => {
        console.log("Captcha value:", value);
    };

    return (
        <SignupFormWrapper isMobile={isMobile}>
            <Input addon="" type="phone" placeholder="Phone Number" />
            <Input
                addon={<img src={user} alt="" />}
                type="text"
                placeholder="Account"
            />
            <Input
                addon={<img src={user} alt="" />}
                type="text"
                placeholder="Username"
            />
            <Input
                addon={<img src={lock} alt="" />}
                type="password"
                placeholder="Enter your password"
            />
            <Input addon="" type="phone" placeholder="Invite code (optional)" />
            <p
                style={{
                    alignSelf: "flex-end",
                    fontSize: "14px",
                    color: "#9DA6CA",
                    cursor: "pointer",
                }}
            >
                <FormControlLabel
                    control={<Checkbox />}
                    label={
                        <p style={{ fontSize: "13px", color: "white" }}>
                            I am at least 18 years old and have read and agree
                            to the Terms & Conditions and Privacy Policy
                        </p>
                    }
                />
            </p>
            <div
                style={{
                    transform: !isMobile && "scaleX(1.6)",
                    transformOrigin: "0 0",
                }}
            >
                <ReCAPTCHA
                    sitekey={"6LdGw6MjAAAAAOizaooLBfkIFQ6GkvxA22FtenMd"}
                    onChange={onRecaptchaChange}
                />
            </div>
            <Button
                text="Sign up"
                // styles={{
                width="100%"
                background="#3586FF"
                color="#fff"
                borderRadius="30px"
                padding="15px "
                marginTop="20px"
                // }}
            />
        </SignupFormWrapper>
    );
};
const LoginForm = ({ isMobile }) => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
        captchaValue: "",
    });
    
    async function handleSubmit(e) {
        e.preventDefault();
        const { email, password, captchaValue } = loginDetails;
        if(email === "" || password === "" || captchaValue === "") {
            window.confirm("Please fill all the fields, and verify captcha");
            return;
        }
        const response = await apiService('/auth/login', 'POST', loginDetails)
        console.log('respone: ',response.data);
    }

    return (
        <LoginFormWrapper>
            <Input
                addon={<img src={user} alt="" />}
                type="text"
                placeholder="Email/Phone"
                value={loginDetails.email}
                onChange={(e) =>
                    setLoginDetails({ ...loginDetails, email: e.target.value })
                }
            />
            <Input
                addon={<img src={lock} alt="" />}
                type="password"
                placeholder="Enter your password"
                value={loginDetails.password}
                onChange={(e) =>
                    setLoginDetails({
                        ...loginDetails,
                        password: e.target.value,
                    })
                }
            />
            <p
                style={{
                    alignSelf: "flex-end",
                    fontSize: "14px",
                    color: "#9DA6CA",
                    cursor: "pointer",
                }}
            >
                Forgot your password?
            </p>
            <div
                style={{
                    transform: !isMobile && "scaleX(1.6)",
                    transformOrigin: "0 0",
                }}
            >
                <ReCAPTCHA
                    sitekey={"6LdGw6MjAAAAAOizaooLBfkIFQ6GkvxA22FtenMd"}
                    onChange={(value) => setLoginDetails({...loginDetails, captchaValue: value})}
                />
            </div>
            <Button
                text="Login"
                width="100%"
                background="#3586FF"
                color="#fff"
                borderRadius="30px"
                padding="15px "
                marginTop="20px"
                onSubmit={handleSubmit}
            />
        </LoginFormWrapper>
    );
};

const TabComponent = styled("div")(({}) => ({}));
const LoginSignupModal = () => {
    const { modalState } = useSelector((state) => state.auth);
    const dispatcher = useDispatch();
    const { isMobile } = useScreenResolution();
    return (
        <CustomModal
            open={modalState.open}
            handleClose={() => dispatcher(setAuthModalState({ open: false }))}
        >
            <LoginSignupModalWrapper isMobile={isMobile}>
                <CloseIcon
                    onClick={() =>
                        dispatcher(
                            setAuthModalState({ open: !modalState.open })
                        )
                    }
                    isMobile={isMobile}
                >
                    <img src={isMobile ? mobileclose : close} alt="" />
                </CloseIcon>
                <TabComponent>
                    <NewCustomTabs
                        tabItems={[
                            {
                                value: "login",
                                label: "Log In",
                                content: <LoginForm isMobile={isMobile} />,
                            },
                            {
                                label: "Sign Up",
                                value: "signup",
                                content: <SignupForm isMobile={isMobile} />,
                            },
                        ]}
                        width={isMobile ? "100%" : "350px"}
                    />
                </TabComponent>
            </LoginSignupModalWrapper>
        </CustomModal>
    );
};

export default LoginSignupModal;

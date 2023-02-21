import ReCAPTCHA from "react-google-recaptcha";

import Button from "@/Components/Button/Button";
import Input from "@/Components/Input/Input";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import {
    login,
    resetPassword,
    sendForgotPasswordMail,
    setAuthModalState,
    signup,
} from "@/redux/auth/auth-slice";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import close from "../../../../../public/images/svg/closeModal.svg";
import lock from "../../../../../public/images/svg/lock.svg";
import mobileclose from "../../../../../public/images/svg/mobileclose.svg";
import user from "../../../../../public/images/svg/user.svg";
import CustomModal from "../Modal";

import Text from "@/Components/Text/Text";
import { sleep, validatePhoneNumber } from "@/utils/util";
const LoginSignupModalWrapper = styled("div")(({ isMobile }) => ({
    background: "#272C4B",
    position: "relative",
    borderRadius: "20px",
    border: "transparent",
    padding: !isMobile && "20px 30px",
    width: isMobile ? "90vw" : "600px",
    margin: isMobile && "0 auto",
    maxWidth: isMobile && "370px",
}));
const CloseIcon = styled("div")(({ isMobile }) => ({
    position: "absolute",
    cursor: "pointer",
    top: isMobile ? "-3%" : "20px",
    right: isMobile ? "-10px" : "20px",
    zIndex: 3030303,
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

const ForgotPasswordWrapper = styled("div")(({ isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: isMobile ? "100%" : "380px",
    padding: isMobile && "20px",
    margin: "0 auto",
    paddingTop: "30px",
}));
const ResetPasswordWrapper = styled("div")(({ isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: isMobile ? "100%" : "380px",
    padding: isMobile && "20px",
    margin: "0 auto",
    paddingTop: "30px",
}));

const SignupForm = ({ isMobile }) => {
    const dispatcher = useDispatch();
    const [signupDetails, setSignupDetails] = useState({
        email: "",
        username: "",
        password: "",
        ref: "",
        captchaValue: null,
    });
    const [checked, setChecked] = useState("");
    const [signupError, setSignupError] = useState("");
    const [recaptchaError, setRecaptchaError] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        const { username, email, password } = signupDetails;
        if (!username || !password || !email) {
            setSignupError("Please fill all fields");
            return;
        }
        if (!checked) {
            setChecked("Please agree to the terms and conditions");
            toast.error("Please agree to the terms and conditions");
            return;
        }
        if (!signupDetails.captchaValue) {
            setRecaptchaError("Please verify that you are not a robot");
            toast.error("Please verify that you are not a robot");
            return;
        }
        const response = await dispatcher(signup(signupDetails));
        if (response.payload.status === 400) {
            const error = JSON.parse(response.payload.data);
            console.log("error: ", error);
            Object.values(error).map((err) => {
                setSignupError(err[0]);
                toast.error(err[0]);
            });
            Object.keys(error).map((err) => {
                setSignupDetails({ ...signupDetails, [err]: "" });
            });
        }
        if (response.payload.status === 201) {
            toast.success("Signup successful, please login");
            dispatcher(setAuthModalState({ open: false }));
            await sleep(50);
            dispatcher(setAuthModalState({ open: true, tab: 0 }));
        }
    }

    return (
        <SignupFormWrapper isMobile={isMobile}>
            <Input
                addon=""
                type="phone"
                placeholder="Phone Number (1234567890)"
                value={signupDetails.phone}
                onChange={(e) =>
                    setSignupDetails({
                        ...signupDetails,
                        phone: e.target.value,
                    })
                }
                pattern="^\d{10}$"
                size="50"
                border={signupError && !signupDetails.phone && "#F93967"}
            />
            {/* <Input
                addon={<img src={user} alt="" />}
                type="text"
                placeholder="Full Name"
                value={signupDetails.name}
                onChange={(e) =>
                    setSignupDetails({ ...signupDetails, name: e.target.value })
                }
                border={signupError && !signupDetails.name && " #F93967"}
            /> */}

            <Input
                addon={<img src={user} alt="" />}
                type="text"
                placeholder="Email"
                value={signupDetails.email}
                onChange={(e) =>
                    setSignupDetails({
                        ...signupDetails,
                        email: e.target.value,
                    })
                }
                border={signupError && !signupDetails.email && " #F93967"}
            />

            <Input
                addon={<img src={user} alt="" />}
                type="text"
                placeholder="Username"
                value={signupDetails.username}
                onChange={(e) =>
                    setSignupDetails({
                        ...signupDetails,
                        username: e.target.value,
                    })
                }
                border={signupError && !signupDetails.username && " #F93967"}
            />

            <Input
                addon={<img src={lock} alt="" />}
                type="password"
                placeholder="Enter your password"
                value={signupDetails.password}
                onChange={(e) =>
                    setSignupDetails({
                        ...signupDetails,
                        password: e.target.value,
                    })
                }
                border={signupError && !signupDetails.password && " #F93967"}
            />
            <Input
                addon=""
                type="phone"
                placeholder="Invite code (optional)"
                value={signupDetails.ref}
                onChange={(e) =>
                    setSignupDetails({
                        ...signupDetails,
                        ref: e.target.value,
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
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                    }
                    label={
                        <p
                            style={{
                                fontSize: isMobile ? "10px" : "12px",
                                color: "white",
                            }}
                        >
                            I am at least 18 years old and have read and agree
                            to the Terms & Conditions and Privacy Policy
                        </p>
                    }
                />
            </p>
            <Text type="p" text={checked} color="#F93967" fontSize="14px" />
            <div
                style={{
                    transform: !isMobile && "scaleX(1.6)",
                    transformOrigin: "0 0",
                    // margin: '0 auto'
                }}
            >
                <ReCAPTCHA
                    sitekey={"6LdGw6MjAAAAAOizaooLBfkIFQ6GkvxA22FtenMd"}
                    onChange={(value) => {
                        setSignupDetails({
                            ...signupDetails,
                            captchaValue: value,
                        });
                        setRecaptchaError("");
                    }}
                />
            </div>
            <Text
                type="p"
                text={recaptchaError}
                color="#F93967"
                fontSize="14px"
            />

            <Button
                text="Sign up"
                width="100%"
                background="#3586FF"
                color="#fff"
                borderRadius="30px"
                padding="15px "
                marginTop="20px"
                onSubmit={handleSubmit}
            />
        </SignupFormWrapper>
    );
};
const LoginForm = ({ isMobile, switchTo }) => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
        captchaValue: "",
    });
    const [loginError, setLoginError] = useState("");
    const [catpchaError, setCatpchaError] = useState("");
    const dispatcher = useDispatch();
    async function handleSubmit(e) {
        e.preventDefault();
        const { email, password, captchaValue } = loginDetails;
        if (email === "" || password === "") {
            setLoginError("Please fill all the fields");
            return;
        }
        if (captchaValue === "") {
            setCatpchaError("Please verify that you are not a robot");
            return;
        }
        const response = await dispatcher(login(loginDetails));
        if (response.payload.status === 401) {
            setLoginError(
                "Invalid email or password, please try again or reset your password"
            );
        }
        if (response.payload.status === 200) {
            dispatcher(setAuthModalState({ open: false }));
            localStorage.setItem(
                "access_token",
                response.payload.data.access_token
            );
            toast.success("You have successfully logged in");
        }
    }

    return (
        <LoginFormWrapper>
            <Input
                addon={<img src={user} alt="" />}
                type="text"
                placeholder="Email/Phone"
                value={loginDetails.email}
                onChange={(e) => {
                    setLoginDetails({ ...loginDetails, email: e.target.value });
                    setLoginError("");
                }}
                border={loginError && " #F93967"}
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
                border={loginError && "#F93967"}
            />
            <Text type="p" text={loginError} color="#F93967" fontSize="14px" />
            <p
                style={{
                    alignSelf: "flex-end",
                    fontSize: "14px",
                    color: "#9DA6CA",
                    cursor: "pointer",
                }}
                onClick={() => switchTo("forgotPassword")}
            >
                Forgot your password?
            </p>
            <div
                style={{
                    transform: !isMobile && "scaleX(1.6)",
                    transformOrigin: "0 0",
                    // border: catpchaError && "3px solid #F93967",
                    width: "fit-content",
                    // margin: '0 auto'
                }}
            >
                <ReCAPTCHA
                    sitekey={"6LdGw6MjAAAAAOizaooLBfkIFQ6GkvxA22FtenMd"}
                    onChange={(value) => {
                        setLoginDetails({
                            ...loginDetails,
                            captchaValue: value,
                        });
                        setCatpchaError("");
                    }}
                />
            </div>
            <Text
                type="p"
                text={catpchaError}
                color="#F93967"
                fontSize="14px"
            />
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
    const [mountedComponent, setMountedComponent] = useState("loginSignup");

    const LoginSignup = () => (
        <TabComponent>
            <NewCustomTabs
                tabItems={[
                    {
                        value: "login",
                        label: "Log In",
                        content: (
                            <LoginForm
                                isMobile={isMobile}
                                switchTo={setMountedComponent}
                            />
                        ),
                    },
                    {
                        label: "Sign Up",
                        value: "signup",
                        content: <SignupForm isMobile={isMobile} />,
                    },
                ]}
                defaultTab={modalState.tab}
                width={isMobile ? "100%" : "350px"}
            />
        </TabComponent>
    );
    let ForgotPassword = () => {
        const [forgotDetails, setForgotDetails] = useState({
            email: "",
            submitted: false,
            error: "",
        });
        async function handleForgotPassword() {
            if (forgotDetails.submitted) return;
            if (forgotDetails.email === "") {
                toast.error("Please enter your email address");
                setForgotDetails({
                    ...forgotDetails,
                    error: "Fill in your email",
                });
                return;
            }
            setForgotDetails({ ...forgotDetails, submitted: true });
            console.log("forgot password");
            const response = await dispatcher(
                sendForgotPasswordMail({ email: forgotDetails.email })
            );
            console.log("response", response);
            if (response.payload.status === 422) {
                toast.error(response.payload.data.message);
                setForgotDetails({
                    ...forgotDetails,
                    error: response.payload.data.message,
                });
                return;
            }
            if (response.type === "sendForgotPasswordMail/fulfilled") {
                toast.success(
                    "A password reset link has been sent to your email"
                );
            }
            return setMountedComponent("resetPassword");
        }
        return (
            <ForgotPasswordWrapper isMobile={isMobile}>
                <Text
                    type="p"
                    text="Enter your email address and we'll send you a link to reset your password"
                    color="white"
                    fontSize="14px"
                    textAlign="center"
                    paddingTop="20px"
                />
                <Input
                    addon={<img src={user} alt="" />}
                    type="email"
                    placeholder="Enter your email address"
                    value={forgotDetails.email}
                    onChange={(e) => {
                        setForgotDetails({
                            ...forgotDetails,
                            email: e.target.value,
                        });
                    }}
                    border={forgotDetails.error && " #F93967"}
                />
                {forgotDetails.error && (
                    <Text
                        type="p"
                        text={forgotDetails.error}
                        color="#F93967"
                        fontSize="14px"
                    />
                )}
                <div onClick={() => setMountedComponent("loginSignup")}>
                    <Text
                        type="p"
                        text={"Back to login"}
                        fontSize="14px"
                        textAlign="right"
                        cursor="pointer"
                        color="rgb(157, 166, 202)"
                    />
                </div>
                <Button
                    text={forgotDetails.submitted ? "Sending...." : "Send"}
                    width="100%"
                    background="#3586FF"
                    color="#fff"
                    borderRadius="30px"
                    padding="15px "
                    marginTop="20px"
                    onSubmit={handleForgotPassword}
                />
            </ForgotPasswordWrapper>
        );
    };
    let ResetPassword = () => {
        const [resetDetails, setResetDetails] = useState({
            password: "",
            token: "",
            submitted: false,
            error: {
                password: "",
                token: "",
                field: "",
            },
        });
        async function handleResetPassword() {
            if (resetDetails.submitted) return;
            setResetDetails({ ...resetDetails, submitted: true });

            if (resetDetails.password === "" && resetDetails.token === "") {
                toast.error("Please enter your password and token");
                setResetDetails({
                    ...resetDetails,
                    error: {
                        ...resetDetails.error,
                        password: "Fill in your password",
                        token: "Fill in your token",
                    },
                });
                return;
            }
            if (resetDetails.password === "") {
                toast.error("Please enter your password");
                setResetDetails({
                    ...resetDetails,
                    error: {
                        ...resetDetails.error,
                        password: "Fill in your password",
                    },
                });
                return;
            }
            if (resetDetails.token === "") {
                toast.error("Please enter your token");
                setResetDetails({
                    ...resetDetails,
                    error: {
                        ...resetDetails.error,
                        token: "Fill in your token",
                    },
                });
                return;
            }
            const response = await dispatcher(
                resetPassword({
                    password: resetDetails.password,
                    code: resetDetails.token,
                })
            );
            console.log("response", response);
            if (response.payload.status === 422) {
                toast.error(response.payload.data.message);
                setResetDetails({
                    ...resetDetails,
                    error: {
                        ...resetDetails.error,
                        field: response.payload.data.message,
                        [Object.keys(response.payload.data.errors)[0]]:
                            response.payload.data.message,
                    },
                });
                return;
            }
            if(response.payload.status === 200){
                toast.success("Password reset successfully, please login");
                setMountedComponent("loginSignup");

            }
        }
        return (
            <ResetPasswordWrapper isMobile={isMobile}>
                <Text
                    type="p"
                    text="Enter your new password and the token sent to your email"
                    color="white"
                    fontSize="14px"
                    textAlign="center"
                    paddingTop="20px"
                />
                <Input
                    addon={<img src={lock} alt="" />}
                    type="password"
                    placeholder="Enter new password"
                    value={resetDetails.password}
                    onChange={(e) =>
                        setResetDetails({
                            ...resetDetails,
                            password: e.target.value,
                            error: {
                                ...resetDetails.error,
                                password: "",
                            },
                        })
                    }
                    border={resetDetails.error.password && "#F93967"}
                />
                <Input
                    addon={<img src={lock} alt="" />}
                    type="text"
                    placeholder="Token sent to your email"
                    value={resetDetails.token}
                    onChange={(e) =>
                        setResetDetails({
                            ...resetDetails,
                            token: e.target.value,
                            error: {
                                ...resetDetails.error,
                                token: "",
                            },
                        })
                    }
                    border={resetDetails.error.token && "#F93967"}
                />
                {resetDetails.error.field && (
                    <Text
                        type="p"
                        text={resetDetails.error.field}
                        color="#F93967"
                        fontSize="14px"
                    />
                )}
                <div onClick={() => setMountedComponent("forgotPassword")}>
                    <Text
                        type="p"
                        text={"Resend token"}
                        fontSize="14px"
                        textAlign="right"
                        cursor="pointer"
                        color="rgb(157, 166, 202)"
                    />
                </div>
                <Button
                    text={resetDetails.submitted ? "Sending...." : "Send"}
                    width="100%"
                    background="#3586FF"
                    color="#fff"
                    borderRadius="30px"
                    padding="15px "
                    marginTop="20px"
                    onSubmit={handleResetPassword}
                />
            </ResetPasswordWrapper>
        );
    };
    let Component = null;
    switch (mountedComponent) {
        case "loginSignup":
            Component = LoginSignup;
            break;
        case "forgotPassword":
            Component = ForgotPassword;
            break;
        case "resetPassword":
            Component = ResetPassword;
            break;
        default:
            Component = LoginSignup;
    }
    return (
        <CustomModal
            open={modalState.open}
            handleClose={() => dispatcher(setAuthModalState({ open: false }))}
            isAuthModal={true}
            shouldHaveBorder={true}
        >
            <CloseIcon
                onClick={() =>
                    dispatcher(setAuthModalState({ open: !modalState.open }))
                }
                isMobile={isMobile}
            >
                <img src={isMobile ? mobileclose : close} alt="" />
            </CloseIcon>
            <LoginSignupModalWrapper isMobile={isMobile}>
                <Component />
            </LoginSignupModalWrapper>
        </CustomModal>
    );
};

export default LoginSignupModal;

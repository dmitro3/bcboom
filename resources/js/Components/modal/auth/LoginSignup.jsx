import CustomTabs from "@/Components/Tabs/Tab";
import { setAuthModalState } from "@/redux/auth/auth-slice";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../../../../../public/images/svg/closeModal.svg";
import CustomModal from "../Modal";

const LoginSignupModalWrapper = styled("div")(({}) => ({
    background: "#272C4B",
    position: "relative",
    borderRadius: "20px",
    border: "transparent",
    padding: "20px 30px",
}));
const CloseIcon = styled("div")(({}) => ({
    position: "absolute",
    cursor: "pointer",
    top: "20px",
    right: "20px",
}));
const TabComponent = styled("div")(({}) => ({}));
const LoginSignupModal = () => {
    const { modalState } = useSelector((state) => state.auth);
    const dispatcher = useDispatch();
    return (
        <CustomModal
            open={modalState.open}
            handleClose={() => dispatcher(setAuthModalState({ open: false }))}
        >
            <LoginSignupModalWrapper>
                <CloseIcon
                    onClick={() =>
                        dispatcher(
                            setAuthModalState({ open: !modalState.open })
                        )
                    }
                >
                    <img src={close} alt="" />
                </CloseIcon>
                <TabComponent>
                    <CustomTabs
                        tabItems={[
                            {
                                value: "login",
                                content: <div>login</div>,
                            },
                            {
                                label: "Sign Up",
                                value: "signup",
                                content: <div>signup</div>,
                            },
                        ]}
                    />
                </TabComponent>
            </LoginSignupModalWrapper>
        </CustomModal>
    );
};

export default LoginSignupModal;

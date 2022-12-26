import Text from "@/Components/Text/Text";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setWalletModalState } from "@/redux/wallet/wallet-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../Modal";
import close from "../../../../../public/images/svg/closeModal.svg";
import mobileclose from "../../../../../public/images/svg/mobileclose.svg";
import { styled } from "@mui/system";
import { NewCustomTabs } from "@/Components/Tabs/Tab";

const WalletWrapper = styled("div")(({ isMobile }) => ({
    background: "#464F85",
    position: "relative",
    borderRadius: "20px",
    border: "transparent",
    width: isMobile ? "100%" : "600px",
    margin: isMobile && "0 auto",
    outline: "none",
}));
const WalletHeader = styled("div")(({ isMobile }) => ({
    padding: "20px 30px",
    // padding: "5px 0",
}));

const CloseIcon = styled("div")(({ isMobile }) => ({
    position: "absolute",
    cursor: "pointer",
    top: "25px",
    right: "25px",
}));
// padding: "20px 30px",

const WalletContentWrapper = styled("div")(({ isMobile }) => ({
    background: "#272C4B",
    height: "100%",
    width: "100%",
    borderRadius: "0 0 20px 20px",
}));
const TabComponent = styled("div")(({}) => ({}));
const DepositWrapper = styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    gap: "20px",
}));
const Deposit = () => {
    return <DepositWrapper>
        
    </DepositWrapper>;
};
const Withdraw = () => {
    return <div>withdraw here</div>;
};

const WalletModal = () => {
    const { modalState } = useSelector((state) => state.wallet);
    const dispatcher = useDispatch();
    const { isMobile } = useScreenResolution();
    return (
        <CustomModal
            open={modalState.open}
            handleClose={() => dispatcher(setWalletModalState({ open: false }))}
        >
            <WalletWrapper isMobile={isMobile}>
                <WalletHeader>
                    <Text
                        type="p"
                        text="Wallet"
                        fontWeight="bold"
                        fontSize="16px"
                    />

                    <CloseIcon
                        onClick={() =>
                            dispatcher(
                                setWalletModalState({ open: !modalState.open })
                            )
                        }
                        isMobile={isMobile}
                    >
                        {isMobile ? (
                            <img
                                src={mobileclose}
                                alt=""
                                style={{
                                    filter: "invert(55%) sepia(12%) saturate(1139%) hue-rotate(192deg) brightness(98%) contrast(85%)",
                                }}
                            />
                        ) : (
                            <img src={close} alt="" />
                        )}
                    </CloseIcon>
                </WalletHeader>
                <WalletContentWrapper>
                    <TabComponent>
                        <NewCustomTabs
                            tabItems={[
                                {
                                    value: "deposit",
                                    label: "Deposit",
                                    content: <Deposit isMobile={isMobile} />,
                                },
                                {
                                    label: "Withdraw",
                                    value: "withdraw",
                                    content: <Withdraw isMobile={isMobile} />,
                                },
                            ]}
                        />
                    </TabComponent>
                </WalletContentWrapper>
            </WalletWrapper>
        </CustomModal>
    );
};

export default WalletModal;

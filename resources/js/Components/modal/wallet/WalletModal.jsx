import Text from "@/Components/Text/Text";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setWalletModalState } from "@/redux/wallet/wallet-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../Modal";
import close from "../../../../../public/images/svg/closeModal.svg";
import proceed from "../../../../../public/images/svg/proceed.svg";
import depositCarousel from "../../../../../public/images/carousel/depositcarousel.svg";
import brazillianreal from "../../../../../public/images/currencies/brazillianreal.svg";
import currency from "../../../../../public/images/currencies/currency.svg";
import mobileclose from "../../../../../public/images/svg/mobileclose.svg";
import { styled } from "@mui/system";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import Input from "@/Components/Input/Input";
import { Flex } from "@/Components/UtilComponents/Flex";
import Tag, { RemovableTag } from "@/Components/UtilComponents/Tag";
import { currencyFormatter } from "@/utils/util";
import CustomCarousel from "@/Components/Carousel/Carousel";

const WalletWrapper = styled("div")(({ isMobile }) => ({
    background: "#464F85",
    position: "relative",
    borderRadius: "20px",
    border: "transparent",
    width: isMobile ? "90vw" : "600px",
    height: isMobile && "60vh",
    overflowY: "auto",
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
    top: "2%",
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
    width: "100%",
}));

const AmountOptions = styled("div")(({}) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    width: "100%",
    marginTop: "20px",
}));

const DepositButton = styled("button")(({}) => ({
    width: "100%",
    background: "#3586FF",
    borderRadius: "10px",
    padding: "10px",
}));

const Disclaimer = styled("div")(({}) => ({
    paddingLeft: "30px",
}));
const DepositCarousel = styled("div")(({}) => ({
    "& .css-1lomao8": {
        padding: "0!important",
    },
    "& .css-14psfy6 .testimoni--wrapper": {
        padding: "0!important",
    },
}));

const Deposit = () => {
    const [value, setValue] = useState(100);
    return (
        <DepositWrapper>
            <Flex alignItems="center" gap="10px" width="100%">
                <Text type="p" text="Deposit Amount" />
                <Tag text="TRC20" bg="#3A4380" />
            </Flex>
            <Input
                addon={<img src={currency} alt="" />}
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                afterInputText="Extra + G$20"
                br="10px"
            />
            <AmountOptions>
                {Array.from([
                    100, 200, 300, 400, 500, 1000, 2000, 5000, 10000,
                ]).map((item, i) => (
                    <RemovableTag
                        key={i}
                        text={item}
                        border="#7E85B2"
                        bg="transparent"
                        addon={
                            <img
                                src={brazillianreal}
                                alt=""
                                style={{ width: "20px" }}
                            />
                        }
                        onChange={() => setValue(item)}
                    />
                ))}
            </AmountOptions>
            <DepositButton>
                <Flex alignItems="center" justifyContent="space-between">
                    <div>
                        <Text
                            type="p"
                            text="Deposit"
                            fontSize="22px"
                            fontWeight="bold"
                        />
                        <Text
                            type="p"
                            text="( 1B$ = R$0.544)"
                            fontSize="13px"
                        />
                    </div>
                    <Flex alignItems="center">
                        <Text
                            type="p"
                            text={`R$ ${currencyFormatter
                                .format(value * 0.544)
                                .replace("$", "")}`}
                            fontSize="24px"
                            fontWeight="bold"
                        />
                        <img src={proceed} alt="" />
                    </Flex>
                </Flex>
            </DepositButton>
            <DepositCarousel>
                <CustomCarousel rowPerCount={1} autoplay={false}>
                    {Array.from({ length: 10 }).map((item, i) => (
                        <div key={i} className="testimoni--wrapper">
                            <img
                                src={depositCarousel}
                                alt=""
                                style={{ height: "100%" }}
                            />
                        </div>
                    ))}
                </CustomCarousel>
            </DepositCarousel>
            <Disclaimer>
                <Text
                    type="p"
                    text="Deposit Notes"
                    fontSize="18px"
                    color="white"
                    textIndent="-17px"
                />
                {Array.from([
                    "Minimum deposit: R$ 20.00",
                    "Maximum deposit amount: R$ 4999.00",
                    "Enter values as multiples of 10, for a faster processing.",
                    "Please enter your information correctly. personnel, as necessary, to ensure that the recharge amount reaches your account as soon quickly as possible.",
                ]).map((item, i) => (
                    <Text
                        type="li"
                        text={item}
                        key={i}
                        fontSize="12px"
                        color="#B2B9E3"
                        padding="3px 0"
                    />
                ))}
            </Disclaimer>
        </DepositWrapper>
    );
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
                            <img src={mobileclose} alt="" />
                        ) : (
                            <img
                                src={close}
                                alt=""
                                style={{
                                    filter: "invert(55%) sepia(12%) saturate(1139%) hue-rotate(192deg) brightness(98%) contrast(85%)",
                                }}
                            />
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

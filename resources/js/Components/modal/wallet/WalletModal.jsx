import CustomCarousel from "@/Components/Carousel/Carousel";
import Input from "@/Components/Input/Input";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
import Tag, { RemovableTag } from "@/Components/UtilComponents/Tag";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { deposit, setWalletModalState } from "@/redux/wallet/wallet-slice";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import depositCarousel from "../../../../../public/images/carousel/depositcarousel.svg";
import brazillianreal from "../../../../../public/images/currencies/brazillianreal.svg";
import currency from "../../../../../public/images/currencies/currency.svg";
import close from "../../../../../public/images/svg/closeModal.svg";
import mobileclose from "../../../../../public/images/svg/mobileclose.svg";
import proceed from "../../../../../public/images/svg/proceed.svg";
import CustomModal from "../Modal";

const WalletWrapper = styled("div")(({ isMobile }) => ({
    background: "#464F85",
    position: "relative",
    borderRadius: "20px",
    border: "transparent",
    width: isMobile ? "90vw" : "600px",
    // height: isMobile && "80vh",
    // overflowY: "auto",
    margin: isMobile && "0 auto",
    outline: "none",

    // padding: !isMobile && "20px 30px",
    maxWidth: isMobile && "370px",
}));
const WalletHeader = styled("div")(({ isMobile }) => ({
    padding: "20px 30px",
    // padding: "5px 0",
}));

const CloseIcon = styled("div")(({ isMobile }) => ({
    position: "absolute",
    cursor: "pointer",
    top: isMobile ? "-3%" : "20px",
    right: isMobile ? "-10px" : "20px",
    zIndex: 3030303,
}));
// padding: "20px 30px",

const WalletContentWrapper = styled("div")(({ isMobile }) => ({
    background: "#272C4B",
    height: "100%",
    width: "100%",
    borderRadius: "0 0 20px 20px",
}));
const TabComponent = styled("div")(({}) => ({}));
const TabWrapper = styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    gap: "20px",
    width: "100%",
}));

const AmountOptions = styled("div")(({ isMobile }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    width: "100%",
    marginTop: isMobile ? "0px" : "20px",
}));

const DepositButton = styled("button")(({ fontSize }) => ({
    width: "100%",
    background: "#3586FF",
    borderRadius: "10px",
    padding: "10px",
    fontSize: fontSize,

    "&:hover": {
        background: "#3586ff70",
    },
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
    const [calculatedValue, setCalculatedValue] = useState(
        Math.floor(value * 0.544)
    );
    const [submitted, setSubmitted] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);
    const dispatcher = useDispatch();
    const { isMobile } = useScreenResolution();
    async function handleDeposit(value) {
        setSubmitted(true);
        if (!value || value < 10) {
            toast.error("Minimum deposit is R$10");
            setSubmitted(false);
            return;
        }
        const response = await dispatcher(deposit(value));
        console.log("response", response);
        if (!response?.payload) {
            toast.error("An error occured");
            setSubmitted(false);
            return;
        }
        if (response?.payload?.error) {
            toast.error(response.payload.error);
            setSubmitted(false);
            return;
        }
        if (response?.payload?.status === 200) {
            toast.info(`You made an order of R$ ${value}`);
            // toast.info('Redirecting to payment gateway...')
            // window.location.href = response?.payload?.data?.link;
            console.log('window: ', response?.payload)
        }
        // setSubmitted(false);
        // dispatcher(setWalletModalState({ open: false }));
    }
    return (
        <TabWrapper>
            <Flex alignItems="center" gap="10px" width="100%">
                <Text type="p" text="Deposit Amount" />
                <Tag text="TRC20" bg="#3A4380" />
            </Flex>
            <Input
                addon={<img src={currency} alt="" />}
                type="number"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setCalculatedValue(Math.floor(e.target.value * 0.544));
                }}
                afterInputText="Extra + G$20"
                br="10px"
            />
            <AmountOptions isMobile={isMobile}>
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
                        onChange={() => {
                            console.log('item: ', item)
                            setValue(item);
                            setCalculatedValue(item * 0.544);
                        }}
                    />
                ))}
            </AmountOptions>
            <DepositButton
                onClick={() => handleDeposit(calculatedValue)}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
            >
                {submitted ? (
                    <CircularProgress
                        sx={{
                            color: "#fff",
                        }}
                    />
                ) : (
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
                                text={`R$ ${
                                    Math.floor(calculatedValue)
                                    // .replace("$", "")
                                }`}
                                fontSize="24px"
                                fontWeight="bold"
                            />
                            <img
                                src={proceed}
                                alt=""
                                style={{
                                    marginRight: buttonHovered && "20px",
                                    paddingLeft: buttonHovered && "10px",
                                    transition: "all .4s",
                                }}
                            />
                        </Flex>
                    </Flex>
                )}
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
        </TabWrapper>
    );
};
const Withdraw = () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [pix, setPix] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    return (
        <TabWrapper>
            <Flex alignItems="center" gap="10px" width="100%">
                <Text type="p" text="Withdraw Amount" />
                <Tag text="TRC20" bg="#3A4380" />
                <Tag text="PIX" bg="#3A4380" />
                <Tag text="Picpay" bg="#3A4380" />
            </Flex>

            <Text type="p" text="Amount to withdraw:" />
            <Input
                addon={<img src={currency} alt="" />}
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                br="10px"
            />
            <Text type="p" text="Cardholder name:" />
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name of card holder"
                br="10px"
            />
            <Flex alignItems="center" gap="10px">
                <div style={{ width: "50%" }}>
                    <Text type="p" text="CPF:" />
                    <Input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="Enter CPF"
                        br="10px"
                    />
                </div>
                <div style={{ width: "50%" }}>
                    <Text type="p" text="WhatsApp:" />
                    <Input
                        type="text"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Enter WhatsApp number"
                        br="10px"
                    />
                </div>
            </Flex>
            <Flex alignItems="center" gap="10px">
                <div style={{ width: "50%" }}>
                    <Text type="p" text="PIX Type:" />
                    <Input type="text" value={"CPF"} br="10px" disabled />
                </div>
                <div style={{ width: "50%" }}>
                    <Text type="p" text="Chave PIX:" />
                    <Input
                        type="text"
                        value={pix}
                        onChange={(e) => setPix(e.target.value)}
                        placeholder="Chave PIX"
                        br="10px"
                    />
                </div>
            </Flex>
            <Disclaimer>
                <Text
                    type="p"
                    text="Withdrawal Instructions"
                    fontSize="18px"
                    color="white"
                    textIndent="-17px"
                />
                {Array.from([
                    "Number of withdrawal at Current VIP level",
                    "Withdrawal fee: 2.1%",
                    "Free monthly withdrawal amount: R$ 100.00",
                    "Minimum withdrawal order: R$ 100.00",
                    "Maximum withdrawal order: R$ 500.00",
                    "Pickup time: 11:00 - 19:00",
                    "Payment time: from 5 - 24 hours",
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
            <DepositButton fontSize="20px">Withdraw</DepositButton>
        </TabWrapper>
    );
};

const WalletModal = () => {
    const { modalState } = useSelector((state) => state.wallet);
    const dispatcher = useDispatch();
    const { isMobile } = useScreenResolution();
    return (
        <CustomModal
            open={modalState.open}
            handleClose={() => dispatcher(setWalletModalState({ open: false }))}
            isAuthModal
        >
            <CloseIcon
                onClick={() =>
                    dispatcher(setWalletModalState({ open: !modalState.open }))
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
            <WalletWrapper isMobile={isMobile}>
                <WalletHeader>
                    <Text
                        type="p"
                        text="Wallet"
                        fontWeight="bold"
                        fontSize="16px"
                    />
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
                            defaultTab={modalState.tab}
                        />
                    </TabComponent>
                </WalletContentWrapper>
            </WalletWrapper>
        </CustomModal>
    );
};

export default WalletModal;

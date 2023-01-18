import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { getMe, setProfile } from "@/redux/profile/profileSlice";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import centerIcon from "../../../../public/images/user/userIcon.svg";
import historyIcon from "../../../../public/images/svg/historyIcon.svg";
import datepickericon from "../../../../public/images/svg/datepicker.svg";
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import BcButton from "@/Components/Button/Button";
const HistoryPageWrapper = styled("div")(({ isMobile }) => ({
    margin: "0 auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 100,
}));

const HistoryWrapper = styled("div")(({ isMobile }) => ({
    background: "linear-gradient(119.77deg, #272C56 2.99%, #444AC7 100%)",
    borderRadius: "10px",
    margin: isMobile ? "60px 0 0" : "70px 0",
    position: "relative",
    zIndex: 300,
    padding: "20px",
}));

const TabComponent = styled("div")(({}) => ({
    position: "relative",
    zIndex: 200,
    padding: 0,
}));

const DateInput = styled("div")(({isMobile}) => ({
    background: "#1F224A",
    borderRadius: "10px",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    width: isMobile ? '100%' : "300px",
    cursor: "pointer",
    "& img": {
        width: "20px",
        height: "20px",
        marginRight: "10px",
    },
}));

const DepositWrapper = styled("div")(({}) => ({
    width: "100%",
    margin: "0 auto",
}));

const Deposit = ({ isMobile }) => {
    return (
        <DepositWrapper>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Flex alignItems="stretch" gap='20px' margin='20px 0'>
                    <DateInput>
                        <img src={datepickericon} alt="" />
                        <Text
                            type={"p"}
                            text={"Start - End Date"}
                            fontSize={"0.8rem"}
                        />
                    </DateInput>
                    <BcButton
                        text="Search"
                        // width="100px"
                        height="100%"
                        padding="10px 20px"
                        background="#3586FF"
                        fontSize="0.8rem"
                        borderRadius="10px"
                    />
                </Flex>
            </div>
        </DepositWrapper>
    );
};
const Withdraw = ({ isMobile }) => {
    return <div>withdraw herere@!wfgijhsdfgkljabsdflkjhasdf</div>;
};
const GameHistory = ({ isMobile }) => {
    return <div>game history herere@!wfgijhsdfgkljabsdflkjhasdf</div>;
};

const HistoryPage = () => {
    const { isMobile } = useScreenResolution();
    const dispatcher = useDispatch();

    const [currentTab, setCurrentTab] = useState(2);
    const tabs = ["Wallet", "Wallet", "Game"];
    return (
        <>
            <Head title="Personal Center" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <HistoryPageWrapper>
                        <ImageGridLayout
                            item={{
                                title: "Personal Center",
                                icon: centerIcon,
                                margin: "10px",
                            }}
                            index={0}
                            page="personal-center"
                        >
                            <HistoryWrapper isMobile={isMobile}>
                                <Flex alignItems="center" gap="10px">
                                    <img src={historyIcon} alt="historyIcon" />
                                    <Text
                                        type="p"
                                        text={tabs[currentTab] + " History"}
                                        fontSize="1rem"
                                        fontWeight="bold"
                                        color="#fff"
                                        textTransform="capitalize"
                                    />
                                </Flex>

                                <TabComponent>
                                    <NewCustomTabs
                                        tabItems={[
                                            {
                                                value: "Deposit",
                                                label: "Deposit",
                                                content: (
                                                    <Deposit
                                                        isMobile={isMobile}
                                                    />
                                                ),
                                            },
                                            {
                                                value: "Withdraw",
                                                label: "Withdraw",
                                                content: (
                                                    <Withdraw
                                                        isMobile={isMobile}
                                                    />
                                                ),
                                            },
                                            {
                                                value: "Game",
                                                label: "Game",
                                                content: (
                                                    <GameHistory
                                                        isMobile={isMobile}
                                                    />
                                                ),
                                            },
                                        ]}
                                        defaultTab={2}
                                        setTab={setCurrentTab}
                                        width={isMobile ? "100%" : "550px"}
                                        borderRadius="10px"
                                        background="#1F224A"
                                        // setCurrentTab={setCurrentTab}
                                    />
                                </TabComponent>
                            </HistoryWrapper>
                        </ImageGridLayout>
                    </HistoryPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default HistoryPage;

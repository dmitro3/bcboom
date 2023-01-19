import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { getMe, setProfile } from "@/redux/profile/profileSlice";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import centerIcon from "../../../../public/images/user/userIcon.svg";
import historyIcon from "../../../../public/images/svg/historyIcon.svg";
import datepickericon from "../../../../public/images/svg/datepicker.svg";
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import BcButton from "@/Components/Button/Button";
import CustomTable from "@/Components/UtilComponents/Table";
import DateRangePicker from "@/Components/UtilComponents/DateRangePicker";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { format } from "date-fns";
import { eachDayOfInterval } from "date-fns";

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

const DateInput = styled("div")(({ isMobile }) => ({
    background: "#1F224A",
    borderRadius: "10px",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    width: isMobile ? "100%" : "400px",
    cursor: "pointer",
    position: "relative",
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
    const [open, setOpen] = useState(false);
    const [currentRange, setCurrentRange] = useState("");
    const pickerRef = useRef(null);
    useOnClickOutside(pickerRef, () => setOpen(false));
    const [data, setData] = useState(
        Array.from({ length: 100 }).fill({
            transactionId: "123456789123456789123456789123456789",
            date: "2023-01-18T20:58:41.000000Z",
            depositAmount: "100",
            bonus: "10",
            actualAmount: "110",
            status: "success",
        })
    );
    useEffect(() => {
        if (currentRange.endDate) setOpen(false);
    }, [currentRange]);
    function handleSearch(ranges) {
        if (!ranges.startDate || !ranges.endDate) return;
        const daysInterval = eachDayOfInterval({
            start: ranges.startDate,
            end: ranges.endDate,
        }).map((el) => new Date(el).setHours(0, 0, 0, 0));
        const filtered = data.filter((el, i) =>
            daysInterval.includes(new Date(el.date).setHours(0, 0, 0, 0))
        );
        console.log(
            "filtered: ",
            filtered,
            daysInterval,
            new Date(data[0].date).setHours(0, 0, 0, 0)
        );
        // console.log("daysInterval: ", daysInterval, rows);
        setData(filtered);
    }
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
                <Flex alignItems="stretch" gap="20px" margin="20px 0" direction={isMobile ? 'column': 'row'} width={isMobile && '100%'} >
                    <DateInput
                        isMobile={isMobile}
                        onClick={() => setOpen(!open)}
                    >
                        <img src={datepickericon} alt="" />
                        <Text
                            type={"p"}
                            text={
                                currentRange
                                    ? `${format(
                                          currentRange.startDate,
                                          "dd-MM-yyyy"
                                      )} - 
                                      ${format(
                                          currentRange.endDate,
                                          "dd-MM-yyyy"
                                      )}`
                                    : "Start - End Date"
                            }
                            fontSize={"0.8rem"}
                        />
                    </DateInput>
                    <div style={{ position: "absolute", top: "140px" }}>
                        <DateRangePicker
                            toggle={setOpen}
                            open={open}
                            ref={pickerRef}
                            setCurrentRange={setCurrentRange}
                        />
                    </div>
                    <BcButton
                        text="Search"
                        width={"100%"}
                        height="100%"
                        padding="10px 20px"
                        background="#3586FF"
                        fontSize="0.8rem"
                        borderRadius="10px"
                        onSubmit={() => handleSearch(currentRange)}
                    />
                </Flex>
            </div>
            <Flex alignItems="center" justifyContent="center" margin={isMobile ? '1px 0 ' : "40px 0"}>
                <div style={{ width: isMobile ? "100%" : "1000px" }}>
                    <CustomTable
                        columns={[
                            "transaction ID",
                            "Date",
                            "Deposit Amount",
                            "Bonus",
                            "Actual Amount",
                            "Status",
                        ]}
                        rows={data}
                    />
                </div>
            </Flex>
        </DepositWrapper>
    );
};
const Withdraw = ({ isMobile }) => {
    const [open, setOpen] = useState(false);
    const [currentRange, setCurrentRange] = useState("");
    const pickerRef = useRef(null);
    useOnClickOutside(pickerRef, () => setOpen(false));
    const [data, setData] = useState(
        Array.from({ length: 100 }).fill({
            transactionId: "123456789123456789123456789123456789",
            date: "2023-01-18T20:58:41.000000Z",
            depositAmount: "100",
            bonus: "10",
            actualAmount: "110",
            status: "success",
        })
    );
    useEffect(() => {
        if (currentRange.endDate) setOpen(false);
    }, [currentRange]);
    function handleSearch(ranges) {
        if (!ranges.startDate || !ranges.endDate) return;
        const daysInterval = eachDayOfInterval({
            start: ranges.startDate,
            end: ranges.endDate,
        }).map((el) => new Date(el).setHours(0, 0, 0, 0));
        const filtered = data.filter((el, i) =>
            daysInterval.includes(new Date(el.date).setHours(0, 0, 0, 0))
        );
        console.log(
            "filtered: ",
            filtered,
            daysInterval,
            new Date(data[0].date).setHours(0, 0, 0, 0)
        );
        // console.log("daysInterval: ", daysInterval, rows);
        setData(filtered);
    }
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
                <Flex alignItems="stretch" gap="20px" margin="20px 0" direction={isMobile ? 'column': 'row'} width={isMobile && '100%'} >
                    <DateInput
                        isMobile={isMobile}
                        onClick={() => setOpen(!open)}
                    >
                        <img src={datepickericon} alt="" />
                        <Text
                            type={"p"}
                            text={
                                currentRange
                                    ? `${format(
                                          currentRange.startDate,
                                          "dd-MM-yyyy"
                                      )} - 
                                      ${format(
                                          currentRange.endDate,
                                          "dd-MM-yyyy"
                                      )}`
                                    : "Start - End Date"
                            }
                            fontSize={"0.8rem"}
                        />
                    </DateInput>
                    <div style={{ position: "absolute", top: "140px" }}>
                        <DateRangePicker
                            toggle={setOpen}
                            open={open}
                            ref={pickerRef}
                            setCurrentRange={setCurrentRange}
                        />
                    </div>
                    <BcButton
                        text="Search"
                        width={"100%"}
                        height="100%"
                        padding="10px 20px"
                        background="#3586FF"
                        fontSize="0.8rem"
                        borderRadius="10px"
                        onSubmit={() => handleSearch(currentRange)}
                    />
                </Flex>
            </div>
            <Flex alignItems="center" justifyContent="center" margin={isMobile ? '1px 0 ' : "40px 0"}>
                <div style={{ width: isMobile ? "100%" : "1000px" }}>
                    <CustomTable
                        columns={[
                            "transaction ID",
                            "Date",
                            "Deposit Amount",
                            "Bonus",
                            "Actual Amount",
                            "Status",
                        ]}
                        rows={data}
                    />
                </div>
            </Flex>
        </DepositWrapper>
    );
};
const GameHistory = ({ isMobile }) => {
    const [open, setOpen] = useState(false);
    const [currentRange, setCurrentRange] = useState("");
    const pickerRef = useRef(null);
    useOnClickOutside(pickerRef, () => setOpen(false));
    const [data, setData] = useState(
        Array.from({ length: 100 }).fill({
            transactionId: "123456789123456789123456789123456789",
            date: "2023-01-18T20:58:41.000000Z",
            depositAmount: "100",
            bonus: "10",
            actualAmount: "110",
            status: "success",
        })
    );
    useEffect(() => {
        if (currentRange.endDate) setOpen(false);
    }, [currentRange]);
    function handleSearch(ranges) {
        if (!ranges.startDate || !ranges.endDate) return;
        const daysInterval = eachDayOfInterval({
            start: ranges.startDate,
            end: ranges.endDate,
        }).map((el) => new Date(el).setHours(0, 0, 0, 0));
        const filtered = data.filter((el, i) =>
            daysInterval.includes(new Date(el.date).setHours(0, 0, 0, 0))
        );
        console.log(
            "filtered: ",
            filtered,
            daysInterval,
            new Date(data[0].date).setHours(0, 0, 0, 0)
        );
        // console.log("daysInterval: ", daysInterval, rows);
        setData(filtered);
    }
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
                <Flex alignItems="stretch" gap="20px" margin="20px 0" direction={isMobile ? 'column': 'row'} width={isMobile && '100%'} >
                    <DateInput
                        isMobile={isMobile}
                        onClick={() => setOpen(!open)}
                    >
                        <img src={datepickericon} alt="" />
                        <Text
                            type={"p"}
                            text={
                                currentRange
                                    ? `${format(
                                          currentRange.startDate,
                                          "dd-MM-yyyy"
                                      )} - 
                                      ${format(
                                          currentRange.endDate,
                                          "dd-MM-yyyy"
                                      )}`
                                    : "Start - End Date"
                            }
                            fontSize={"0.8rem"}
                        />
                    </DateInput>
                    <div style={{ position: "absolute", top: "140px" }}>
                        <DateRangePicker
                            toggle={setOpen}
                            open={open}
                            ref={pickerRef}
                            setCurrentRange={setCurrentRange}
                        />
                    </div>
                    <BcButton
                        text="Search"
                        width={"100%"}
                        height="100%"
                        padding="10px 20px"
                        background="#3586FF"
                        fontSize="0.8rem"
                        borderRadius="10px"
                        onSubmit={() => handleSearch(currentRange)}
                    />
                </Flex>
            </div>
            <Flex alignItems="center" justifyContent="center" margin={isMobile ? '1px 0 ' : "40px 0"}>
                <div style={{ width: isMobile ? "100%" : "1000px" }}>
                    <CustomTable
                        columns={[
                            "transaction ID",
                            "Date",
                            "Deposit Amount",
                            "Bonus",
                            "Actual Amount",
                            "Status",
                        ]}
                        rows={data}
                    />
                </div>
            </Flex>
        </DepositWrapper>
    );
};
// const Withdraw = ({ isMobile }) => {
//     return <div>withdraw herere@!wfgijhsdfgkljabsdflkjhasdf</div>;
// };
// const GameHistory = ({ isMobile }) => {
//     return <div>game history herere@!wfgijhsdfgkljabsdflkjhasdf</div>;
// };

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
                                        width={isMobile ? "100%" : "1000px"}
                                        borderRadius="10px"
                                        background="#1F224A"
                                        padding={isMobile && '30px 0px'}
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

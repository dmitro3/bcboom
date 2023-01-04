<<<<<<< HEAD
import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import referral from "../../../../public/images/user/referral.svg";
import stats from "../../../../public/images/user/stats.svg";
import invite from "../../../../public/images/user/invite.svg";
import invitebg from "../../../../public/images/user/inviteBg.png";
import monthlyBg from "../../../../public/images/user/monthlyBg.png";
import dollarValue from "../../../../public/images/user/dollarValue.png";
import bank from "../../../../public/images/user/bank.png";
import idea from "../../../../public/images/user/idea.png";
import discount from "../../../../public/images/user/discount.png";
import refnetwork from "../../../../public/images/user/refnetwork.svg";
import network from "../../../../public/images/user/network.svg";
import incomecalculatorbg from "../../../../public/images/user/incomecalculatorbg.svg";
import whowonbg from "../../../../public/images/user/whowonbg.svg";
import leaderboardbg from "../../../../public/images/user/leaderboardbg.svg";
import user1 from "../../../../public/images/user/user1.png";
import user2 from "../../../../public/images/user/user2.png";
import user3 from "../../../../public/images/user/user3.png";
import form from "../../../../public/images/user/form.svg";
import target from "../../../../public/images/svg/target.svg";
import faq from "../../../../public/images/svg/faq.svg";
import { styled as MuiStyle } from "@mui/material/styles";
import { Flex } from "@/Components/UtilComponents/Flex";
import Text from "@/Components/Text/Text";
import CopyableLink from "@/Components/UtilComponents/CopyableLink";
import { Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { currencyFormatter } from "@/utils/util";
const PersonalCenterPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
}));

const ReferralWrapper = styled("div")(() => ({}));

const TabComponent = styled("div")(({}) => ({}));
const TabWrapper = styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "70px",
=======
import { SelectWithDropdown } from "@/Components/Dropdown/Select";
import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { NewCustomTabs } from "@/Components/Tabs/Tab";
import Text from "@/Components/Text/Text";
import CopyableLink from "@/Components/UtilComponents/CopyableLink";
import { Flex } from "@/Components/UtilComponents/Flex";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { currencyFormatter } from "@/utils/util";
import { Head } from "@inertiajs/inertia-react";
import { Tooltip } from "@mui/material";
import { styled as MuiStyle } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { useState } from "react";
import faq from "../../../../public/images/svg/faq.svg";
import target from "../../../../public/images/svg/target.svg";
import bank from "../../../../public/images/user/bank.png";
import discount from "../../../../public/images/user/discount.png";
import dollarValue from "../../../../public/images/user/dollarValue.png";
import form from "../../../../public/images/user/form.svg";
import idea from "../../../../public/images/user/idea.png";
import incomecalculatorbg from "../../../../public/images/user/incomecalculatorbg.svg";
import invite from "../../../../public/images/user/invite.svg";
import invitebg from "../../../../public/images/user/inviteBg.png";
import leaderboardbg from "../../../../public/images/user/leaderboardbg.svg";
import monthlyBg from "../../../../public/images/user/monthlyBg.png";
import network from "../../../../public/images/user/network.svg";
import profitbox from "../../../../public/images/user/profitbox.png";
import profitTodaybg from "../../../../public/images/user/profittoday.svg";
import referral from "../../../../public/images/user/referral.svg";
import refnetwork from "../../../../public/images/user/refnetwork.svg";
import statsbg from "../../../../public/images/user/refstatbg.png";
import stats from "../../../../public/images/user/stats.svg";
import user1 from "../../../../public/images/user/user1.png";
import user2 from "../../../../public/images/user/user2.png";
import user3 from "../../../../public/images/user/user3.png";
import whowonbg from "../../../../public/images/user/whowonbg.svg";

import BcButton from "@/Components/Button/Button";
import { Cell, Label, Pie, PieChart } from "recharts";
const ReferralPageWrapper = styled("div")(({ isMobile }) => ({
    margin: "0 auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
    marginTop: isMobile ? "-10px" : "0",
}));

const ReferralWrapper = styled("div")(({ isMobile }) => ({
    marginTop: isMobile && "70px",
    position: "relative",
    zIndex: 200,
    padding: 0,
}));

const TabComponent = styled("div")(({}) => ({
    position: "relative",
    zIndex: 200,
    padding: 0,
}));
const TabWrapper = styled("div")(({ isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: isMobile ? "20px" : "70px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    gap: "20px",
}));

const InvitationCard = styled("div")(({ isMobile }) => ({
    background: `url(${invitebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "10px",
<<<<<<< HEAD
    width: isMobile ? '100%' : "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
=======
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    // textAlign: "center",
}));

const MonthlyRevenue = styled("div")(({ isMobile }) => ({
    background: `url(${monthlyBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // padding: "20px",
    borderRadius: "10px",
<<<<<<< HEAD
    width: isMobile ? '100%' : "65%",
    // textAlign: "center",
}));

const MonthlyHeader = styled("div")(() => ({
    background: "#1A2150",
    width: "100%",
    padding: "10px 20px",
    borderRadius: "10px 10px 0 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const MonthlyBody = styled("div")(() => ({
    background: "linear-gradient(123.42deg, #172273 1.75%, #2D315A 90.41%)",
    borderRadius: "10px",
    width: "90%",
    padding: "45px",
    display: "flex",
    // justifyContent: "space-between",
    gap: "15%",
=======
    width: isMobile ? "100%" : "65%",
    // textAlign: "center",
}));

const MonthlyHeader = styled("div")(({ isMobile, justify, gap }) => ({
    background: "#1A2150",
    width: "100%",
    padding: isMobile ? "10px 2px" : "10px 20px",
    borderRadius: "10px 10px 0 0",
    display: "flex",
    justifyContent: justify || "space-between",
    gap: gap,
    alignItems: "center",
    textAlign: "center",
}));

const MonthlyBody = styled("div")(({ isMobile }) => ({
    background: "linear-gradient(123.42deg, #172273 1.75%, #2D315A 90.41%)",
    borderRadius: "10px",
    width: "90%",
    padding: isMobile ? "15px" : "45px",
    display: "flex",
    // justifyContent: "space-between",
    gap: isMobile ? "5%" : "15%",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    alignItems: "center",
}));

const RefNetwork = styled("div")(({ isMobile }) => ({
    width: isMobile ? "100%" : "50%",
    background: `url(${refnetwork})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    borderRadius: "10px",
}));
const IncomeCalculator = styled("div")(({ isMobile, rangeVal }) => ({
    width: isMobile ? "100%" : "50%",
<<<<<<< HEAD
=======
    paddingBottom: isMobile && "40px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    background: `url(${incomecalculatorbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",

    borderRadius: "10px",

    "input[type='range']": {
        marginTop: "40px",
        width: "75%",
        height: "12px",
        WebkitAppearance: "none",
        background: `#7E8FCA`,
        borderRadius: "10px",
        position: "relative",
        // overflow: "hidden",
    },
    "input[type='range']::-webkit-slider-runnable-track": {
        height: "20px",
        WebkitAppearance: "none",
        color: "#13bba4",
        marginTop: "-1px",
    },
    "input[type='range']::-webkit-slider-thumb": {
        width: "20px",
        WebkitAppearance: "none",
        height: "20px",
        borderRadius: "50%",
        cursor: "ew-resize",
        background: "#64A2FF",
        // boxShadow: "-280px 0 0 280px #43e5f7",
        position: "absolute",
        top: "-4px",
        left: `${rangeVal}%`,
    },
}));

const BcTooltip = MuiStyle(({ className, ...props }) => (
    <Tooltip
        {...props}
        componentsProps={{ tooltip: { className: className } }}
    />
))(`
    color: white;
    background-color: #181E46;
    font-size: 11px;
    font-family: Montserrat;
    padding: 15px;
    line-height: 2;
`);

const useStyles = makeStyles((theme) => ({
    arrow: {
        "&:before": {
            border: "1px solid white",
        },
        color: "#1D2036",
    },
    tooltip: {
        backgroundColor: "#1D2036",
        border: "1px solid #E6E8ED",
        color: "white",
    },
}));

const TextWithImage = styled("div")(({ width }) => ({
    background: "linear-gradient(119.77deg, #262C55 2.99%, #454BCC 100%)",
    borderRadius: "10px",
    padding: "20px",
    width: width,
}));

<<<<<<< HEAD
const HowReferralWorks = styled("div")(() => ({
    background: "linear-gradient(119.77deg, #262C55 2.99%, #454BCC 100%)",
    borderRadius: "10px",
    padding: "20px",
}));
const HowReferralWorksContent = styled("div")(() => ({
=======
const HowReferralWorks = styled("div")(({ isMobile }) => ({
    background: "linear-gradient(119.77deg, #262C55 2.99%, #454BCC 100%)",
    borderRadius: "10px",
    padding: isMobile ? "20px 0px" : "20px",
}));
const HowReferralWorksContent = styled("div")(({ isMobile }) => ({
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    background: "#140E37",
    borderRadius: "10px",
    margin: "0 auto",
    width: "90%",
<<<<<<< HEAD
    padding: "20px",
=======
    padding: isMobile ? "10px" : "20px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
}));

const LeaderBoard = styled("div")(({ isMobile }) => ({
    background: `url(${leaderboardbg})`,
    width: isMobile ? "100%" : "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0",
    borderRadius: "10px",
}));

<<<<<<< HEAD
const LeaderBoardUsers = styled("div")(() => ({
=======
const LeaderBoardUsers = styled("div")(({ isMobile }) => ({
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
<<<<<<< HEAD
    gap: "60px",
=======
    gap: !isMobile && "60px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
}));
const WhoWon = styled("div")(({ isMobile }) => ({
    background: `url(${whowonbg})`,
    width: isMobile ? "100%" : "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 0",
    borderRadius: "10px",
}));

<<<<<<< HEAD
=======
const ProfitToday = styled("div")(({ isMobile }) => ({
    background: `url(${profitTodaybg})`,
    width: isMobile ? "100%" : "35%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));

const ProfitTodayBox = styled("div")(({ isMobile }) => ({
    background: "#2E3159",
    width: isMobile ? "100%" : "35%",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));

const StatsWrapper = styled("div")(({}) => ({
    background: `url(${statsbg})`,
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));

const TableWrapper = styled("div")(({}) => ({
    margin: "50px auto",
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
}));
const HeaderStats = ({ isMobile, stats, justify, gap, wrap }) => (
    <MonthlyHeader isMobile={isMobile} justify={justify} gap={gap}>
        {stats.map((item, index) => (
            <div key={index}>
                <Text
                    type="p"
                    text={item.text}
                    color="#3586FF"
                    fontWeight="bold"
                    fontSize={isMobile ? "10px" : "16px"}
                    whiteSpace={wrap || "nowrap"}
                />
                <Text
                    type="p"
                    text={item.count}
                    fontWeight="bold"
                    fontSize={isMobile ? "10px" : "16px"}
                    color="#7B88C1"
                    textAlign="center"
                />
            </div>
        ))}
    </MonthlyHeader>
);

>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
const Invite = ({ isMobile }) => {
    const classes = useStyles();
    const [rangeVal, setRangeVal] = useState(0);
    console.log("isMobile: ", isMobile);
    return (
<<<<<<< HEAD
        <TabWrapper>
            <Flex alignItems="stretch" gap="20px" direction={`${isMobile ? 'column': 'row'}`}>
                <InvitationCard isMobile={isMobile}>
                    <Text
                        type="p"
                        text="Invite a partner"
                        textAlign="center"
                        fontSize="18px"
                        fontWeight="bold"
                    />
                    <div>
                        <div style={{ margin: "10px 0" }}>
                            <Text
                                type="p"
                                text="Invite URL"
                                fontWeight="bold"
                                fontSize="12px"
                                padding="10px 0"
                            />
                            <CopyableLink
                                addon={true}
                                text="https://betdino.io?referralcode=62f14645860e2bee6be9f840"
                                size="6px"
                                background="#1A2150"
                            />
                        </div>
                        <div>
                            <Text
                                type="p"
                                text="Invite URL"
                                fontWeight="bold"
                                fontSize="12px"
                                padding="10px 0"
                            />
                            <CopyableLink
                                addon={true}
                                text="https://betdino.io?referralcode=62f14645860e2bee6be9f840"
                                size="6px"
                                background="#1A2150"
                            />
                        </div>
                    </div>
                </InvitationCard>

                <MonthlyRevenue isMobile={isMobile}>
                    <MonthlyHeader>
                        {[
                            { text: "Guest Users", count: 0 },
                            { text: "Deposited Users", count: 0 },
                            { text: "Bonus Today", count: "R$0" },
                            { text: "Yesterday Bonus", count: "R$0" },
                        ].map((item, index) => (
                            <div>
                                <Text
                                    type="p"
                                    text={item.text}
                                    color="#3586FF"
                                    fontWeight="bold"
                                />
                                <Text
                                    type="p"
                                    text={item.count}
                                    fontWeight="bold"
                                    fontSize="14px"
                                    color="#7B88C1"
                                    textAlign="center"
                                />
                            </div>
                        ))}
                    </MonthlyHeader>
=======
        <TabWrapper isMobile={isMobile}>
            <Flex
                alignItems="stretch"
                gap="20px"
                direction={`${isMobile ? "column" : "row"}`}
            >
                <div style={{ width: isMobile ? "100%" : "35%" }}>
                    {isMobile && (
                        <HeaderStats
                            isMobile={isMobile}
                            stats={[
                                { text: "Guest Users", count: 0 },
                                { text: "Deposited Users", count: 0 },
                                { text: "Bonus Today", count: "R$0" },
                                { text: "Yesterday Bonus", count: "R$0" },
                            ]}
                        />
                    )}
                    <InvitationCard isMobile={isMobile}>
                        <Text
                            type="p"
                            text="Invite a partner"
                            textAlign="center"
                            fontSize="18px"
                            fontWeight="bold"
                        />
                        <div>
                            <div style={{ margin: "10px 0" }}>
                                <Text
                                    type="p"
                                    text="Invite URL"
                                    fontWeight="bold"
                                    fontSize="12px"
                                    padding="10px 0"
                                />
                                <CopyableLink
                                    addon={true}
                                    text="https://betdino.io?referralcode=62f14645860e2bee6be9f840"
                                    size="6px"
                                    background="#1A2150"
                                />
                            </div>
                            <div>
                                <Text
                                    type="p"
                                    text="Invite URL"
                                    fontWeight="bold"
                                    fontSize="12px"
                                    padding="10px 0"
                                />
                                <CopyableLink
                                    addon={true}
                                    text="https://betdino.io?referralcode=62f14645860e2bee6be9f840"
                                    size="6px"
                                    background="#1A2150"
                                />
                            </div>
                        </div>
                    </InvitationCard>
                </div>

                <MonthlyRevenue isMobile={isMobile}>
                    {!isMobile && (
                        <HeaderStats
                            stats={[
                                { text: "Guest Users", count: 0 },
                                { text: "Deposited Users", count: 0 },
                                { text: "Bonus Today", count: "R$0" },
                                { text: "Yesterday Bonus", count: "R$0" },
                            ]}
                        />
                    )}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
<<<<<<< HEAD
                        padding="20px"
                    >
                        <MonthlyBody>
                            <div>
                                <div style={{ width: "90%" }}>
=======
                        padding={isMobile ? "10px" : "20px"}
                    >
                        <MonthlyBody isMobile={isMobile}>
                            <div>
                                <div
                                    style={{ width: isMobile ? "100%" : "90%" }}
                                >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    <p
                                        style={{
                                            color: "#64A2FF",
                                            fontStyle: "italic",
                                            fontWeight: "800",
                                            fontSize: "27px",
                                            lineHeight: "27px",
                                            paddingBottom: "15px",
<<<<<<< HEAD
                                            display: "inline-block",
=======
                                            // display: isMobile ? 'flex' : 'inline-block',
                                            display: "inline-block",
                                            // width: isMobile && 'min-content',
                                            // gap: '2px'
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                        }}
                                    >
                                        Monthly Revenue Goals
                                        <span
                                            style={{ display: "inline-block" }}
                                        >
                                            <BcTooltip
                                                title="The estimated value is derived from the average of all user earnings guests within the platform. Your winnings consist of 2 parts, the bonus for inviting Users deposited, the commission for user betting discounts
subordinates, where the bonus amount lower level user betting depends on the value of your bets lower level user, the more your accumulated stake value, greater will be your earnings."
                                                placement="bottom-start"
                                                arrow
                                                classes={{
                                                    arrow: classes.arrow,
                                                    tooltip: classes.tooltip,
                                                }}
                                            >
                                                <img
                                                    src={faq}
                                                    alt="tooltip"
                                                    style={{
                                                        marginLeft: "10px",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </BcTooltip>
                                        </span>
                                    </p>
                                </div>
                                <Text
                                    type="p"
                                    text="5 more people to invite before the goal is reached"
                                    fontWeight="400"
                                    fontSize="12px"
                                    // lineHeight="27px"
<<<<<<< HEAD
                                    width="50%"
=======
                                    width={!isMobile && "50%"}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                />
                            </div>
                            <div>
                                <img
                                    src={target}
                                    alt=""
                                    style={{ height: "130px" }}
                                />
                            </div>
                        </MonthlyBody>
                    </Flex>
                </MonthlyRevenue>
            </Flex>
            <Flex
                alignItems="stretch"
                gap="20px"
                width="100%"
                justifyContent="space-between"
<<<<<<< HEAD
            >
                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
=======
                direction={isMobile ? "column" : "row"}
            >
                <TextWithImage width={isMobile ? "100%" : "50%"}>
                    <Flex
                        alignItems="center"
                        padding={!isMobile && "0 30px"}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        justifyContent="space-between"
                    >
                        <div>
                            <Text
                                type="p"
                                text="Invitation Bonus"
                                color="#64A2FF"
                                fontSize="24px"
                                fontWeight="bold"
                            />
                            <Text
                                type="p"
                                text="41041535"
                                fontWeight="bold"
                                fontSize="24px"
                            />
                            <Text
                                type="p"
                                text="8207315 Received"
                                fontSize="18px"
                            />
                        </div>
                        <div>
                            <img src={idea} alt="" />
                        </div>
                    </Flex>
                </TextWithImage>

<<<<<<< HEAD
                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
=======
                <TextWithImage width={isMobile ? "100%" : "50%"}>
                    <Flex
                        alignItems="center"
                        padding={!isMobile && "0 30px"}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        justifyContent="space-between"
                    >
                        <div>
                            <Text
                                type="p"
                                text="Betting Commission"
                                color="#64A2FF"
                                fontSize="24px"
                                fontWeight="bold"
                            />
                            <Text
                                type="p"
                                text="41041535"
                                fontWeight="bold"
                                fontSize="24px"
                            />
                            <Text
                                type="p"
                                text="8207315 Received"
                                fontSize="18px"
                            />
                        </div>
                        <div>
                            <img src={discount} alt="" />
                        </div>
                    </Flex>
                </TextWithImage>
            </Flex>
            <div style={{ width: "100%", textAlign: "center" }}>
                <Text
                    type="p"
                    text="HOW DOES THE INVITATION BONUS WORK?"
                    color="#64A2FF"
                    fontSize="24px"
                    fontWeight="bold"
                    padding="5px 0"
                />
                <Text
                    type="p"
                    text="Each deposit user can receive at least R$8 for each invite. The more people you invite, the greater the invite bonus for the corresponding level. For specific rules, see the table below"
                    color="#9AA4CF"
                    fontSize="16px"
<<<<<<< HEAD
                    padding="5px 20%"
                />
            </div>
            <HowReferralWorks>
                <HowReferralWorksContent>
                    <Flex direction="column" gap="20px">
                        <Flex justifyContent="space-betwee" gap="20px">
=======
                    padding={!isMobile && "5px 20%"}
                />
            </div>
            <HowReferralWorks isMobile={isMobile}>
                <HowReferralWorksContent isMobile={isMobile}>
                    <Flex direction={isMobile ? "row" : "column"} gap="20px">
                        <Flex
                            justifyContent="space-betwee"
                            gap="20px"
                            direction={isMobile ? "column" : "row"}
                            width={isMobile && "100%"}
                        >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            {[
                                "Cumulative Deposit Users",
                                "0-999 People",
                                "1000-2999 People",
                                "3000-4999 People",
                                "More than 5000 People",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: "#2A3684",
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
<<<<<<< HEAD
                                        width: "20%",
                                        height: "50px",
                                        borderRadius: "10px",
                                        color: index === 0 ? "#64A2FF" : "#fff",
=======
                                        width: isMobile ? "100%" : "20%",
                                        height: "50px",
                                        borderRadius: "10px",
                                        color: index === 0 ? "#64A2FF" : "#fff",
                                        fontSize: isMobile ? "12px" : "16px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                        fontWeight: "bold",
                                    }}
                                >
                                    <Text
                                        type="p"
<<<<<<< HEAD
                                        fontSize="14px"
=======
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                        text={item.slice(
                                            0,
                                            item.lastIndexOf(" ")
                                        )}
                                    />
                                    <Text
                                        type="p"
<<<<<<< HEAD
                                        fontSize="14px"
=======
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                        text={item.slice(
                                            item.lastIndexOf(" "),
                                            item.length
                                        )}
                                    />
                                </div>
                            ))}
                        </Flex>
<<<<<<< HEAD
                        <Flex justifyContent="space-betwee" gap="20px">
=======
                        <Flex
                            justifyContent="space-betwee"
                            gap="20px"
                            direction={isMobile ? "column" : "row"}
                            width={isMobile && "100%"}
                        >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            {[
                                "Bonus ",
                                "R$ 9 Per People",
                                "R$ 10 Per People",
                                "R$ 12 Per People",
                                "R$ 15 Per People",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: "#2A3684",
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
<<<<<<< HEAD
                                        width: "20%",
=======
                                        width: isMobile ? "100%" : "20%",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                        height: "50px",
                                        borderRadius: "10px",
                                        color: index === 0 ? "#64A2FF" : "#fff",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <Text
                                        type="p"
                                        fontSize="14px"
                                        text={item.slice(
                                            0,
                                            item.lastIndexOf(" ")
                                        )}
                                    />
                                    <Text
                                        type="p"
                                        fontSize="14px"
                                        text={item.slice(
                                            item.lastIndexOf(" "),
                                            item.length
                                        )}
                                    />
                                </div>
                            ))}
                        </Flex>
                    </Flex>
                </HowReferralWorksContent>
            </HowReferralWorks>

            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "20px",
                }}
            >
                <Text
                    type="p"
                    text="HOW TO GET COMMISSION ON YOUR BETS"
                    color="#64A2FF"
                    fontSize="24px"
                    fontWeight="bold"
                    padding="5px 0"
                />
                <Text
                    type="p"
                    text="This will be your long-term income and you will receive a different percentage of commission each time a player you invite places a bet."
                    color="#9AA4CF"
                    fontSize="16px"
<<<<<<< HEAD
                    padding="5px 20%"
=======
                    padding={!isMobile && "5px 20%"}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                />
            </div>

            <Flex
                alignItems="stretch"
                gap="20px"
                width="100%"
<<<<<<< HEAD
                justifyContent="space-between"
            >
                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
=======
                direction={isMobile ? "column" : "row"}
                justifyContent="space-between"
            >
                <TextWithImage width={isMobile ? "100%" : "50%"}>
                    <Flex
                        alignItems="center"
                        padding={!isMobile && "0 30px"}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        justifyContent="space-between"
                    >
                        <div style={{ width: "65%" }}>
                            <Text
                                type="p"
                                text="Invite Rules: "
                                color="#64A2FF"
                                fontSize="24px"
                                fontWeight="bold"
                            />
                            <Text
                                type="p"
                                text="41041535"
                                fontWeight="bold"
                                fontSize="24px"
                            />
                            <div>
<<<<<<< HEAD
                                <p>
=======
                                <p style={{ fontWeight: "bold" }}>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    Valid invite level can reach level 3, and
                                    the wager discount reward is
                                    <span style={{ color: "#64A2FF" }}>
                                        {" "}
                                        Level 1- 0.15%; Level 2- 0.07%; Level 3-
                                        0.02%
                                    </span>
                                    . Reward Issuance Time: Real-time settlement
                                    and issuance
                                </p>
                            </div>
                        </div>
<<<<<<< HEAD
                        <div style={{ width: "35%" }}>
=======
                        <div
                            style={{
                                width: "35%",
                                marginLeft: isMobile && "20px",
                            }}
                        >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            <img src={dollarValue} alt="" />
                        </div>
                    </Flex>
                </TextWithImage>

<<<<<<< HEAD
                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
=======
                <TextWithImage width={isMobile ? "100%" : "50%"}>
                    <Flex
                        alignItems="center"
                        padding={!isMobile && "0 30px"}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        justifyContent="space-between"
                    >
                        <div style={{ width: "65%" }}>
                            <Text
                                type="p"
                                text="Example: "
                                color="#64A2FF"
                                fontSize="24px"
                                fontWeight="bold"
                            />
                            <Text
                                type="p"
                                text="41041535"
                                fontWeight="bold"
                                fontSize="24px"
                            />
                            <div
<<<<<<< HEAD
                                style={{ fontWeight: "600", fontSize: "14px" }}
=======
                                style={{
                                    fontWeight: "bold",
                                    fontSize: isMobile ? "12px" : "14px",
                                }}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            >
                                <p>
                                    The invite ratio is A invite B, B invite C,
                                    C invite D, D invite E. When E bets
                                    10.000R$"
                                </p>
<<<<<<< HEAD
                                <p>※ D can get 10000 * 0.15% = 15 R$"</p>
                                <p>※ C can get 10000 * 0.07% = 7 R$"</p>
                                <p>※ B can get 10000 * 0.02% = 2 R$"</p>
                                <p>※ A has no return in three Levels."</p>
                            </div>
                        </div>
                        <div style={{ width: "35%" }}>
=======
                                <p style={{ whiteSpace: "nowrap" }}>
                                    ※ D can get 10000 * 0.15% = 15 R$"
                                </p>
                                <p style={{ whiteSpace: "nowrap" }}>
                                    ※ C can get 10000 * 0.07% = 7 R$"
                                </p>
                                <p style={{ whiteSpace: "nowrap" }}>
                                    ※ B can get 10000 * 0.02% = 2 R$"
                                </p>
                                <p style={{ whiteSpace: "nowrap" }}>
                                    ※ A has no return in three Levels."
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "35%",
                                marginLeft: isMobile && "20px",
                            }}
                        >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            <img src={bank} alt="" />
                        </div>
                    </Flex>
                </TextWithImage>
            </Flex>

<<<<<<< HEAD
            <Flex alignItems="stretch" gap="20px">
=======
            <Flex
                alignItems="stretch"
                gap="20px"
                direction={isMobile ? "column" : "row"}
            >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                <RefNetwork isMobile={isMobile}>
                    <img src={network} alt="" />
                </RefNetwork>
                <IncomeCalculator isMobile={isMobile} rangeVal={rangeVal}>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        padding="20px 0"
                    >
                        <Text
                            type="p"
                            text="Income Calculator"
                            fontSize="20px"
                            fontWeight="bold"
                        />
                        <BcTooltip
                            title="The estimated value is derived from the average of all user earnings guests within the platform. Your winnings consist of 2 parts, the bonus for inviting Users deposited, the commission for user betting discounts subordinates, where the bonus amount lower level user betting depends on the value of your bets lower level user, the more Who your accumulated stake value, greater will be your earnings."
                            arrow
                            classes={{
                                arrow: classes.arrow,
                                tooltip: classes.tooltip,
                            }}
                        >
                            <img
                                src={faq}
                                alt="tooltip"
                                style={{
                                    marginLeft: "10px",
                                    cursor: "pointer",
                                }}
                            />
                        </BcTooltip>
                    </Flex>

                    <Text
                        type="p"
                        text={`R$ ${currencyFormatter
                            .format(rangeVal * 5.544)
                            .replace("$", "")}`}
                        color="#64A2FF"
                        fontSize="25px"
                        fontWeight="bold"
                        padding="15px 0"
                    />

                    <Text
                        type="p"
                        text={`Invite ${rangeVal} Users assets Expected annual income to be earned`}
<<<<<<< HEAD
                        color="#64A2FF"
=======
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        fontSize="15px"
                        fontWeight="bold"
                        padding="15px 0"
                        textAlign="center"
                        width="50%"
                        margin="0 auto"
                    />
                    <div>
                        <input
                            max={100}
                            min={0}
                            value={rangeVal}
                            type="range"
                            onChange={(e) => setRangeVal(e.target.value)}
                        />
                    </div>
                </IncomeCalculator>
            </Flex>

<<<<<<< HEAD
            <Flex alignItems="stretch" gap="20px">
=======
            <Flex
                alignItems="stretch"
                gap="20px"
                direction={isMobile ? "column" : "row"}
            >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                <LeaderBoard isMobile={isMobile}>
                    <Text
                        type="p"
                        text="Leaderboard"
                        fontSize="20px"
                        fontWeight="bold"
                        color="#64A2FF"
                        paddingBottom="20px"
                    />
<<<<<<< HEAD
                    <LeaderBoardUsers>
=======
                    <LeaderBoardUsers isMobile={isMobile}>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        {[
                            {
                                position: 2,
                                icon: user2,
                                name: "User820769654",
                                amount: "R$ 8413570",
                                border: "#3179E5",
                            },
                            {
                                position: 1,
                                icon: user1,
                                name: "User720769654",
                                amount: "R$ 17201880",
                                border: "#00E0FF",
                            },
                            {
                                position: 3,
                                icon: user3,
                                name: "User820769654",
                                amount: "R$ 8413570",
                                border: "#E531DE",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    textAlign: "center",
                                    marginTop: index === 1 ? "-20px" : "80px",
                                }}
                            >
                                <Text
                                    type="p"
                                    text={"TOP" + item.position}
                                    color="#31C5E5"
                                    fontSize="16px"
                                    fontWeight="bold"
                                />
                                <img
                                    src={item.icon}
                                    alt=""
                                    style={{
                                        margin: "10px auto",
                                        border: `1px solid ${item.border}`,
                                        padding: "5px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <Text
                                    type="p"
                                    text={item.name}
                                    fontSize="12px"
                                    fontWeight="bold"
                                    paddingTop="10px"
                                />
                                <Text
                                    type="p"
                                    text={item.amount}
                                    fontSize="10px"
                                    fontWeight="bold"
                                />
                            </div>
                        ))}
                    </LeaderBoardUsers>
                </LeaderBoard>
<<<<<<< HEAD
                <WhoWon>
=======
                <WhoWon isMobile={isMobile}>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    <Text
                        type="p"
                        text="Who won the prize"
                        fontSize="20px"
                        fontWeight="bold"
                        color="#64A2FF"
                        paddingBottom="20px"
                        textTransform="capitalize"
                    />
                    {[
                        { name: "User820769654", amount: "R$ 11" },
                        { name: "User820769654", amount: "R$ 11" },
                        { name: "User820769654", amount: "R$ 11" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "#140E37",
<<<<<<< HEAD
                                width: "80%",
                                margin: "10px 0",
                                borderRadius: "10px",
=======
                                width: isMobile ? "95%" : "80%",
                                margin: "10px 0",
                                borderRadius: "10px",
                                fontSize: isMobile ? "12px" : "15px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            }}
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                                padding="20px"
                            >
                                <Text
                                    type="p"
                                    text={item.name}
                                    color="#9AA4CF"
<<<<<<< HEAD
                                    fontSize="15px"
=======
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontWeight="medium"
                                />
                                <Text
                                    type="p"
                                    text="Receive and Invite Bonus"
                                    color="#9AA4CF"
<<<<<<< HEAD
                                    fontSize="15px"
=======
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontWeight="medium"
                                />
                                <Text
                                    type="p"
                                    text={item.amount}
                                    color="#64A2FF"
<<<<<<< HEAD
                                    fontSize="15px"
=======
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontWeight="medium"
                                />
                            </Flex>
                        </div>
                    ))}
                </WhoWon>
            </Flex>
        </TabWrapper>
    );
};
<<<<<<< HEAD
const Form = () => {
    return <TabWrapper>this is referral form</TabWrapper>;
};
const Stats = () => {
    return <TabWrapper>this is referral stats</TabWrapper>;
=======
const Form = ({ isMobile }) => {
    const profits = [
        {
            name: "Group A",
            value: 50,
        },
        {
            name: "Group B",
            value: 50,
        },
    ];
    const CustomLabel = ({ viewBox, labelText1, labelText2 }) => {
        const { cx, cy } = viewBox;
        return (
            <g fontSize="60px!important">
                <text
                    x={cx}
                    y={cy}
                    className="recharts-text recharts-label"
                    textAnchor="middle"
                    dominantBaseline="central"
                    alignmentBaseline="middle"
                    fontSize="15"
                >
                    {labelText1}
                </text>
                {/* <text
                    x={cx}
                    y={cy}
                    className="recharts-text recharts-label"
                    textAnchor="middle"
                    dominantBaseline="central"
                    alignmentBaseline="middle"
                    fontSize="15"
                >
                    {labelText2}
                </text> */}
            </g>
        );
    };

    const COLORS = ["#7BFFEF", "#FF7285"];

    return (
        <TabWrapper isMobile={isMobile}>
            <Flex
                alignItems="stretch"
                gap="20px"
                direction={`${isMobile ? "column" : "row"}`}
            >
                <ProfitToday isMobile={isMobile}>
                    <Text
                        type="p"
                        text="PROFIT TODAY"
                        fontWeight="bold"
                        fontSize="18px"
                    />
                    <div
                        style={{
                            height: "fit-content",
                            // transform: "rotate(90deg)",
                        }}
                    >
                        {/* <ResponsiveContainer> */}
                        <PieChart width={730} height={250}>
                            <Pie
                                data={profits}
                                dataKey="value"
                                cx={370}
                                cy={120}
                                innerRadius={80}
                                outerRadius={110}
                            >
                                {profits.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                                <Label
                                    content={
                                        <CustomLabel
                                            labelText1="Invitation Bonus"
                                            labelText2="Betting commission"
                                        />
                                    }
                                    position="center"
                                />
                            </Pie>
                        </PieChart>
                        {/* </ResponsiveContainer> */}
                    </div>

                    <Text
                        type="p"
                        text="R$ 0"
                        color="#5C9DFF"
                        fontSize="20px"
                        fontWeight="bold"
                    />
                    <Text type="p" text="Profit Today" />
                </ProfitToday>
                <MonthlyRevenue isMobile={isMobile}>
                    {isMobile && (
                        <HeaderStats
                            stats={[
                                { text: "Betting Commision", count: "R$ 0" },
                                { text: "Invitation Bonus", count: "R$ 0" },
                            ]}
                            justify="center"
                            gap={isMobile ? "20px" : "0"}
                        />
                    )}
                    <Flex
                        justifyContent="center"
                        direction="column"
                        alignItems="center"
                        height="100%"
                        padding={isMobile ? "0 20px 30px" : "0 60px 60px"}
                    >
                        <Text
                            type="p"
                            text="Your profit will consist of three components namely [Invitation Bonus][Betting Commission]"
                            fontSize="17px"
                            padding="20px 0"
                        />
                        <ul
                            style={{
                                listStyle: "disc",
                                marginLeft: isMobile ? "10px" : "50px",
                            }}
                        >
                            <li style={{ paddingBottom: "20px" }}>
                                Betting Commission: This will be your main
                                income and you will receive a different
                                percentage of each bet you invite players to
                                make as a commission."
                            </li>
                            <li>
                                Invite Bonus: The user you invite to deposit for
                                the first time will receive a cash bonus of R$8
                            </li>
                        </ul>
                    </Flex>
                </MonthlyRevenue>
            </Flex>

            <Flex
                alignItems="stretch"
                gap="20px"
                direction={`${isMobile ? "column" : "row"}`}
            >
                <ProfitTodayBox isMobile={isMobile}>
                    <Text
                        type="p"
                        text="PROFIT TODAY"
                        fontWeight="bold"
                        fontSize="18px"
                    />
                    <div>
                        <img src={profitbox} alt="" />
                    </div>
                    <Text
                        type="p"
                        text="R$ 0"
                        color="#5C9DFF"
                        fontSize="20px"
                        fontWeight="bold"
                    />
                    <Text type="p" text="Profit Today" />
                </ProfitTodayBox>

                <MonthlyRevenue isMobile={isMobile}>
                    {isMobile && (
                        <HeaderStats
                            stats={[
                                { text: "Betting Commision", count: "R$ 0" },
                                { text: "Invitation Bonus", count: "R$ 0" },
                                { text: "Achievement Bonus", count: "R$ 0" },
                                { text: "Deposited Users", count: "R$ 0" },
                            ]}
                            isMobile={isMobile}
                            wrap={isMobile ? "wrap" : "nowrap"}
                            // justify="center"
                        />
                    )}
                    <Flex
                        justifyContent="center"
                        direction="column"
                        alignItems="center"
                        height="100%"
                        padding={isMobile ? "0 20px 30px" : "0 60px 60px"}
                    >
                        <Text
                            type="p"
                            text="You receive a commission for every bet you invite users to make, win or lose.
So all you have to do is improve your gaming skills, think about how to win the game and share it with everyone to help more people win with your method.
We want all players to have fun at Betfiery, whether it's the fun of winning bets or the game itself!"
                            fontSize="17px"
                            padding="20px 0"
                        />
                    </Flex>
                </MonthlyRevenue>
            </Flex>
        </TabWrapper>
    );
};
const Stats = ({ isMobile }) => {
    const [limit, setLimit] = useState("10");
    const [type, setType] = useState("Upgrade reward");
   
    return (
        <TabWrapper isMobile={isMobile}>
            <StatsWrapper isMobile={isMobile}>
                <Flex alignItems="center" gap="20px" direction={isMobile ? 'column-reverse': 'row'}>
                    <Flex gap='20px'>
                        <SelectWithDropdown
                            items={[
                                { value: "10", label: "10" },
                                { value: "20", label: "20" },
                                { value: "30", label: "30" },
                                {
                                    value: "40",
                                    label: "40",
                                },
                            ]}
                            value={limit}
                            setValue={(e) => setLimit(e)}
                            background="transparent"
                            border="1px solid #8A96CA"
                        />
                        <SelectWithDropdown
                            items={[
                                {
                                    value: "Upgrade reward",
                                    label: "Upgrade reward",
                                },
                                {
                                    value: "Betting commision",
                                    label: "Betting commision",
                                },
                                {
                                    value: "Invitation bonus",
                                    label: "Invitation bonus",
                                },
                            ]}
                            value={type}
                            setValue={(e) => setType(e)}
                            background="transparent"
                            border="1px solid #8A96CA"
                        />
                    </Flex>
                    <div
                        style={{
                            border: "1px solid #8a86ca",
                            width: isMobile ? '100%' : "200px",
                            height: "100%",
                            borderRadius: "10px",
                        }}
                    >
                        <input
                            type="date"
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                                borderRadius: "10px",
                                padding: "10px",
                                background: "transparent",
                            }}
                            placeholder="start - end date"
                        />
                    </div>

                   {!isMobile && <BcButton
                        text="Search"
                        background="#3586FF"
                        height="100%"
                        width="100px"
                    />}
                </Flex>
                <TableWrapper>
                    <Text
                        type="p"
                        text="Bonus"
                        fontSize="14px"
                        fontWeight="bold"
                        color="#8A96CA"
                    />
                    <Text
                        type="p"
                        text="User"
                        fontSize="14px"
                        fontWeight="bold"
                        color="#8A96CA"
                    />
                    <Text
                        type="p"
                        text="Time"
                        fontSize="14px"
                        fontWeight="bold"
                        color="#8A96CA"
                    />
                </TableWrapper>
                <Text
                    type="p"
                    text="No data"
                    fontSize="17px"
                    fontWeight="bold"
                    color="#3586FF"
                />
            </StatsWrapper>
        </TabWrapper>
    );
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
};

const ReferralIndex = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Referral" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
<<<<<<< HEAD
                    <PersonalCenterPageWrapper>
=======
                    <ReferralPageWrapper isMobile={isMobile}>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        <ImageGridLayout
                            item={{
                                title: "Referral",
                                icon: referral,
<<<<<<< HEAD
                            }}
                            index={0}
                            page="personal-center"
                        >
                            <ReferralWrapper>
=======
                                margin: "10px",
                            }}
                            index={0}
                            page="referral"
                        >
                            <ReferralWrapper isMobile={isMobile}>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                <TabComponent>
                                    <NewCustomTabs
                                        tabItems={[
                                            {
                                                value: "toInvite",
                                                label: "To Invite",
                                                content: (
                                                    <Invite
                                                        isMobile={isMobile}
                                                    />
                                                ),
                                                icon: invite,
                                            },
                                            {
                                                label: "Forms",
                                                value: "forms",
<<<<<<< HEAD
                                                content: <Form>hi form</Form>,
=======
                                                content: (
                                                    <Form isMobile={isMobile} />
                                                ),
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                                icon: form,
                                            },
                                            {
                                                label: "Statistics",
                                                value: "statistics",
<<<<<<< HEAD
                                                content: <Stats>stats</Stats>,
=======
                                                content: (
                                                    <Stats
                                                        isMobile={isMobile}
                                                    />
                                                ),
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                                icon: stats,
                                            },
                                        ]}
                                        width={isMobile ? "100%" : "500px"}
<<<<<<< HEAD
=======
                                        padding="0"
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    />
                                </TabComponent>
                            </ReferralWrapper>
                        </ImageGridLayout>
<<<<<<< HEAD
                    </PersonalCenterPageWrapper>
=======
                    </ReferralPageWrapper>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default ReferralIndex;

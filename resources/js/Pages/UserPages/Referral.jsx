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
import form from "../../../../public/images/user/form.svg";
import target from "../../../../public/images/svg/target.svg";
import faq from "../../../../public/images/svg/faq.svg";
import { styled as MuiStyle } from "@mui/material/styles";
import { Flex } from "@/Components/UtilComponents/Flex";
import Text from "@/Components/Text/Text";
import CopyableLink from "@/Components/UtilComponents/CopyableLink";
import { Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
    gap: "20px",
}));

const InvitationCard = styled("div")(({ isMobile }) => ({
    background: `url(${invitebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "10px",
    width: "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    // textAlign: "center",
}));

const MonthlyRevenue = styled("div")(({ isMobile }) => ({
    background: `url(${monthlyBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // padding: "20px",
    borderRadius: "10px",
    width: "65%",
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
    alignItems: "center",
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

const HowReferralWorks = styled("div")(() => ({
    background: "linear-gradient(119.77deg, #262C55 2.99%, #454BCC 100%)",
    borderRadius: "10px",
    padding: "20px",
}));
const HowReferralWorksContent = styled("div")(() => ({
    background: "#140E37",
    borderRadius: "10px",
    margin: "0 auto",
    width: "90%",
    padding: "20px",
}));

const Invite = (isMobile) => {
    const classes = useStyles();
    return (
        <TabWrapper>
            <Flex alignItems="stretch" gap="20px">
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
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        padding="20px"
                    >
                        <MonthlyBody>
                            <div>
                                <div style={{ width: "90%" }}>
                                    <p
                                        style={{
                                            color: "#64A2FF",
                                            fontStyle: "italic",
                                            fontWeight: "800",
                                            fontSize: "27px",
                                            lineHeight: "27px",
                                            paddingBottom: "15px",
                                            display: "inline-block",
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
                                    width="50%"
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
            >
                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
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

                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
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
                    padding="5px 20%"
                />
            </div>
            <HowReferralWorks>
                <HowReferralWorksContent>
                    <Flex direction="column" gap="20px">
                        <Flex justifyContent="space-betwee" gap="20px">
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
                                        width: "20%",
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
                        <Flex justifyContent="space-betwee" gap="20px">
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
                                        width: "20%",
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
                    padding="5px 20%"
                />
            </div>

            <Flex
                alignItems="stretch"
                gap="20px"
                width="100%"
                justifyContent="space-between"
            >
                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
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
                                <p>
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
                        <div style={{ width: "35%" }}>
                            <img src={dollarValue} alt="" />
                        </div>
                    </Flex>
                </TextWithImage>

                <TextWithImage width={"50%"}>
                    <Flex
                        alignItems="center"
                        padding="0 30px"
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
                            <div style={{fontWeight:'600', fontSize:'14px'}}>
                                <p>
                                    The invite ratio is A invite B, B invite C,
                                    C invite D, D invite E. When E bets
                                    10.000R$"
                                </p>
                                <p>※ D can get 10000 * 0.15% = 15 R$"</p>
                                <p>※ C can get 10000 * 0.07% = 7 R$"</p>
                                <p>※ B can get 10000 * 0.02% = 2 R$"</p>
                                <p>※ A has no return in three Levels."</p>
                            </div>
                        </div>
                        <div style={{ width: "35%" }}>
                            <img src={bank} alt="" />
                        </div>
                    </Flex>
                </TextWithImage>
            </Flex>
        </TabWrapper>
    );
};
const Form = () => {
    return <TabWrapper>this is referral form</TabWrapper>;
};
const Stats = () => {
    return <TabWrapper>this is referral stats</TabWrapper>;
};

const ReferralIndex = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Referral" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PersonalCenterPageWrapper>
                        <ImageGridLayout
                            item={{
                                title: "Referral",
                                icon: referral,
                            }}
                            index={0}
                            page="personal-center"
                        >
                            <ReferralWrapper>
                                <TabComponent>
                                    <NewCustomTabs
                                        tabItems={[
                                            {
                                                value: "toInvite",
                                                label: "To Invite",
                                                content: (
                                                    <Invite>hi worl</Invite>
                                                ),
                                                icon: invite,
                                            },
                                            {
                                                label: "Forms",
                                                value: "forms",
                                                content: <Form>hi form</Form>,
                                                icon: form,
                                            },
                                            {
                                                label: "Statistics",
                                                value: "statistics",
                                                content: <Stats>stats</Stats>,
                                                icon: stats,
                                            },
                                        ]}
                                        width={isMobile ? "100%" : "500px"}
                                    />
                                </TabComponent>
                            </ReferralWrapper>
                        </ImageGridLayout>
                    </PersonalCenterPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default ReferralIndex;

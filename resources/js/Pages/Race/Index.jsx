import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import img from "../../../../public/images/race/raceheader.png";
import imgmobile from "../../../../public/images/race/raceheadermobile.png";
import goldencup from "../../../../public/images/svg/goldencup.svg";
import wealth from "../../../../public/images/promotions/wealth.png";
import distributors from "../../../../public/images/promotions/distributors.png";
import bonus from "../../../../public/images/promotions/bonus.png";
import vipexclusive from "../../../../public/images/promotions/vipexclusive.png";
import off from "../../../../public/images/promotions/off.png";
import weekend from "../../../../public/images/promotions/weekend.png";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import CardCoursel from "@/Components/Carousel/carousels/CardCoursel";

const PromotionPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
}));

const PromotionImageHeader = styled("div")(({ isMobile }) => ({
    background: `url(${isMobile ? imgmobile : img})`,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    padding: isMobile ? "1.25rem" : "4.125rem",
    paddingLeft: isMobile ? "1.25rem" : "4.125rem",
    margin: "0 25px",

    "& p": {
        color: "#fff",
        lineHeight: "2.25rem",
        fontWeight: "900",
        "&:nth-child(1)": {
            fontSize: isMobile ? "1.4rem" : "2.25rem",
            paddingBottom: isMobile ? ".5rem" : "1.5rem",
        },
        "&:nth-child(2)": {
            fontSize: isMobile ? "1.4rem" : "3.5rem",
            paddingBottom: isMobile ? ".5rem" : "2rem",
            color: "#5AA2FF",
        },
        "&:nth-child(3)": {
            fontSize: isMobile ? ".7rem" : ".9rem",
            lineHeight: "1.2rem",
            fontWeight: "medium",
            color: "#9BA6D4",
            width: isMobile ? "70%" : "30%",
            "& span": {
                color: "#FFEF61",
            },
        },
    },
}));
const RaceIndex = () => {
    const gridItems = [
        {
            title: "Active Races",
            icon: goldencup,
            imageWidth: "534px",
            imageHeight: "175px",
            perColumn: 3,
            // hoverEffect: "",
            margin: '10px',
            cards: [
                {
                    title: "weekly card",
                    cardColors: ["#32CCEE", "#3586FF"],
                },
                {
                    title: "weekly tournament",
                    cardColors: ["#F9AD3C", "#F93C56"],
                },
                {
                    title: "tournament of the month",
                    cardColors: ["#3CF97C", "#16B5D8"],
                },
                {
                    title: "tournament of the day",
                    cardColors: ["#A63CF9", "#6D3CF9"],
                },
                {
                    title: "weekly card",
                    cardColors: ["#32CCEE", "#3586FF"],
                },
                {
                    title: "weekly tournament",
                    cardColors: ["#F9AD3C", "#F93C56"],
                },
                {
                    title: "tournament of the month",
                    cardColors: ["#3CF97C", "#16B5D8"],
                },
                {
                    title: "tournament of the day",
                    cardColors: ["#A63CF9", "#6D3CF9"],
                },
                {
                    title: "weekly card",
                    cardColors: ["#32CCEE", "#3586FF"],
                },
                {
                    title: "weekly tournament",
                    cardColors: ["#F9AD3C", "#F93C56"],
                },
                {
                    title: "tournament of the month",
                    cardColors: ["#3CF97C", "#16B5D8"],
                },
                {
                    title: "tournament of the day",
                    cardColors: ["#A63CF9", "#6D3CF9"],
                },
            ],
        },
    ];
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Promotions" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionImageHeader isMobile={isMobile}>
                            <p>WEEKLY</p>
                            <p>TOURNAMENTS</p>
                            <p>
                                Participate in numerous tournaments and complete
                                againts other players for a hefty{" "}
                                <span>Prize Pool</span>
                            </p>
                        </PromotionImageHeader>
                    </PromotionPageWrapper>
                    <CardCoursel cardItems={gridItems} />
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default RaceIndex;

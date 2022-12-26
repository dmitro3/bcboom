import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import img from "../../../../public/images/others/bonusheader.png";
import imgmobile from "../../../../public/images/others/bonusheadermobile.png";
import bonusIcon from "../../../../public/images/svg/bonusColored.svg";
import welcomeowl from "../../../../public/images/bonus/welcomeowl.png";
import welcomecream from "../../../../public/images/bonus/welcomecream.png";
import welcomelady from "../../../../public/images/bonus/welcomelady.png";
import welcomewallet from "../../../../public/images/bonus/welcomewallet.png";
import welcomesd from "../../../../public/images/bonus/welcomesd.png";
import welcomeparrot from "../../../../public/images/bonus/welcomeparrot.png";
import { useScreenResolution } from "@/hooks/useScreeResolution";

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
const BonusIndex = () => {
    const gridItems = [
        {
            title: "Bonuses",
            icon: bonusIcon,
            imageWidth: "534px",
            imageHeight: "175px",
            perColumn: 3,
            hoverEffect: "overlay",
            hoverText: "see more",
            images: [
                {
                    image: welcomelady,
                    link: "/bonus/full-bonus",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: welcomecream,
                    link: "/bonus/bonus-everyday",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: welcomeowl,
                    link: "/bonus/full-bonus",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: welcomewallet,
                    link: "/bonus/bonus-everyday",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: welcomesd,
                    link: "/bonus/full-bonus",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: welcomeparrot,
                    link: "/bonus/bonus-everyday",
                    addon: null,
                    addonColor: null,
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
                            <p>DAILY</p>
                            <p>BONUSES</p>
                            <p>
                                Participate in numerous tournaments and complete
                                againts other players for a hefty
                                <span> Prize Pool</span>
                            </p>
                        </PromotionImageHeader>
                    </PromotionPageWrapper>
                    <ImageGridWithHeader gridItems={gridItems} />
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default BonusIndex;

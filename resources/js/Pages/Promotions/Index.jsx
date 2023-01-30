import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import img from "../../../../public/images/others/promotionheader.png";
import imgmobile from "../../../../public/images/others/promotionheadermobile.png";
import gift from "../../../../public/images/svg/gift.svg";
import wealth from "../../../../public/images/promotions/wealth.png";
import distributors from "../../../../public/images/promotions/distributors.png";
import bonus from "../../../../public/images/promotions/bonus.png";
import vipexclusive from "../../../../public/images/promotions/vipexclusive.png";
import off from "../../../../public/images/promotions/off.png";
import weekend from "../../../../public/images/promotions/weekend.png";
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
    margin: '0 25px',

    "& p": {
        color: "#fff",
        lineHeight: "2.25rem",
        fontWeight: "900",
        "&:nth-child(1)": {
            fontSize: isMobile ? "1.4rem" : "2.25rem",
            paddingBottom: isMobile ? ".1rem" : "1.5rem",
        },
        "&:nth-child(2)": {
            fontSize: isMobile ? "1.8rem" : "3.5rem",
            paddingBottom: isMobile ? ".5rem" : "2rem",
            color: "#5AA2FF",
        },
        "&:nth-child(3)": {
            fontSize: isMobile ? ".6rem" : ".9rem",
            lineHeight: "1.2rem",
            fontWeight: "medium",
            color: "white",
        },
    },
}));
const PromotionIndex = () => {
    const gridItems = [
        {
            title: "Promotions",
            icon: gift,
            imageWidth: "534px",
            imageHeight: "175px",
            perColumn: 3,
            margin: '10px',
            // hoverEffect: "",
            images: [
                {
                    image: wealth,
                    link: "/promotions/invite",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: distributors,
                    link: "/promotions/distributor",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: bonus,
                    link: "/promotions/full-bonus",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: vipexclusive,
                    link: "/promotions/exclusive",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: off,
                    link: "/promotions/deposit",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: weekend,
                    link: "/promotions/bonus",
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
            {/* <GuestLayout> */}
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionImageHeader isMobile={isMobile}>
                            <p>BCBOOM</p>
                            <p>PROMOTIONS</p>
                            <p>
                                First deposit bonus 100% Up To <br /> R$ 300 +
                                R$ 100
                            </p>
                        </PromotionImageHeader>
                    </PromotionPageWrapper>
                    <ImageGridWithHeader gridItems={gridItems} />
                </PageTemplate>
            {/* </GuestLayout> */}
        </>
    );
};

export default PromotionIndex;

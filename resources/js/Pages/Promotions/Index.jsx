import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import img from "../../../../public/images/others/promotionheader.png";
import gift from "../../../../public/images/svg/gift.svg";
import wealth from "../../../../public/images/promotions/wealth.png";
import distributors from "../../../../public/images/promotions/distributors.png";
import bonus from "../../../../public/images/promotions/bonus.png";
import vipexclusive from "../../../../public/images/promotions/vipexclusive.png";
import off from "../../../../public/images/promotions/off.png";
import weekend from "../../../../public/images/promotions/weekend.png";

const PromotionPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
}));

const PromotionImageHeader = styled("div")(() => ({
    background: ` url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    padding: "4.125rem",
    paddingLeft: "4.125rem",

    "& p": {
        color: "#fff",
        fontSize: "1.5rem",
        lineHeight: "2.25rem",
        fontWeight: "900",
        "&:nth-child(1)": {
            fontSize: "2.25rem",
            paddingBottom: "1.5rem",
        },
        "&:nth-child(2)": {
            fontSize: "3.5rem",
            paddingBottom: "2rem",
            color: "#5AA2FF",
        },
        "&:nth-child(3)": {
            fontSize: ".9rem",
            lineHeight: "1.2rem",
            fontWeight: "normal",
            color: "#9BA6D4",
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
            hoverEffect: 'overlay',
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
                    link: "/promotions/full_bonus",
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
    return (
        <>
            <Head title="Promotions" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionImageHeader>
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
            </GuestLayout>
        </>
    );
};

export default PromotionIndex;

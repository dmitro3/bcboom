import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import img from "../../../../public/images/games/gamesPageBg.png";
import imgmobile from "../../../../public/images/games/gamesPageBgmobile.png";
import pad from "../../../../public/images/svg/padColored.svg";
import crash from "../../../../public/images/games/crash.png";
import dice from "../../../../public/images/games/dice.png";
import mines from "../../../../public/images/games/mines.png";
import keno from "../../../../public/images/games/keno.png";
import limbo from "../../../../public/images/games/limbo.png";
import roulette from "../../../../public/images/games/roulette.png";
import wheel from "../../../../public/images/games/wheel.png";
import conflip from "../../../../public/images/games/coinflip.png";
import tower from "../../../../public/images/games/tower.png";
import stairs from "../../../../public/images/games/stairs.png";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const GamePageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
}));

const GameImageHeader = styled("div")(({ isMobile }) => ({
    background: `url(${isMobile ? imgmobile : img})`,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    padding:  "4.125rem",
    paddingLeft: isMobile ? "1.25rem" : "4.125rem",
    margin: "0 25px",
    width: isMobile && "100%",

    "& p": {
        color: "#fff",
        // lineHeight: "2.25rem",
        fontWeight: "900",
        "&:nth-child(1)": {
            fontSize: isMobile ? "2.5rem" : "3.25rem",
            paddingBottom: isMobile ? ".5rem" : "1.5rem",
        },
        "&:nth-child(2)": {
            fontSize: isMobile ? ".8rem" : "1rem",
            paddingBottom: isMobile ? ".5rem" : "2rem",
            color: "#FFEF61",
            width:  isMobile ? '70%' : '30%'
        },
    },
}));
const GamesPageIndex = () => {
    const gridItems = [
        {
            title: "Original Games",
            icon: pad,
            imageWidth: "534px",
            imageHeight: "175px",
            perColumn: 5,
            hoverEffect: "overlay",
            page:'games',
            countOnMobile: 2,
            images: [
                { image: crash, link: "/games/crash", addon: null, addonColor: null },
                { image: dice, link: "/games/dice", addon: null, addonColor: null },
                { image: mines, link: "/games/mines", addon: null, addonColor: null },
                { image: keno, link: "/games/keno", addon: null, addonColor: null },
                { image: limbo, link: "/games/limbo", addon: null, addonColor: null },
                {
                    image: roulette,
                    link: "/games/roulette",
                    addon: null,
                    addonColor: null,
                },
                { image: wheel, link: "/games/wheel", addon: null, addonColor: null },
                {
                    image: conflip,
                    link: "/games/coinflip",
                    addon: null,
                    addonColor: null,
                },
                { image: tower, link: "/games/tower", addon: null, addonColor: null },
                {
                    image: stairs,
                    link: "/games/stairs",
                    addon: null,
                    addonColor: null,
                },
            ],
        },
    ];
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Games" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamePageWrapper>
                        <GameImageHeader isMobile={isMobile}>
                            <p>Original Games</p>
                            <p>
                                Every Lucky result on BCBOOM is absolutely
                                random. Check it yourself!
                            </p>
                        </GameImageHeader>
                    </GamePageWrapper>
                    <ImageGridWithHeader gridItems={gridItems} />
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default GamesPageIndex;

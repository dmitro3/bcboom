// import { SelectWithDropdown } from "@/Components/Dropdown/Select";
import SelectWithDropdown from "@/Components/Dropdown/Select";
import Input from "@/Components/Input/Input";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useState } from "react";
import crazycoin from "../../../../public/images/games/crazycoin.png";
import blackjack from "../../../../public/images/games/blackjack.png";
import casinohold from "../../../../public/images/games/casinohold.png";
import lightning from "../../../../public/images/games/lightning.png";
import goldbar from "../../../../public/images/games/goldbar.png";
import goldenwealth from "../../../../public/images/games/goldenwealth.png";
import dragontiger from "../../../../public/images/games/dragontiger.png";
import betonnumber from "../../../../public/images/games/betonnumber.png";
import ultimate from "../../../../public/images/games/ultimate.png";
import Thirty2cards from "../../../../public/images/games/32cards.png";
import live from "../../../../public/images/svg/liveCasino.svg";
import searchI from "../../../../public/images/svg/search.svg";
import ruletika from "../../../../public/images/games/ruletika.png";
import andarbar from "../../../../public/images/games/andarbar.png";
import blackjcklive from "../../../../public/images/games/blackjcklive.png";
import goldblackjack from "../../../../public/images/games/goldblackjack.png";
import craps from "../../../../public/images/games/craps.png";
import sniondrive from "../../../../public/images/games/sniondrive.png";
import dragontigerlive from "../../../../public/images/games/dragontigerlive.png";

const FilterSection = styled("div")(({ isMobile }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    margin: "20px 0",
    padding: "0 20px",
}));
const ProviderAndTypeWrapper = styled("div")(({ isMobile }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    width: isMobile ? "100%" : "auto",
    marginBottom: isMobile && "20px",
}));
const SearchSection = styled("div")(({ isMobile }) => ({
    width: isMobile && "100%",
}));

export default function LiveCasino(props) {
    const gridItems = [
        {
            title: "Live Casino",
            icon: live,
            imageWidth: "534px",
            imageHeight: "175px",
<<<<<<< HEAD
            margin: "25px",
=======
            margin: "5px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
            perColumn: 5,
            page: "home",
            countOnMobile: 4,
            hoverEffect: "overlay",
            images: [
                {
                    image: crazycoin,
                    link: "/games/great-rhyno",
                    addon: "New",
                    addonColor: "#F93C56",
                    title: "Crazy Coin Flip",
                },
                {
                    image: blackjack,
                    link: "/games/aztech-magic",
                    addon: "HOT",
                    addonColor: "#F9C43C",
                    title: "Blackjack Magic",
                },
                {
                    image: casinohold,
                    link: "/games/sweet-bonanza",
                    addon: null,
                    addonColor: null,
                    title: "Casino Hold'em",
                },

                {
                    image: lightning,
                    link: "/games/lightning-blackjck",
                    addon: null,
                    addonColor: null,
                    title: "Lightning Blackjack",
                },
                {
                    image: goldbar,
                    link: "/games/goldbar-roulette",
                    addon: null,
                    addonColor: null,
                    title: "Goldbar Roulette",
                },
                {
                    image: goldenwealth,
                    link: "/games/golden-wealth",
                    addon: null,
                    addonColor: null,
                    title: "Golden Wealth",
                },
                {
                    image: dragontiger,
                    link: "/games/wheel",
                    addon: null,
                    addonColor: null,
                    title: "Dragon Tiger Live",
                },
                {
                    image: betonnumber,
                    link: "/games/bet-on-number",
                    addon: null,
                    addonColor: null,
                    title: "Bet on Number",
                },
                {
                    image: ultimate,
                    link: "/games/ultimate-sic-bo",
                    addon: null,
                    addonColor: null,
                    title: "Ultimate Sic Bo",
                },
                {
                    image: goldblackjack,
                    link: "/games/goldblackjack",
                    addon: null,
                    addonColor: null,
                    title: "Gold Blackjack",
                },
                {
                    image: Thirty2cards,
                    link: "/stairs",
                    addon: null,
                    addonColor: null,
                    title: "32 Cards",
                },
                {
                    image: ruletika,
                    link: "/games/ruletika",
                    addon: null,
                    addonColor: null,
                    title: "Ruletika",
                },
                {
                    image: andarbar,
                    link: "/games/andarbar",
                    addon: null,
                    addonColor: null,
                    title: "Andar Bahar",
                },
                {
                    image: blackjcklive,
                    link: "/games/blackjcklive",
                    addon: null,
                    addonColor: null,
                    title: "Blackjack Live",
                },

                {
                    image: goldblackjack,
                    link: "/games/goldblackjack",
                    addon: null,
                    addonColor: null,
                    title: "Gold Blackjack",
                },
                {
                    image: craps,
                    link: "/games/craps",
                    addon: null,
                    addonColor: null,
                    title: "Craps",
                },
                {
                    image: sniondrive,
                    link: "/games/sniondrive",
                    addon: null,
                    addonColor: null,
                    title: "Snion Drive",
                },
                {
                    image: casinohold,
                    link: "/sweet-bonanza",
                    addon: null,
                    addonColor: null,
                    title: "Sweet Bonanza",
                },
                {
                    image: dragontigerlive,
                    link: "/games/dragontigerlive",
                    addon: null,
                    addonColor: null,
                    title: "Dragon Tiger Live",
                },

                {
                    image: ultimate,
                    link: "/games/ultimatesicbo",
                    addon: null,
                    addonColor: null,
                    title: "Ultimate Sic Bo",
                },
            ],
        },
    ];
    const [componentItems, setComponentItems] = useState(gridItems);
    const [currentProvider, setCurrentProvider] = useState("Game Provider");
    const [currentType, setCurrentType] = useState("Game Type");
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Live Casino" />
            <GuestLayout>
                <PageTemplate
                    innerHeader={true}
                    homeCarousel
                    gridWithHeader={componentItems}
                >
                    <FilterSection isMobile={isMobile}>
                        <ProviderAndTypeWrapper isMobile={isMobile}>
                            <SelectWithDropdown
                                items={[
                                    "Pragmatic Play",
                                    "Evolution Gaming",
                                    "Amatic Gaming",
                                    "Pragmatic Play",
                                    "Evolution Gaming",
                                    "Amatic Gaming",
                                    "Pragmatic Play",
                                    "Evolution Gaming",
                                    "Amatic Gaming",
                                    "Game Provider",
                                ]}
                                value={currentProvider}
                                setValue={setCurrentProvider}
                            />
                            <SelectWithDropdown
                                items={[
                                    "Bacakrat",
                                    "Roulette",
                                    "Poker",
                                    "Bacakrat",
                                    "Roulette",
                                    "Poker",
                                    "Bacakrat",
                                    "Roulette",
                                    "Poker",
                                    "Bacakrat",
                                    "Roulette",
                                    "Poker",
                                    "Game Type",
                                ]}
                                value={currentType}
                                setValue={setCurrentType}
                            />
                        </ProviderAndTypeWrapper>
                        <SearchSection isMobile={isMobile}>
                            <Input
                                addon={<img src={searchI} alt="search" />}
                                type="phone"
                                placeholder="Search for games"
                                bg="#3A4072"
                                br="10px"
                                onChange={(e) => {
                                    const newItems = gridItems.map((item) => {
                                        return {
                                            ...item,
                                            images: item.images.filter(
                                                (i) =>
                                                    i.link
                                                        .toLowerCase()
                                                        .includes(
                                                            e.target.value.toLowerCase()
                                                        ) ||
                                                    i.image
                                                        .toLowerCase()
                                                        .includes(
                                                            e.target.value.toLowerCase()
                                                        )
                                            ),
                                        };
                                    });
                                    setComponentItems(newItems);
                                }}
                            />
                        </SearchSection>
                    </FilterSection>
                </PageTemplate>
            </GuestLayout>
        </>
    );
}

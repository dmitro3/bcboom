// import { SelectWithDropdown } from "@/Components/Dropdown/Select";
import SelectWithDropdown from "@/Components/Dropdown/Select";
import Input from "@/Components/Input/Input";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useState } from "react";
import aztecbonanza from "../../../../public/images/games/aztecbonanza.png";
import aztechmagic from "../../../../public/images/games/aztechmagic.png";
import bigbass from "../../../../public/images/games/bigbass.png";
import bonanzabillion from "../../../../public/images/games/bonanzabillion.png";
import bookofra from "../../../../public/images/games/bookofra.png";
import bookoftut from "../../../../public/images/games/bookoftut.png";
import digdigger from "../../../../public/images/games/digdigger.png";
import doghouse from "../../../../public/images/games/doghouse.png";
import dragonygold from "../../../../public/images/games/dragongold.png";
import fortuneMouse from "../../../../public/images/games/fortuneMouse.png";
import goblin from "../../../../public/images/games/goblin.png";
import greatRhyno from "../../../../public/images/games/greatRhyno.png";
import johnhunter from "../../../../public/images/games/johnhunter.png";
import luckydrama from "../../../../public/images/games/luckydrama.png";
import madame from "../../../../public/images/games/madame.png";
import manekigold from "../../../../public/images/games/manekigold.png";
import mysticcheif from "../../../../public/images/games/mysticcheif.png";
import riseofolympus from "../../../../public/images/games/riseofolympus.png";
import spinNspell from "../../../../public/images/games/spinNspell.png";
import sweetbonanza from "../../../../public/images/games/sweetbonanza.png";
import s777 from "../../../../public/images/svg/777.svg";
import searchI from "../../../../public/images/svg/search.svg";

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
            title: "Race",
            icon: s777,
            imageWidth: "534px",
            imageHeight: "175px",
            margin: "25px",
            perColumn: 5,
            page: "home",
            countOnMobile: 4,

            images: [
                {
                    image: greatRhyno,
                    link: "/great-rhyno",
                    addon: "New",
                    addonColor: "#F93C56",
                },
                {
                    image: aztechmagic,
                    link: "/aztech-magic",
                    addon: "HOT",
                    addonColor: "#F9C43C",
                },
                {
                    image: sweetbonanza,
                    link: "/sweet-bonanza",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: johnhunter,
                    link: "/keno",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: mysticcheif,
                    link: "/limbo",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: fortuneMouse,
                    link: "/roulette",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: bookofra,
                    link: "/wheel",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: madame,
                    link: "/coinflip",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: bookoftut,
                    link: "/tower",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: digdigger,
                    link: "/stairs",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: spinNspell,
                    link: "/spin-n-spell",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: bigbass,
                    link: "/big-bass",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: goblin,
                    link: "/goblin",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: bonanzabillion,
                    link: "/bonanza-billion",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: doghouse,
                    link: "/dog-house",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: riseofolympus,
                    link: "/rise-of-olympus",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: aztecbonanza,
                    link: "/aztec-bonanza",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: luckydrama,
                    link: "/lucky-drama",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: dragonygold,
                    link: "/dragon-gold",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: manekigold,
                    link: "/maneki-gold",
                    addon: null,
                    addonColor: null,
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
            <Head title="Homepage" />
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

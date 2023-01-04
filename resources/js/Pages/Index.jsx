import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/inertia-react";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import game from "../../../public/images/svg/games.svg";
import s777 from "../../../public/images/svg/777.svg";
import liveCasino from "../../../public/images/svg/liveCasino.svg";
import crash from "../../../public/images/games/crash.png";
import dice from "../../../public/images/games/dice.png";
import mines from "../../../public/images/games/mines.png";
import keno from "../../../public/images/games/keno.png";
import limbo from "../../../public/images/games/limbo.png";
import roulette from "../../../public/images/games/roulette.png";
import wheel from "../../../public/images/games/wheel.png";
import conflip from "../../../public/images/games/coinflip.png";
import tower from "../../../public/images/games/tower.png";
import stairs from "../../../public/images/games/stairs.png";
import greatRhyno from "../../../public/images/games/greatRhyno.png";
import aztechmagic from "../../../public/images/games/aztechmagic.png";
import sweetbonanza from "../../../public/images/games/sweetbonanza.png";
import johnhunter from "../../../public/images/games/johnhunter.png";
import mysticcheif from "../../../public/images/games/mysticcheif.png";
import fortuneMouse from "../../../public/images/games/fortuneMouse.png";
import bookofra from "../../../public/images/games/bookofra.png";
import madame from "../../../public/images/games/madame.png";
import bookoftut from "../../../public/images/games/bookoftut.png";
import digdigger from "../../../public/images/games/digdigger.png";
import crazycoin from "../../../public/images/games/crazycoin.png";
import blackjack from "../../../public/images/games/blackjack.png";
import casinohold from "../../../public/images/games/casinohold.png";
import lightning from "../../../public/images/games/lightning.png";
import goldbar from "../../../public/images/games/goldbar.png";
import goldenwealth from "../../../public/images/games/goldenwealth.png";
import dragontiger from "../../../public/images/games/dragontiger.png";
import betonnumber from "../../../public/images/games/betonnumber.png";
import ultimate from "../../../public/images/games/ultimate.png";
import Thirty2cards from "../../../public/images/games/32cards.png";
export default function Homepage(props) {
    const gridItems = [
        {
            title: "Original Games",
            icon: game,
            imageWidth: "534px",
            imageHeight: "175px",
<<<<<<< HEAD
            margin: "25px",
=======
            margin: "10px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
            perColumn: 5,
            page: "home",
            iconSize: "18px",
            images: [
                {
                    image: crash,
                    link: "/games/crash",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: dice,
                    link: "/games/dice",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: mines,
                    link: "/games/mines",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: keno,
                    link: "/games/keno",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: limbo,
                    link: "/games/limbo",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: roulette,
                    link: "/games/roulette",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: wheel,
                    link: "/games/wheel",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: conflip,
                    link: "/games/coin-flip",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: tower,
                    link: "/games/tower",
                    addon: null,
                    addonColor: null,
                },
                {
                    image: stairs,
                    link: "/games/stairs",
                    addon: null,
                    addonColor: null,
                },
            ],
        },
        {
            title: "Slot Games",
            icon: s777,
            imageWidth: "534px",
            imageHeight: "175px",
<<<<<<< HEAD
            margin: "25px",
=======
            margin: "10px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
            perColumn: 5,
            page: "home",
            countOnMobile: 4,
            urlForMore: "/slots",
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
                    link: "/coin-flip",
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
            ],
        },
        {
            title: "Live Casino",
            icon: liveCasino,
            imageWidth: "534px",
            imageHeight: "175px",
<<<<<<< HEAD
            margin: "25px",
=======
            margin: "10px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
            perColumn: 5,
            page: "home",
            countOnMobile: 4,
            urlForMore: "/live-casino",
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
                    title: "Aztech Magic",
                },
                {
                    image: casinohold,
                    link: "/games/sweet-bonanza",
                    addon: null,
                    addonColor: null,
                    title: "Sweet Bonanza",
                },

                {
                    image: lightning,
                    link: "/games/keno",
                    addon: null,
                    addonColor: null,
                    title: "Keno",
                },
                {
                    image: goldbar,
                    link: "/games/limbo",
                    addon: null,
                    addonColor: null,
                    title: "Limbo",
                },
                {
                    image: goldenwealth,
                    link: "/games/roulette",
                    addon: null,
                    addonColor: null,
                    title: "Roulette",
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
                    image: Thirty2cards,
                    link: "/stairs",
                    addon: null,
                    addonColor: null,
                    title: "32 Cards",
                },
            ],
        },
    ];
    return (
        <>
            <Head title="Homepage" />
            <GuestLayout>
                <PageTemplate
                    innerHeader={true}
                    homeCarousel
                    gridWithHeader={gridItems}
                />
            </GuestLayout>
        </>
    );
}

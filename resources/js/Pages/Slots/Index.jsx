import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import aztechmagic from "../../../../public/images/games/aztechmagic.png";
import bookofra from "../../../../public/images/games/bookofra.png";
import bookoftut from "../../../../public/images/games/bookoftut.png";
import digdigger from "../../../../public/images/games/digdigger.png";
import fortuneMouse from "../../../../public/images/games/fortuneMouse.png";
import greatRhyno from "../../../../public/images/games/greatRhyno.png";
import johnhunter from "../../../../public/images/games/johnhunter.png";
import madame from "../../../../public/images/games/madame.png";
import mysticcheif from "../../../../public/images/games/mysticcheif.png";
import sweetbonanza from "../../../../public/images/games/sweetbonanza.png";
import s777 from "../../../../public/images/svg/777.svg";
export default function Homepage(props) {
    const gridItems = [
        {
            title: "Slot Games",
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

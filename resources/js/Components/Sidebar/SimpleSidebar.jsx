import { styled } from "@mui/system";
import React from "react";
import tower from "../../../../public/images/svg/tower.svg";
import stairs from "../../../../public/images/svg/stairs.svg";
import conflip from "../../../../public/images/svg/coinflip.svg";
import wheels from "../../../../public/images/svg/wheels.svg";
import roulette from "../../../../public/images/svg/roulette.svg";
import plinko from "../../../../public/images/svg/plinko.svg";
import limbo from "../../../../public/images/svg/limbo.svg";
import keno from "../../../../public/images/svg/keno.svg";
import mines from "../../../../public/images/svg/mines.svg";
import dice from "../../../../public/images/svg/dice.svg";
import turbor from "../../../../public/images/svg/turbor.svg";
<<<<<<< HEAD
=======
import { Link } from "@inertiajs/inertia-react";
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa

const SidebarWrapper = styled("div")(() => ({
    backgroundColor: "#000000",
    height: "100%",
    width: "78px",
    padding: "10px 20px",
<<<<<<< HEAD
    paddingTop: "30px",
=======
    // paddingTop: "30px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
}));
const SidebarItems = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
<<<<<<< HEAD
    gap: "30px",
}));
const SidebarItem = styled("div")(() => ({
    cursor: "pointer",
=======
    gap: "10px",
}));
const SidebarItem = styled("div")(({ active }) => ({
    cursor: "pointer",
    background:
        active && "linear-gradient(136.85deg, #4E8CF8 3.02%, #225AC1 100%)",
    borderRadius: "5px",
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
}));
const SimpleSidebar = () => {
    const sidebarItems = [
        {
<<<<<<< HEAD
            name: "Turbor",
            icon: turbor,
            link: "/turbor",
=======
            name: "Crash",
            icon: turbor,
            link: "/games/crash",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Dice",
            icon: dice,
<<<<<<< HEAD
            link: "/dice",
=======
            link: "/games/dice",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Mines",
            icon: mines,
<<<<<<< HEAD
            link: "/mines",
=======
            link: "/games/mines",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Keno",
            icon: keno,
<<<<<<< HEAD
            link: "/keno",
=======
            link: "/games/keno",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Limbo",
            icon: limbo,
<<<<<<< HEAD
            link: "/limbo",
=======
            link: "/games/limbo",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Plinko",
            icon: plinko,
<<<<<<< HEAD
            link: "/plinko",
=======
            link: "/games/plinko",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Roulette",
            icon: roulette,
<<<<<<< HEAD
            link: "/roulette",
=======
            link: "/games/roulette",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Wheels",
            icon: wheels,
<<<<<<< HEAD
            link: "/wheels",
        },
        {
            name: "Conflip",
            icon: conflip,
            link: "/conflip",
=======
            link: "/games/wheels",
        },
        {
            name: "Coin-flip",
            icon: conflip,
            link: "/games/coin-flip",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Stairs",
            icon: stairs,
<<<<<<< HEAD
            link: "/stairs",
=======
            link: "/games/stairs",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
        },
        {
            name: "Tower",
            icon: tower,
<<<<<<< HEAD
            link: "/tower",
        },
    ];

=======
            link: "/games/tower",
        },
    ];
    const location = window.location.pathname.split("/")[2];
    console.log("location: ", location);
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    return (
        <SidebarWrapper>
            <SidebarItems>
                {sidebarItems.map((item, index) => (
<<<<<<< HEAD
                    <SidebarItem key={index}>
                        <img src={item.icon} alt={item.name} />
                    </SidebarItem>
=======
                    <Link href={item.link}>
                        <SidebarItem
                            key={index}
                            active={location === item.name.toLowerCase()}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                style={{
                                    filter:
                                        location === item.name.toLowerCase()
                                            ? "brightness(0) invert(1)"
                                            : "",
                                }}
                            />
                        </SidebarItem>
                    </Link>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                ))}
            </SidebarItems>
        </SidebarWrapper>
    );
};

export default SimpleSidebar;

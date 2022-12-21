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

const SidebarWrapper = styled("div")(() => ({
    backgroundColor: "#000000",
    height: "100%",
    width: "fit-content",
    padding: "10px 20px",
    paddingTop: "30px",
}));
const SidebarItems = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "30px",
}));
const SidebarItem = styled("div")(() => ({
    cursor: "pointer",
}));
const SimpleSidebar = () => {
    const sidebarItems = [
        {
            name: "Turbor",
            icon: turbor,
            link: "/turbor",
        },
        {
            name: "Dice",
            icon: dice,
            link: "/dice",
        },
        {
            name: "Mines",
            icon: mines,
            link: "/mines",
        },
        {
            name: "Keno",
            icon: keno,
            link: "/keno",
        },
        {
            name: "Limbo",
            icon: limbo,
            link: "/limbo",
        },
        {
            name: "Plinko",
            icon: plinko,
            link: "/plinko",
        },
        {
            name: "Roulette",
            icon: roulette,
            link: "/roulette",
        },
        {
            name: "Wheels",
            icon: wheels,
            link: "/wheels",
        },
        {
            name: "Conflip",
            icon: conflip,
            link: "/conflip",
        },
        {
            name: "Stairs",
            icon: stairs,
            link: "/stairs",
        },
        {
            name: "Tower",
            icon: tower,
            link: "/tower",
        },
    ];

    return (
        <SidebarWrapper>
            <SidebarItems>
                {sidebarItems.map((item, index) => (
                    <SidebarItem key={index}>
                        <img src={item.icon} alt={item.name} />
                    </SidebarItem>
                ))}
            </SidebarItems>
        </SidebarWrapper>
    );
};

export default SimpleSidebar;

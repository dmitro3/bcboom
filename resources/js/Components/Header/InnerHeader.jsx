import { navlinks } from "@/data";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { Link } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import bonus from "../../../../public/images/svg/bonus.svg";
import games from "../../../../public/images/svg/games.svg";
import homeSvg from "../../../../public/images/svg/homeSvg.svg";
import live from "../../../../public/images/svg/live.svg";
import promotion from "../../../../public/images/svg/promotion.svg";
import race from "../../../../public/images/svg/race.svg";
import slots from "../../../../public/images/svg/slots.svg";
import vip from "../../../../public/images/svg/vip.svg";
import UserDropdown from "../UserDropdown/UserDropdown";
const InnerHeaderWrapper = styled("div")(({ isMobile }) => ({
    padding: isMobile ? "20px 20px 0 20px" : "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    overflowX: "auto",
    gap: isMobile && "50px",
    "-ms-overflow-style": "none" /* IE and Edge */,
    "scrollbar-width": "none",
    "&::-webkit-scrollbar": {
        display: "none",
    },
    background: isMobile && "#191D3A",
}));

const InnerHeaderItems = styled("div")(({ isMobile }) => ({
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "50px" : "20px",
    minWidth: "max-content",
}));
const InnerHeaderItem = styled("div")(({ active }) => ({
    display: "flex",
    cursor: "pointer",
    paddingBottom: "5px",
    borderBottom: active && "2px solid #3586FF",
    p: {
        marginLeft: "5px",
        marginTop: "3px",
        fontSize: "14px",
        color: active ? "#3586FF" : "#8990AE",
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif",
        whiteSpace: "nowrap",
    },
}));
const InnerHeader = () => {
    const { isMobile } = useScreenResolution();
    const location =
        typeof window !== undefined
            ? window.location.pathname.split("/")[1]
            : "";
    // useEffect(() => {
    //     const location =
    //         typeof window !== undefined ? window.location.pathname : "";
    //     setLocation(location);
    // }, []);
    const navItems = [
        "/",
        "slots",
        "games",
        "live-casino",
        "race",
        "promotion",
        "promotions/bonus_everyday",
        "promotions/exclusive",
    ];
    return (
        <InnerHeaderWrapper isMobile={isMobile}>
            <InnerHeaderItems isMobile={isMobile}>
                {navlinks.slice(0, 5).map((item, index) => {
                    return (
<<<<<<< HEAD
                        <Link href={item.link}>
=======
                        <Link href={item.link} preserveScroll preserveState>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            <InnerHeaderItem
                                key={index}
                                active={location == item.link.replace("/", "")}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    style={{
                                        filter:
                                            location ==
                                                item.link.replace("/", "") &&
                                            "invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)",
                                    }}
                                />
                                <p>{item.name}</p>
                            </InnerHeaderItem>
                        </Link>
                    );
                })}
            </InnerHeaderItems>
            <InnerHeaderItems isMobile={isMobile}>
                {navlinks.slice(5, 8).map((item, index) => (
<<<<<<< HEAD
                    <Link href={item.link}>
=======
                    <Link href={item.link} preserveScroll preserveState>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        <InnerHeaderItem
                            key={index}
                            active={location == item.link.replace("/", "")}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                style={{
                                    filter:
                                        location ==
                                            item.link.replace("/", "") &&
                                        "invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)",
                                }}
                            />
                            <p>{item.name}</p>
                        </InnerHeaderItem>{" "}
                    </Link>
                ))}
                {!isMobile && <UserDropdown isLoggedIn={false} />}
            </InnerHeaderItems>
        </InnerHeaderWrapper>
    );
};

export default InnerHeader;

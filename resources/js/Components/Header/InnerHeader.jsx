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
    const innerHeaderItems = [
        {
            name: "Home",
            icon: homeSvg,
            link: "/",
        },
        {
            name: "Games",
            icon: games,
            link: "/games",
        },
        {
            name: "Slots",
            icon: slots,
            link: "/slots",
        },
        {
            name: "Race",
            icon: race,
            link: "/race",
        },
        {
            name: "Live Casino",
            icon: live,
            link: "/live",
        },
        {
            name: "Promotions",
            icon: promotion,
            link: "/promotions",
        },
        {
            name: "Bonus",
            icon: bonus,
            link: "/promotions/bonus_everyday",
        },
        {
            name: "VIP",
            icon: vip,
            link: "/promotions/exclusive",
        },
    ];
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

    return (
        <InnerHeaderWrapper isMobile={isMobile}>
            <InnerHeaderItems isMobile={isMobile}>
                {innerHeaderItems.slice(0, 5).map((item, index) => (
                    <Link href={item.link}>
                        <InnerHeaderItem
                            key={index}
                            active={location.includes(
                                item.link.replace("/", "")
                            )}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </InnerHeaderItem>
                    </Link>
                ))}
            </InnerHeaderItems>
            <InnerHeaderItems isMobile={isMobile}>
                {innerHeaderItems.slice(5, 8).map((item, index) => (
                    <Link href={item.link}>
                        <InnerHeaderItem
                            key={index}
                            active={location.includes(item.link)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </InnerHeaderItem>{" "}
                    </Link>
                ))}
                {!isMobile && <UserDropdown isLoggedIn={true} />}
            </InnerHeaderItems>
        </InnerHeaderWrapper>
    );
};

export default InnerHeader;

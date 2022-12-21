import { styled } from "@mui/system";
import wifi from "../../../../public/images/svg/wifi.svg";
const HeaderWrapper = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const HeaderPlatformStats = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const HeaderPlatformStatsItem = styled("p")(() => ({
    display: "flex",

    p: {
        marginLeft: "5px",
        marginTop: "3px",
        fontSize: "12px",
        color: "#8990AE",
    },
}));

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderPlatformStats>
                <HeaderPlatformStatsItem>
                    <img src={wifi} alt="logo" />
                    <p>423 Online</p>
                </HeaderPlatformStatsItem>
            </HeaderPlatformStats>
            <div>Header</div>
        </HeaderWrapper>
    );
};

export default Header;

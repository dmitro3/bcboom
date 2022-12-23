import Sidedrawer from "@/Components/Drawer/Sidedrawer";
import DesktopFooter from "@/Components/Footer/DesktopFooter";
import MobileFooter from "@/Components/Footer/MobileFooter";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import DesktopHeader, { MobileHeader } from "../Components/Header/Header";
import SimpleSidebar from "../Components/Sidebar/SimpleSidebar";
import LayoutTheme from "./theme";

const PageLayout = styled("div")(({ theme }) => ({
    color: "white",
    backgroundColor: "#000000",
    height: "100vh",
    fontfamily: "Montserrat, sans-serif",
}));

const PageBody = styled("div")(({ isMobile }) => ({
    height: "fit-content",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingRight: !isMobile && "68px",
    background: "#000000",
}));

export default function GuestLayout({ children }) {
    const { isMobile } = useScreenResolution();
    const { drawerState } = useSelector((state) => state.app);
    if (isMobile) {
        return (
            <LayoutTheme>
                {drawerState?.open && <Sidedrawer />}
                <PageLayout>
                    <MobileHeader />
                    <PageBody isMobile={isMobile}>{children}</PageBody>
                    <MobileFooter />
                </PageLayout>
            </LayoutTheme>
        );
    }
    return (
        <LayoutTheme>
            <PageLayout>
                <DesktopHeader />
                <PageBody isMobile={isMobile}>
                    <SimpleSidebar />
                    {children}
                </PageBody>
                <DesktopFooter />
            </PageLayout>
        </LayoutTheme>
    );
}

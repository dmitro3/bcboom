import Sidedrawer from "@/Components/Drawer/Sidedrawer";
import DesktopFooter from "@/Components/Footer/DesktopFooter";
import MobileFooter from "@/Components/Footer/MobileFooter";
import MobileNav from "@/Components/Footer/MobileNav";
import LoginSignupModal from "@/Components/modal/auth/LoginSignup";
import WalletModal from "@/Components/modal/wallet/WalletModal";
import { Flex } from "@/Components/UtilComponents/Flex";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DesktopHeader, { MobileHeader } from "../Components/Header/Header";
import SimpleSidebar from "../Components/Sidebar/SimpleSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutTheme from "./theme";
import NicknameModal from "@/Components/modal/profile/NicknameModal";
import { Howl, Howler } from "howler";
const PageLayout = styled("div")(({ theme }) => ({
    color: "white",
    backgroundColor: "#000000",
    minHeight: "100vh",
    fontfamily: "Montserrat, sans-serif",
    overflow: "-moz-scrollbars-none",
    "-ms-overflow-style": "none",
    "&::-webkit-scrollbar": { display: "none" },
}));

const PageBody = styled("div")(({ isMobile }) => ({
    height: "fit-content",
    width: "100%",
    maxWidth: "1750px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    paddingRight: !isMobile && "68px",
    background: "#000000",

    '& > div': {
    '&:nth-child(2)': {
        flexGrow: 1,
    },
    },
}));

export default function GuestLayout({ children }) {
    const { isMobile, width } = useScreenResolution();
    const { drawerState } = useSelector((state) => state.app);
    const { modalState } = useSelector((state) => state.auth);
    const { nicknameModalState } = useSelector((state) => state.profile);
    const { modalState: walletModalState } = useSelector(
        (state) => state.wallet
    );
    const [loading, setLoading] = useState(false);

    const wait = (delay = 0) =>
        new Promise((resolve) => setTimeout(resolve, delay));
    const sound = new Howl({
        src: ["/sounds/intro_casino.mp3"],
        loop: true,
        onplayerror: function () {
            sound.once("unlock", function () {
                sound.play();
            });
        },
    });
    useEffect(() => {
        sound.play();

    }, []);

    document.addEventListener("DOMContentLoaded", () =>
        wait(1000).then(() => {
            setLoading(false);
        })
    );
    // if (isMobile) {
    //     return (
    //         <LayoutTheme>
    //             {drawerState?.open && <Sidedrawer />}
    //             <PageLayout>
    //                 <MobileHeader />
    //                 <PageBody isMobile={isMobile}>{children}</PageBody>
    //                 <MobileFooter />
    //             </PageLayout>
    //         </LayoutTheme>
    //     );
    // }
    if (loading)
        return (
            <Flex height="100%" justifyContent="center">
                {/* <div>
                    <img src={bclogo} alt="" />
                </div> */}
                LOADING!!
            </Flex>
        );
    return (
        <LayoutTheme>
            <ToastContainer />
            {isMobile && drawerState?.open && <Sidedrawer />}
            {modalState?.open && <LoginSignupModal />}
            {walletModalState?.open && <WalletModal />}
            {nicknameModalState.open && <NicknameModal />}
            <PageLayout>
                <div style={{ maxWidth: "1700px", margin: "0 auto" }}>
                    {width <= 1010 ? <MobileHeader /> : <DesktopHeader />}
                    <PageBody isMobile={isMobile}>
                        {!isMobile && <SimpleSidebar />}
                        {children}
                    </PageBody>
                </div>
                {isMobile && <MobileNav />}
                {isMobile ? <MobileFooter /> : <DesktopFooter />}
            </PageLayout>
        </LayoutTheme>
    );
}

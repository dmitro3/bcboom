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
import { useDispatch, useSelector } from "react-redux";
import DesktopHeader, { MobileHeader } from "../Components/Header/Header";
import SimpleSidebar from "../Components/Sidebar/SimpleSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutTheme from "./theme";
import NicknameModal from "@/Components/modal/profile/NicknameModal";
import { Howl, Howler } from "howler";
import { setSound } from "@/redux/app-state/app-slice";
import useSound from "use-sound";

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
    display: isMobile ? "block" : "flex",
    flexDirection: "row",
    paddingRight: !isMobile && "68px",
    background: "#000000",

    "& > div": {
        "&:nth-child(2)": {
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
    const dispatch = useDispatch();
    const { sound } = useSelector((state) => state.app);
    const [loading, setLoading] = useState(false);

    const [play, { stop, isPlaying }] = useSound(sound.currentSound);

    useEffect(() => {
        console.log("sound: ", sound);
        if (sound.muted) return stop();
        // if (!isPlaying && !sound.muted) return play();
        // play();
    }, [sound.muted, sound.currentSound]);

    const wait = (delay = 0) =>
        new Promise((resolve) => setTimeout(resolve, delay));
    // const audio = new Howl({
    //     src: [sound.currentSound, sound.currentSound],
    //     loop: true,
    //     onplayerror: function () {
    //         audio.once("unlock", function () {
    //             const id = !sound.muted ? audio.play() : audio.mute(true);
    //             dispatch(setSound({ field: "id", value: id }));
    //         });
    //     },
    // });
    // useEffect(() => {
    //     const id = !sound.muted ? audio.play() : audio.mute(true);
    //     dispatch(setSound({ field: "id", value: id }));
    //     //     console.log("sound.muted id", sound.id);
    //     //     console.log("sound.muted", sound);
    //     // if (sound.muted) {
    //         console.log("sound.muted id", sound.id);
    //         audio.mute(true, sound.id);
    //     // } else {
    //     //     audio.mute(false, sound.id);
    //     // }
    // }, [sound.currentSound, sound.muted]);

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

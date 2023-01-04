import Sidedrawer from "@/Components/Drawer/Sidedrawer";
import DesktopFooter from "@/Components/Footer/DesktopFooter";
<<<<<<< HEAD
import MobileFooter from "@/Components/Footer/MobileFooter";
import LoginSignupModal from "@/Components/modal/auth/LoginSignup";
import WalletModal from "@/Components/modal/wallet/WalletModal";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { styled } from "@mui/system";
=======
import FooterActions from "@/Components/Footer/FooterActions";
import MobileFooter from "@/Components/Footer/MobileFooter";
import MobileNav from "@/Components/Footer/MobileNav";
import LoginSignupModal from "@/Components/modal/auth/LoginSignup";
import WalletModal from "@/Components/modal/wallet/WalletModal";
import { Flex } from "@/Components/UtilComponents/Flex";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { styled } from "@mui/system";
import { useState } from "react";
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
import { useSelector } from "react-redux";
import DesktopHeader, { MobileHeader } from "../Components/Header/Header";
import SimpleSidebar from "../Components/Sidebar/SimpleSidebar";
import LayoutTheme from "./theme";
<<<<<<< HEAD

=======
import bclogo from "../../../public/images/brand/bcboom.png";
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
const PageLayout = styled("div")(({ theme }) => ({
    color: "white",
    backgroundColor: "#000000",
    minHeight: "100vh",
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
    const { modalState } = useSelector((state) => state.auth);
<<<<<<< HEAD
    const { modalState: walletModalState } = useSelector((state) => state.wallet);

=======
    const { modalState: walletModalState } = useSelector(
        (state) => state.wallet
    );
    const [loading, setLoading] = useState(false);

    const wait = (delay = 0) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    document.addEventListener("DOMContentLoaded", () =>
        wait(1000).then(() => {
            setLoading(false);
        })
    );
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
=======
    if (loading)
        return (
            <Flex height="100%" justifyContent="center">
                {/* <div>
                    <img src={bclogo} alt="" />
                </div> */}
                LOADING!!
            </Flex>
        );
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    return (
        <LayoutTheme>
            {isMobile && drawerState?.open && <Sidedrawer />}
            {modalState?.open && <LoginSignupModal />}
            {walletModalState?.open && <WalletModal />}
            <PageLayout>
                {isMobile ? <MobileHeader /> : <DesktopHeader />}
                <PageBody isMobile={isMobile}>
                    {!isMobile && <SimpleSidebar />}
                    {children}
                </PageBody>
<<<<<<< HEAD
=======
                {isMobile && <MobileNav />}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                {isMobile ? <MobileFooter /> : <DesktopFooter />}
            </PageLayout>
        </LayoutTheme>
    );
}

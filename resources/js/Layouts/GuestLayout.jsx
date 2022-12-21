import { styled } from "@mui/system";
import Header from "../Components/Header/Header";
import LayoutTheme from "./theme";

const PageLayout = styled("div")(({ theme }) => ({
    color: "white",
    backgroundColor: "#000000",
    height: "100vh",
}));

export default function GuestLayout({ children }) {
    return (
        <LayoutTheme>
            <Header />
            {/* <Sidebar/> */}
            <PageLayout>{children}</PageLayout>
        </LayoutTheme>
    );
}

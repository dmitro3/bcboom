import { styled } from "@mui/system";
import LayoutTheme from "./theme";

export default function GuestLayout({ children }) {
    return (
        <LayoutTheme>
            <PageLayout>{children}</PageLayout>
        </LayoutTheme>
    );
}

const PageLayout = styled("div")(({ theme }) => ({
    color: 'white',
    backgroundColor: "#000000",
    height: "100vh",
}));

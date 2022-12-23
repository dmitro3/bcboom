import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline } from "@mui/material";

export default function LayoutTheme({ children }) {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const darkMode = (theme) => ({
        palette: {
            mode: "dark",

            background: {
                default: "#1c1c25",
                paper: "#292933",
            },
            text: {
                primary: "#fff",
                secondary: "#c9c9d7",
            },
            primary: {
                main: "#525AA0",
                text: "#fff",
            },
            secondary: {
                main: "#FFBE2E",
            },
            button: {},
            common: {},
        },
        font: {
            main: "Cabin",
        },
        typography: {
            fontFamily: ["SF Pro Display-Regular"].join(","),
        },
    });
    const theme = useMemo(() => {
        const defaultTheme = createTheme();
        return createTheme(defaultTheme, darkMode(defaultTheme));
    }, [prefersDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <>{children}</>
        </ThemeProvider>
    );
}

export const screenSizes = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

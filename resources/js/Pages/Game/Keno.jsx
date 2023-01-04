import React from "react";
import { styled } from "@mui/system";
import { Head } from "@inertiajs/inertia-react";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import GameLayout from "@/Components/Game/layout/GameLayout";
import KenoFrame from "@/Components/Game/frames/KenoFrame";
import KenoButtonGrid from "@/Components/Game/buttongrids/KenoButtonGrid";
<<<<<<< HEAD

const GamesPageWrapper = styled("div")(() => ({
    background: "#1D2036",
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    paddingTop: "2.125rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "2.125rem",
    height: "80%",
    position: "relative",
}));

const Keno = () => {
=======
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Keno = () => {
    const { isMobile } = useScreenResolution();
    const GamesPageWrapper = styled("div")(() => ({
        background: "#1D2036",
        width: `${isMobile ? "99%" : "98%"}`,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: `${isMobile ? "1.3rem" : "2rem"}`,
        paddingTop: "2.125rem",
        paddingLeft: `${isMobile ? "0.8rem" : "1rem"}`,
        paddingRight: `${isMobile ? "0" : "1rem"}`,
        paddingBottom: "2.125rem",
        height: "80%",
        position: "relative",
    }));

>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    return (
        <div>
            <Head title="Game Keno" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrameText={"Keno"}
                            GameFrame={KenoFrame}
                            ButtonGrid={KenoButtonGrid}
                            customFrameHeader={true}
                            customFrameBoxStyles={{
                                height: {
<<<<<<< HEAD
                                    xs: "23.25rem",
                                    md: "15rem",
                                    lg: "20rem",
                                },
                                mb: { xs: 0, md: "5rem" },
=======
                                    xs: "14.375rem",
                                    md: "23.25rem",
                                    lg: "23.25rem",
                                },
                                mb: { xs: 0, md: "5rem" },

                                px: { xs: ".5625rem", md: "1.75rem" },
                                mb: 0,
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            }}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Keno;

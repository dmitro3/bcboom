import React from "react";
import { styled } from "@mui/system";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { Head } from "@inertiajs/inertia-react";
import MinesFrame from "@/Components/Game/frames/MinesFrame";
import MinesGrids from "@/Components/Game/buttongrids/MinesGrids";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Mines = () => {
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

    return (
        <div>
            <Head title="Game Mines" />
            {/* <GuestLayout> */}
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrame={MinesFrame()}
                            GameFrameText={"Mines"}
                            ButtonGrid={MinesGrids()}
                            customFrameHeader={true}
                            innerHeader={true}
                            customFrameStyles={{
                                background: "#1D234F",
                                paddingBottom: "0 !important",
                                paddingLeft: 0,

                                height: { xs: "15rem", md: "26.25rem" },
                            }}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            {/* </GuestLayout> */}
        </div>
    );
};

export default Mines;

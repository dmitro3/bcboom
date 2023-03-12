import React from "react";
import { styled } from "@mui/system";
import { Head } from "@inertiajs/inertia-react";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import GameLayout from "@/Components/Game/layout/GameLayout";
import LimboFrame from "@/Components/Game/frames/LimboFrame";
import LimboButtonGrid from "@/Components/Game/buttongrids/LimboButtonGrid";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Limbo = () => {
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
            <Head title="Game Limbo" />
            {/* <GuestLayout> */}
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrameText={"Limbo"}
                            GameFrame={LimboFrame()}
                            ButtonGrid={LimboButtonGrid()}
                            customFrameHeader={true}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            {/* </GuestLayout> */}
        </div>
    );
};

export default Limbo;

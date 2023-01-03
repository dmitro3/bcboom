import RingButtonGrid from "@/Components/Game/buttongrids/RingButtonGrid";
import RingFrame from "@/Components/Game/frames/RingFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import React from "react";

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

const Ring = () => {
    return (
        <div>
            <Head title="Game Ring" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrameText={"Ring"}
                            GameFrame={RingFrame}
                            ButtonGrid={RingButtonGrid}
                            customFrameHeader={true}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Ring;

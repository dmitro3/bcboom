import PlinkoButtonGrid from "@/Components/Game/buttongrids/PlinkoButtonGrid";
import PlinkoFrame from "@/Components/Game/frames/PlinkoFrame";
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

const Plinko = () => {
    return (
        <div>
            <Head title="Game Wheel" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrameText={"Plinko"}
                            GameFrame={PlinkoFrame}
                            ButtonGrid={PlinkoButtonGrid}
                            displayPanel={true}
                            customFrameHeader={true}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Plinko;

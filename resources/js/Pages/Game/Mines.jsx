import React from "react";
import { styled } from "@mui/system";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { Head } from "@inertiajs/inertia-react";
import MinesFrame from "@/Components/Game/frames/MinesFrame";
import MinesGrids from "@/Components/Game/buttongrids/MinesGrids";

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

const Mines = () => {
    return (
        <div>
            <Head title="Game Mines" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrame={MinesFrame}
                            GameFrameText={"Mines"}
                            ButtonGrid={MinesGrids}
                            customFrameHeader={true}
                            innerHeader={true}
                            customFrameStyles={{
                                background: "#1D234F",
                                paddingBottom: 0,
                                paddingLeft: 0,
                            }}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Mines;

import React from "react";
import { styled } from "@mui/system";
import { Head } from "@inertiajs/inertia-react";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import GameLayout from "@/Components/Game/layout/GameLayout";
import KenoFrame from "@/Components/Game/frames/KenoFrame";
import KenoButtonGrid from "@/Components/Game/buttongrids/KenoButtonGrid";

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
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Keno;

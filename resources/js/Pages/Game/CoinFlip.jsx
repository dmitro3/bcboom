import CoinFlipButtonGrid from "@/Components/Game/buttongrids/CoinFlipButtonGrid";
import CoinFlipFrame from "@/Components/Game/frames/CoinFlipFrame";
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

const CoinFlip = () => {
    return (
        <div>
            <Head title="Game Coin Flip" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrameText={"Coin Flip"}
                            GameFrame={CoinFlipFrame}
                            ButtonGrid={CoinFlipButtonGrid}
                            displayPanel={false}
                            customFrameHeader={true}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default CoinFlip;

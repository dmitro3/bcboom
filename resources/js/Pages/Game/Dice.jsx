import DiceButtonGrid from "@/Components/Game/buttongrids/DiceButtonGrid";
import DiceFrame from "@/Components/Game/frames/DiceFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
<<<<<<< HEAD
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

const Dice = () => {
=======
import { useScreenResolution } from "@/hooks/useScreeResolution";
import React from "react";

const Dice = () => {
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
            <Head title="Games Dinosaur" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
                            GameFrameText={"Dice"}
                            GameFrame={DiceFrame}
                            ButtonGrid={DiceButtonGrid}
                            customFrameHeader={true}
                            innerHeader={true}
                            customFrameBoxStyles={{
<<<<<<< HEAD
                                height: "23.25rem",
=======
                                height: "21rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            }}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Dice;

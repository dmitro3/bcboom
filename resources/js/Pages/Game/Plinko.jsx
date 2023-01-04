<<<<<<< HEAD
import WheelButtonGrid from "@/Components/Game/buttongrids/WheelButtonGrid";
import PlinkoFrame from "@/Components/Game/frames/PlinkoFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
=======
import PlinkoButtonGrid from "@/Components/Game/buttongrids/PlinkoButtonGrid";
import PlinkoFrame from "@/Components/Game/frames/PlinkoFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import React from "react";

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

const Plinko = () => {
=======
const Plinko = () => {
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
            <Head title="Game Wheel" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <GamesPageWrapper>
                        <GameLayout
<<<<<<< HEAD
                            GameFrameText={"Wheel"}
                            GameFrame={PlinkoFrame}
                            ButtonGrid={WheelButtonGrid}
                            displayPanel={false}
=======
                            GameFrameText={"Plinko"}
                            GameFrame={PlinkoFrame}
                            ButtonGrid={PlinkoButtonGrid}
                            displayPanel={true}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            customFrameHeader={true}
                        />
                    </GamesPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Plinko;

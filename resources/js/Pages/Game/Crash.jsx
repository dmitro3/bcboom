import DinosaurButtonGrids from "@/Components/Game/buttongrids/DinosaurButtonGrids";
import DinosaurFrame from "@/Components/Game/frames/DinosaurFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const Crash = () => {
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
    const [gameDetails, setGameDetails] = useState({
        id: "b30a43429d083579f525b6621e1de4a067a3764d",
        name: "Comet Crash",
        image: "https://stage.gis-static.com/games/b30a43429d083579f525b6621e1de4a067a3764d.jpeg",
        provider: "Jetgames",
    });
    useEffect(() => {
        
    }, []);
    return (
        <div>
            <Head title=" Crash " />

            <PageTemplate innerHeader={true}>
                <GamesPageWrapper>
                    <GameLayout
                        ButtonGrid={DinosaurButtonGrids()}
                        GameFrameText={"Crash"}
                        GameFrame={DinosaurFrame()}
                        customFrameHeader={true}
                    />
                </GamesPageWrapper>
            </PageTemplate>
        </div>
    );
};

export default Crash;

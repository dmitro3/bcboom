import DinosaurButtonGrids from "@/Components/Game/buttongrids/DinosaurButtonGrids";
import DinosaurFrame from "@/Components/Game/frames/DinosaurFrame";
import GameLayout from "@/Components/Game/layout/GameLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { initializeGame } from "@/redux/game/game-slice";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalState } from "@/redux/auth/auth-slice";

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
    const [gameDetails, setGameDetails] = useState({});
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profile);
    // useEffect(() => {
    //     async function fetchGameDetails() {
    //         let response = await dispatch(initializeGame({ name: "crash" }));
    //         response = response?.payload?.data;
    //         if (response) setGameDetails(response);
    //     }
    //     if (profile?.email) {
    //         fetchGameDetails();
    //     } else {
    //         dispatch(
    //             setAuthModalState({
    //                 open: true,
    //                 tab: 0,
    //             })
    //         );
    //     }
    // }, []);
    return (
        <div>
            <Head title=" Crash " />

            <PageTemplate innerHeader={true}>
                <GamesPageWrapper>
                    <GameLayout
                        // ButtonGrid={}
                        GameFrameText={"Crash"}
                        GameFrame={<DinosaurFrame gameDetails={gameDetails} />}
                        customFrameHeader={true}
                    />
                </GamesPageWrapper>
            </PageTemplate>
        </div>
    );
};

export default Crash;

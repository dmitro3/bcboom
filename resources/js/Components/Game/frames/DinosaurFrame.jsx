import { styled } from "@mui/system";
const Frame = styled("div")(() => ({
    height: "600px",
    width: "100%",
    maxWidth: "770px",

    '.jet_header': {
        display: 'none'
    },
    '.table_btns': {
        display: 'none'
    },
    '.section_history': {
        display: 'none'
    },
    '.more_tend_wr .game-recent' : {
        display: 'none'
    },
    // ".jet_header, .table_btns, .section_history, .more_tend_wr .game-recent": {
    //     display: "none",
    // },
}));

const DinosaurFrame = ({ gameDetails }) => {
    if (gameDetails?.result === undefined) return null;
    const gameUrl = JSON.parse(gameDetails?.result).url;
    console.log(gameUrl);
    return (
        <Frame>
            {/* <iframe
                src="https://staging.slotegrator.com/api/index.php/v1/games/launch/WDNTaW5QR0J5TDNIL3E4emphWXEzcUx1TXRBREpFYTdoS2w1M2xtTHZSNExZeUVTTmxReFd3bzcveFQxdzVKYjFHR1lRTTlYcXdnTThhWlNMR1g5cEhYQnN1QjdYSHBnK0tPSEVXbnc2aGZLZUN3UHJtNkhtRmJpNmdnV0hpQWVHaGRjM1VGYlNBeW1ZNUtRWU1jU3RoOHlOOGlITkVqUVBjN0ZDOW5URWlVemtzc1lHTFRNZnRUdE5Hdy92alR5WTRNdVE3YVI4SkRVeEZ4QmkvZ1l1OG1wMFlDZ0p0akFEVFBPOVdlcmYyNmRmQ2o0RnZWMFF4UVVhYUt1ejZPMU84MmM3ZW5Wcm02NmdDYm56R1phQWNRR1dqc1pSdFYwK1F5NkZ0RWJCOGlyS09vZWFNbTJqY2FuL0tuQ1pWM0h2MExYWGJCRml1RGpqR3FqSTJJbys5OFNibWJmUEovUlgvNGkzd1oyWkxSWE96UTNGOGtxMDhEN2Z2aEtuajF4c0orbzdhUlV0aXlZd1doeUtMeUp1QnJzWDhzalJDRWhTakZLd3QzVUpaY0IvRlNocElvVWh2OFBVRUJBQUtZRWFiNkw4clVNbDJBVEIrWEdyVHJvVyt5U2xlZGpsTkY4V09td0xXT3h5bGtUUmhFaVg5N2NPWE9lVTRQcFdpTlZOOElFeFhpUEZObi9IUGZIeGJnczByT0gvWnVlTmVMVXVxNFJ3RURGVCtUMHhoeEx1b1g3OHhObWhHMTFWVHV2R3k0OXlYTlFNUGtlalAvbjZOYTNxNWxTcTVyb1Z2emYzQ3FZK1ZvMDhMTnpiWFFDKy9RTk1FblRhTDNHMGNPcEllMWZ5ZHljY1RGYk15WjR3VHlaV0JCSldPQ2NaQitUNWZmS1VaT3BRMFdSVW5iZDEyV1h2cmpHaDl1dURaUFY%3D"
                width="100%"
                height="100%"
            ></iframe> */}
            <iframe
                src={gameUrl}
                width="100%"
                height="100%"
                sandbox="allow-scripts allow-modal"
                name="crashFrame"
                title="Crash game"
            ></iframe>
        </Frame>
    );
};

export default DinosaurFrame;

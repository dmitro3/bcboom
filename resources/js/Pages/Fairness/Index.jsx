import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import img from "../../../../public/images/fairness/headerBg.png";
import imgmobile from "../../../../public/images/fairness/headerBgmobile.png";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const FairnessPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "0em",
    width: "100%",
    height: "100%",
}));

const FairnessImageHeader = styled("div")(({ isMobile }) => ({
    background: `url(${isMobile ? imgmobile : img})`,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    padding: isMobile ? "1.25rem" : "4.125rem",
    paddingLeft: isMobile ? "1.25rem" : "4.125rem",
    margin: "0 25px",

    "& p": {
        color: "#fff",
        lineHeight: "2.25rem",
        fontWeight: "900",
        "&:nth-child(1)": {
            fontSize: isMobile ? "1.4rem" : "3rem",
            paddingBottom: isMobile ? ".5rem" : "1.5rem",
        },
        "&:nth-child(2)": {
            fontSize: isMobile ? "1.4rem" : "3rem",
            paddingBottom: isMobile ? ".5rem" : "2rem",
        },
        "&:nth-child(3)": {
            fontSize: isMobile ? ".6rem" : ".9rem",
            lineHeight: "1.2rem",
            fontWeight: "medium",
            color: "#FFEF61",
        },
    },
}));
const FairnessIndex = () => {
  
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Fairnesss" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <FairnessPageWrapper>
                        <FairnessImageHeader isMobile={isMobile}>
                            <p>HOW TO CHECK</p>
                            <p>FAIRNESS?</p>
                            <p>
                                Every Lucky result on BCBOOM is <br /> absolutely
                                random. Check it yourself!
                            </p>
                        </FairnessImageHeader>
                    </FairnessPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default FairnessIndex;

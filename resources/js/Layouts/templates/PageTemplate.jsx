import HomeCarousel from "@/Components/Carousel/carousels/HomeCarousel";
import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import { styled } from "@mui/system";
import InnerHeader from "../../Components/Header/InnerHeader";
import mainBg from "../../../../public/images/others/mainBg.svg";
import footercut from "../../../../public/images/others/footercut.png";
import { useScreenResolution } from "@/hooks/useScreeResolution";
<<<<<<< HEAD
=======
import FooterActions from "@/Components/Footer/FooterActions";
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
const PageTemplateWrapper = styled("div")(({ isMobile }) => ({
    background: `url(${mainBg})`,
    width: isMobile ? "100%" : "95%",
    height: "fit-content",
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
}));
const FooterCutImage = styled("div")(({ theme }) => ({
    height: "100px",
    width: "100%",
    position: "absolute",
    background: `url(${footercut})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
<<<<<<< HEAD
    bottom: "-70px",
=======
    bottom: "-27px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    zIndex: 100,
}));
const PageTemplate = ({
    innerHeader,
    homeCarousel,
    gridWithHeader,
    children,
}) => {
    const { isMobile } = useScreenResolution();
    return (
        <PageTemplateWrapper isMobile={isMobile}>
            {innerHeader && <InnerHeader />}
            {homeCarousel && <HomeCarousel />}
            {children}
            {gridWithHeader && (
                <ImageGridWithHeader gridItems={gridWithHeader} />
            )}
<<<<<<< HEAD
=======
            {!isMobile && <FooterActions />}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
            {!isMobile && <FooterCutImage />}
        </PageTemplateWrapper>
    );
};

export default PageTemplate;

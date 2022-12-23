import HomeCarousel from "@/Components/Carousel/carousels/HomeCarousel";
import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import { styled } from "@mui/system";
import InnerHeader from "../../Components/Header/InnerHeader";
import mainBg from "../../../../public/images/others/mainBg.svg";
import footercut from "../../../../public/images/others/footercut.png";
import { useScreenResolution } from "@/hooks/useScreeResolution";
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
    backgroundSize: "contain",
    bottom: "-70px",
    zIndex: 100,
}));
const PageTemplate = ({ innerHeader, homeCarousel, gridWithHeader }) => {
    const { isMobile } = useScreenResolution();
    return (
        <PageTemplateWrapper isMobile={isMobile}>
            {innerHeader && <InnerHeader />}
            {homeCarousel && <HomeCarousel />}
            {gridWithHeader && (
                <ImageGridWithHeader gridItems={gridWithHeader} />
            )}
            <FooterCutImage />
        </PageTemplateWrapper>
    );
};

export default PageTemplate;

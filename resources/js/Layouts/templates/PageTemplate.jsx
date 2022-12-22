import HomeCarousel from "@/Components/Carousel/carousels/HomeCarousel";
import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import { styled } from "@mui/system";
import InnerHeader from "../../Components/Header/InnerHeader";
import mainBg from '../../'
const PageTemplateWrapper = styled("div")(() => ({
    background: "url()",
    width: "95%",
    height: "fit-content",
    borderRadius: "10px",
}));
const PageTemplate = ({ innerHeader, homeCarousel, gridWithHeader }) => {
    return (
        <PageTemplateWrapper>
            {innerHeader && <InnerHeader />}
            {homeCarousel && <HomeCarousel />}
            {gridWithHeader && (
                <ImageGridWithHeader gridItems={gridWithHeader} />
            )}
        </PageTemplateWrapper>
    );
};

export default PageTemplate;

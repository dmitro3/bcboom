import HomeCarousel from "@/Components/Carousel/carousels/HomeCarousel";
import ImageGridWithHeader from "@/Components/ImageGrid/ImageGridWithHeader";
import { styled } from "@mui/system";
import InnerHeader from "../../Components/Header/InnerHeader";
import mainBg from '../../../../public/images/others/mainBg.svg'
const PageTemplateWrapper = styled("div")(() => ({
    background: `url(${mainBg})`,
    width: "95%",
    height: "fit-content",
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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

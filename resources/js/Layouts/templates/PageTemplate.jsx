import CustomCarousel from "@/Components/Carousel/Carousel";
import HomeCarousel from "@/Components/Carousel/carousels/HomeCarousel";
import { styled } from "@mui/system";
import InnerHeader from "../../Components/Header/InnerHeader";

const PageTemplateWrapper = styled("div")(() => ({
    background: "rgb(39,44,75)",
    width: "95%",
    height: "100%",
    borderRadius: "10px",
}));
const PageTemplate = ({ innerHeader, homeCarousel }) => {
    return (
        <PageTemplateWrapper>
            {innerHeader && <InnerHeader />}
            {homeCarousel && <HomeCarousel />}
        </PageTemplateWrapper>
    );
};

export default PageTemplate;

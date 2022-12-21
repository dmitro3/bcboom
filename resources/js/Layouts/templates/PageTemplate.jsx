import { styled } from "@mui/system";
import InnerHeader from "../../Components/Header/InnerHeader";

const PageTemplateWrapper = styled("div")(() => ({
    background: "rgb(39,44,75)",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
}));
const PageTemplate = ({ innerHeader }) => {
    return (
        <PageTemplateWrapper>
            {innerHeader && <InnerHeader />}
        </PageTemplateWrapper>
    );
};

export default PageTemplate;

import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";

const PersonalCenterPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
}));

const PersonalCenter = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Personal Center" />
            <GuestLayout>
                <PageTemplate innerHeader={true}></PageTemplate>
            </GuestLayout>
        </>
    );
};

export default PersonalCenter;

import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import centerIcon from "../../../../public/images/user/userIcon.svg";
const PersonalCenterPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
}));



const ReferralIndex = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Referral" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PersonalCenterPageWrapper>
                        <ImageGridLayout
                            item={{
                                title: "Referral",
                                icon: centerIcon,
                            }}
                            index={0}
                            page="personal-center"
                        >
                           <div>welcome</div>
                        </ImageGridLayout>
                    </PersonalCenterPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default ReferralIndex;

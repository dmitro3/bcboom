import FullVIPBonus from "@/Components/Cards/FullVIPBonus";
import MyVIPLevel from "@/Components/Cards/VIPLevel";
import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { Flex } from "@/Components/UtilComponents/Flex";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import goldencup from "../../../../public/images/svg/goldencup.svg";

const VIPIndex = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="VIP Rank System" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <ImageGridLayout
                        item={{ title: "VIP Rank System", icon: goldencup }}
                        index={0}
                    >
                        <div
                            style={{
                                marginTop: "60px",
                                zIndex: 500,
                                position: "relative",
                            }}
                        >
                            <Flex alignItems='normal' justifyContent='stretch' gap='40px'>
                                <MyVIPLevel />
                                <FullVIPBonus />
                            </Flex>
                        </div>
                    </ImageGridLayout>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default VIPIndex;

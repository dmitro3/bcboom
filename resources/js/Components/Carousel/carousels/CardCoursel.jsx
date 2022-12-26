import GamesCarouseCard from "@/Components/Cards/GamesCarouseCard";
import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import React from "react";
import CustomCarousel from "../Carousel";

const CardCoursel = ({ cardItems }) => {
    const item = cardItems[0];
    const { isMobile } = useScreenResolution();
    return (
        <ImageGridLayout item={item} index={0}>
            <div
                style={{ marginTop: "60px",  zIndex: 500, position: "relative", }}
            >
                <CustomCarousel
                    autoplay={false}
                    rowPerCount={isMobile ? 1 : 4}
                    paging={false}
                >
                    {item.cards.map((item, index) => (
                        <div className="testimoni--wrapper">
                            <GamesCarouseCard card={item} key={index} />
                        </div>
                    ))}
                </CustomCarousel>
            </div>
        </ImageGridLayout>
    );
};

export default CardCoursel;

import GamesCarouseCard from "@/Components/Cards/GamesCarouseCard";
import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import React from "react";
import CustomCarousel from "../Carousel";
import prev from "../../../../../public/images/user/prev.png";
import next from "../../../../../public/images/user/next.png";
const CardCoursel = ({ cardItems }) => {
    const item = cardItems[0];
    const { isMobile } = useScreenResolution();
    return (
        <ImageGridLayout item={item} index={0}>
            <div
                style={{ marginTop: "60px", zIndex: 500, position: "relative" }}
            >
                <CustomCarousel
                    autoplay={false}
                    rowPerCount={isMobile ? 1 : 4}
                    paging={false}
                    prevArrow={<img src={prev} alt="prev"   />}
                    nextArrow={<img src={next} alt="next"  />}
                >
                    {item.cards.map((item, index) => (
                        <div className="testimoni--wrapper">
                            <GamesCarouseCard card={item} key={index} index={index} />
                        </div>
                    ))}
                </CustomCarousel>
            </div>
        </ImageGridLayout>
    );
};

export default CardCoursel;

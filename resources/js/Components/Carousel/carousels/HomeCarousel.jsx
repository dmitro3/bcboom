import React from "react";
import carouseImage1 from "../../../../../public/images/carousel/saba-new-baner.png";
import carouseImage2 from "../../../../../public/images/carousel/saba-new-baner-2.png";
import CustomCarousel from "../Carousel";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import prev from "../../../../../public/images/user/prev.png";
import next from "../../../../../public/images/user/next.png";
const HomeCarousel = () => {
    const { isMobile } = useScreenResolution();
    console.log('isMobile', isMobile)
    const carouseImages = Array.from({ length: isMobile ? 3 : 10 }).map((_, i) => {
        if (i % 2 === 0) return carouseImage1;
        return carouseImage2;
    });
    return (
        <div>
            <CustomCarousel
                rowPerCount={isMobile ? 1: 2}
                paging={!isMobile}
                dots={!isMobile}
                infinite={!isMobile}
                prevArrow={
                   isMobile ? <img
                        src={prev}
                        alt="prev"
                        style={{ height: "30px", width: "30px" }}
                    />  : null
                }
                nextArrow={
                    isMobile ? 
                    <img
                        src={next}
                        alt="next"
                        style={{ height: "30px", width: "30px" }}
                    />
                : null}
                customImageHeight={isMobile && "280px" }
            >
                {carouseImages.map((image, i) => (
                    <div className="testimoni--wrapper" key={i}>
                        <img src={image} alt="carousel image" style={{height: isMobile && '200px'}} />
                    </div>
                ))}
            </CustomCarousel>
        </div>
    );
};

export default HomeCarousel;

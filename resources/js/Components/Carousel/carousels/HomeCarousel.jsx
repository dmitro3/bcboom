import React from "react";
import carouseImage1 from "../../../../../public/images/carousel/saba-new-baner.png";
import carouseImage2 from "../../../../../public/images/carousel/saba-new-baner-2.png";
import CustomCarousel from "../Carousel";
import { useScreenResolution } from "@/hooks/useScreeResolution";
const HomeCarousel = () => {
    const {isMobile} = useScreenResolution();
    return (
        <div>
            <CustomCarousel rowPerCount={isMobile ? 1 : 2}>
                <div className="testimoni--wrapper">
                    <img src={carouseImage1} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage2} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage1} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage2} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage1} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage2} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage1} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage2} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage1} alt="carousel image" />
                </div>
                <div className="testimoni--wrapper">
                    <img src={carouseImage2} alt="carousel image" />
                </div>
            </CustomCarousel>
        </div>
    );
};

export default HomeCarousel;

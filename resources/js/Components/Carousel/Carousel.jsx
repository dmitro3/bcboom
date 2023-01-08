import React from "react";
import Slider from "react-slick";
import { StyledWrapper } from "../../../css/slider-wrapper";
import carouseImage1 from "../../../../public/images/carousel/saba-new-baner.png";
import carouseImage2 from "../../../../public/images/carousel/saba-new-baner-2.png";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenResolution } from "@/hooks/useScreeResolution";
const Wrapper = styled("div")(({ theme }) => ({
    padding: "20px",
    textAlign: "center",
    width: "100%",
    overflow: "hidden",
}));
const CustomCarousel = ({
    children,
    rowPerCount,
    autoplay = true,
    paging = true,
    prevArrow,
    nextArrow,
}) => {
    const settings = {
        dots: true,
        autoplay: autoplay,
        autoplaySpeed: 4300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 2000,
        slidesPerRow: rowPerCount,
        adaptiveHeight: true,
        accessibility: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        arrows: !!prevArrow,
        appendDots: (dots) => <ul>{dots}</ul>,
        ...(paging && {
            customPaging: (i) => (
                <div className="ft-slick__dots--custom">
                    <div className="loading" />
                </div>
            ),
        }),
    };

    const mobileSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { isMobile } = useScreenResolution();
    const carousel_settings = !isMobile
        ? { ...settings }
        : { ...mobileSettings };

    return (
        <Wrapper>
            <StyledWrapper>
                <Slider {...carousel_settings}>
                    {/* <div className="testimoni--wrapper">
                        <img src={carouseImage1} alt="carousel image" />
                    </div>
                    <div className="testimoni--wrapper">
                        <img src={carouseImage2} alt="carousel image" />
                    </div> */}
                    {/* <div
                        className="testimoni--wrapper"
                        style={{ color: "red" }}
                    >
                        <p>Testimoni One</p>
                    </div>
                    <div className="testimoni--wrapper">
                        <p>Testimoni Two</p>
                    </div>
                    <div className="testimoni--wrapper">
                        <p>Testimoni Three</p>
                    </div>
                    <div className="testimoni--wrapper">
                        <p>Testimoni 4</p>
                    </div>
                    <div className="testimoni--wrapper">
                        <p>Testimoni 5</p>
                    </div>
                    <div className="testimoni--wrapper">
                        <p>Testimoni 6</p>
                    </div> */}
                    {children}
                </Slider>
            </StyledWrapper>
        </Wrapper>
    );
};

export default CustomCarousel;

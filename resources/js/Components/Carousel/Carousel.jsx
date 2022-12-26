import React from "react";
import Slider from "react-slick";
import { StyledWrapper } from "../../../css/slider-wrapper";
import carouseImage1 from "../../../../public/images/carousel/saba-new-baner.png";
import carouseImage2 from "../../../../public/images/carousel/saba-new-baner-2.png";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        arrows: false,
        adaptiveHeight: true,
        accessibility: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        ...(paging && {
            customPaging: (i) => (
                <div className="ft-slick__dots--custom">
                    <div className="loading" />
                </div>
            ),
        }),
    };
    return (
        <Wrapper>
            <StyledWrapper>
                <Slider {...settings}>
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

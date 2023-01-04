import React from "react";
import coins from "../../../../assets/games/coin2.svg";
import bomb from "../../../../assets/games/Bomb.svg";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { minesBettingData } from "@/data/games";
import BettingBox from "../carousel/BettingBox";
<<<<<<< HEAD
=======
import { useScreenResolution } from "@/hooks/useScreeResolution";
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa

let carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
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

const Frame = styled("div")(() => ({
<<<<<<< HEAD
    height: { xs: "22rem", md: "23.25rem" },
=======
    height: { xs: "14.375rem", md: "26.25rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
<<<<<<< HEAD
    justifyContent: "center",
=======
    justifyContent: "space-between",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
}));

const Item = styled("div")(() => ({
    height: "3.125rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#296CD3",
    borderRadius: ".3125rem",
    fontWeight: 900,
    fontSize: "1.5rem",
    color: "#90A3C7",
    cursor: "pointer",
    transition: "all .1s ease-out",
    "&:hover": {
        transform: "scale(1.3) ",
        background: "transparent",
    },
}));

const gridArray = new Array(25).fill(0);

<<<<<<< HEAD
const MinesFrame = () => {
    return (
        <Frame>
            <Box
                sx={{
                    width: { xs: "13%", sm: "24%", md: "20%" },
                    height: "100%",
                    display: "flex",
                    justifyContent: {
                        xs: "flex-start",
                        sm: "center",
                        md: "center",
                    },
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "3.2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "6rem",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        COINS
                    </Typography>
                    <img src={coins} />
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        22
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: { xs: "74%", sm: "52%", md: "60%" },
                    height: { xs: "100%", md: "100%" },
                    position: "relative",
                    top: { xs: 0, md: "-1.5rem" },
                    backgroundColor: "#333965",
                    py: "1rem",
                    px: ".5rem",
                    display: "flex",
                    //justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "16rem",
                    }}
                >
                    <Grid container spacing={1}>
                        {gridArray.map((item, idx) => {
                            return (
                                <Grid item xs={2.4}>
                                    <Item key={idx}>?</Item>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        mt: "2.8125rem",
                        width: "80%",
                    }}
                >
                    <Slider {...carouselSettings}>
                        {minesBettingData?.map((data, index) => (
                            <BettingBox
                                key={index}
                                multiplier={data.multiplier}
                                hits={data.hits}
                            />
                        ))}
                    </Slider>
                </Box>
            </Box>
            <Box
                sx={{
                    width: { xs: "13%", sm: "24%", md: "20%" },
                    height: "100%",
                    display: "flex",
                    justifyContent: {
                        xs: "flex-end",
                        sm: "center",
                        md: "center",
                    },
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "3.2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "6.5rem",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        COINS
                    </Typography>
                    <img src={bomb} />
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        3
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    mt: "2.8125rem",
=======
const gridArrayMobile = new Array(20).fill(0);

const MinesFrame = () => {
    const { isMobile } = useScreenResolution();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
            }}
        >
            <Frame>
                <Box
                    sx={{
                        width: { xs: "13%", sm: "24%", md: "20%" },
                        height: "100%",
                        display: "flex",
                        justifyContent: {
                            xs: "flex-start",
                            sm: "center",
                            md: "center",
                        },
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "3.2rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "6rem",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 800,
                                fontSize: { xs: ".75rem", md: ".875rem" },
                                textAlign: "center",
                            }}
                        >
                            COINS
                        </Typography>
                        <img src={coins} />
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 800,
                                fontSize: { xs: ".75rem", md: ".875rem" },
                                textAlign: "center",
                            }}
                        >
                            22
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: { xs: "70%", sm: "52%", md: "60%" },
                        height: { xs: "15rem", md: "100%" },
                        position: "relative",
                        top: { xs: 0, md: "-1.5rem" },
                        backgroundColor: "#333965",
                        py: { xs: ".5rem", md: "1rem" },
                        px: ".3rem",
                        display: "flex",
                        //justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "14rem",
                                md: "16rem",
                            },
                        }}
                    >
                        <Grid container spacing={1}>
                            {isMobile
                                ? gridArrayMobile.map((item, idx) => {
                                      return (
                                          <Grid item xs={2.4} md={2.4}>
                                              <Item key={idx}>?</Item>
                                          </Grid>
                                      );
                                  })
                                : gridArray.map((item, idx) => {
                                      return (
                                          <Grid item xs={2.4} md={2.4}>
                                              <Item key={idx}>?</Item>
                                          </Grid>
                                      );
                                  })}
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", md: "block" },
                            mt: "2.8125rem",
                            width: "80%",
                        }}
                    >
                        <Slider {...carouselSettings}>
                            {minesBettingData?.map((data, index) => (
                                <BettingBox
                                    key={index}
                                    multiplier={data.multiplier}
                                    hits={data.hits}
                                />
                            ))}
                        </Slider>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: { xs: "13%", sm: "24%", md: "20%" },
                        height: "100%",
                        display: "flex",
                        justifyContent: {
                            xs: "flex-end",
                            sm: "center",
                            md: "center",
                        },
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "3.2rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "6.5rem",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 800,
                                fontSize: { xs: ".75rem", md: ".875rem" },
                                textAlign: "center",
                            }}
                        >
                            COINS
                        </Typography>
                        <img src={bomb} />
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 800,
                                fontSize: { xs: ".75rem", md: ".875rem" },
                                textAlign: "center",
                            }}
                        >
                            3
                        </Typography>
                    </Box>
                </Box>
            </Frame>
        </Box>
    );
};

export default MinesFrame;

/**
 *   <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    mt: "2.8125rem",
                    mb: "2.8125rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    width: { xs: "50%", sm: "60%", md: "80%" },
                }}
            >
                <Slider {...carouselSettings}>
                    {minesBettingData?.map((data, index) => (
                        <BettingBox
                            key={index}
                            multiplier={data.multiplier}
                            hits={data.hits}
                        />
                    ))}
                </Slider>
            </Box>
<<<<<<< HEAD
        </Frame>
    );
};

export default MinesFrame;
=======
 */
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa

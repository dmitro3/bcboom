import { styled } from "@mui/system";
import React from "react";
import titleBg from "../../../../public/images/svg/titlebg.svg";
const GridWrapper = styled("div")(({}) => ({
   
}));

const GridItems = styled("div")(({}) => ({
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(5, minmax(100px, 1fr))",
    marginTop: "60px",
    // width: "100%",
    "@media (max-width: 700px)": {
        gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
    },
    "@media (max-width: 300px)": {
        gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
    },
}));

const SectionWrapper = styled("div")(({}) => ({
    height: "fit-content",
    overflow: "hidden",
    padding: "25px",
    margin: "25px",
    background: "#1D2036",
    borderRadius: "10px",
    position: "relative",
}));
const GridItemImage = styled("img")(({ height, width }) => ({
    height: height || "100px",
    width: width || "100px",
    cursor: "pointer",
    borderRadius: "10px",
    "&:hover": {
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
    },
}));
const GridItemTitle = styled("div")(({}) => ({
    position: "absolute",
    top: "0px",
    left: "0px",
    // background: "#1D2036",
    background: `url(${titleBg})`,
    display: "flex",
    height: "50px",
    width: "250px",
    alignItems: "center",
    paddingLeft: "20px",
    "& img": {
        height: "20px",
    },
    "& p": {
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        marginLeft: "10px",
    },

    // "&::after": {
    //     content: '""',
    //     position: "absolute",
    //     top: "20px",
    //     left: "0",
    //     display: "inline-block",
    //     clipPath: "polygon(0 0, 100% 0, 83% 31%, 0 33%)",
    //     background: "white",
    //     height: "150px",
    //     width: "350px",
    // },
}));

const ImageGridWithHeader = ({ gridItems }) => {
    console.log("grid: items", gridItems);
    return (
        <GridWrapper>
            {gridItems.map((item, index) => (
                <SectionWrapper key={index}>
                    <GridItemTitle>
                        <img src={item?.icon} alt="" />
                        <p>{item?.title}</p>
                    </GridItemTitle>
                    <GridItems>
                        {item.images.map((image, index) => (
                            <GridItemImage
                                key={index}
                                src={image.image}
                                width={item?.imageWidth}
                                height={item?.imageHeight}
                            />
                        ))}
                    </GridItems>
                </SectionWrapper>
            ))}
        </GridWrapper>
    );
};

export default ImageGridWithHeader;

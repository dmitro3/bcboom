import { styled } from "@mui/system";
import React from "react";
import titleBg from "../../../../public/images/svg/titlebg.svg";
import leftcut from "../../../../public/images/others/leftcut.svg";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { Link } from "@inertiajs/inertia-react";
const GridWrapper = styled("div")(({}) => ({}));

const GridItems = styled("div")(({ perColumn }) => ({
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: `repeat(${perColumn}, minmax(100px, 1fr))`,
    marginTop: "60px",
    // width: "100%",
    "@media (max-width: 700px)": {
        gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
    },
    "@media (max-width: 300px)": {
        gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
    },
    position: "relative",
    zIndex: 400,
}));

const SectionWrapper = styled("div")(({ isMobile }) => ({
    height: "fit-content",
    overflow: "hidden",
    padding: isMobile ? "20px 10px" : "25px",
    margin: "25px",
    background: "#1D2036",
    borderRadius: "10px",
    position: "relative",
}));
const GridItemImage = styled("img")(({ height, width, hoverEffect }) => ({
    height: height || "100px",
    width: width || "100px",
    cursor: "pointer",
    borderRadius: "10px",
    position: "relative",
    "&:hover": {
        transform: hoverEffect !== "overlay" && "scale(1.05)",
        transition: "all 0.3s ease-in-out",
    },
}));
const GridLeftCut = styled("div")(({}) => ({
    position: "absolute",
    top: "-22px",
    left: "0",
    background: `url(${leftcut})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 200,
    height: "160px",
    width: "340px",
}));
const GridItemTitle = styled("div")(({}) => ({
    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: 300,
    // background: "#1D2036",
    background: `url(${titleBg})`,
    backgroundRepeat: "no-repeat",
    display: "flex",
    height: "50px",
    width: "250px",
    alignItems: "center",
    paddingLeft: "20px",
    "& img": {
        height: "15px",
    },
    "& p": {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
        marginLeft: "10px",
    },
}));

const SeeMore = ({ link }) => {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                height: "100%",
                width: "100%",
                background: "#1D2036",
                padding: "5px 10px",
                borderRadius: "10px",
                cursor: "pointer",
            }}
        >
            <Link href={link}>
                <p
                    style={{
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}
                >
                    See More
                </p>
            </Link>
        </div>
    );
};

const ImageGridWithHeader = ({ gridItems }) => {
    const { isMobile } = useScreenResolution();
    return (
        <GridWrapper>
            {gridItems.map((item, index) => (
                <SectionWrapper
                    key={index}
                    isMobile={isMobile}
                    margin={item.margin}
                >
                    <GridLeftCut />
                    <GridItemTitle>
                        <img src={item?.icon} alt="" />
                        <p>{item?.title}</p>
                    </GridItemTitle>
                    <GridItems perColumn={item.perColumn}>
                        {item.images.map((image, index) => (
                            <Link href={image.link}>
                                <GridItemImage
                                    key={index}
                                    src={image.image}
                                    width={item?.imageWidth}
                                    height={item?.imageHeight}
                                    hoverEffect={item?.hoverEffect}
                                />
                            </Link>
                        ))}
                    </GridItems>
                </SectionWrapper>
            ))}
        </GridWrapper>
    );
};

export default ImageGridWithHeader;

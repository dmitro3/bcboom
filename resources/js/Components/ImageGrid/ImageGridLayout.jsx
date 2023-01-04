import React from "react";
import titleBg from "../../../../public/images/svg/titlebg.svg";
import leftcut from "../../../../public/images/others/leftcut.svg";
import gridbg from "../../../../public/images/others/gridbg.png";
import { styled } from "@mui/system";
import { useScreenResolution } from "@/hooks/useScreeResolution";

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
        height: "25px",
    },
    "& p": {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        marginLeft: "10px",
    },
}));

const GridLeftCut = styled("div")(({ isMobile }) => ({
    position: "absolute",
    top: "-22px",
    left: "0",
    background: `url(${leftcut})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 200,
    height: isMobile ? "153px" : "160px",
    width: "340px",
}));

const SectionWrapper = styled("div")(({ isMobile, margin, page }) => ({
    // background: `url(${gridbg})`,
    height: "fit-content",
    overflow: "hidden",
    padding: isMobile ? "20px 10px" : "25px",
<<<<<<< HEAD
    margin: margin ? "25px" : "0 25px 25px 25px",
=======
    margin: margin ? margin : "0 25px 25px 25px",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    marginTop: page === "vip" && "50px",
    background: "#1D2036",
    borderRadius: "10px",
    position: "relative",
}));

const ImageGridLayout = ({ item, page, index, children }) => {
    const { isMobile } = useScreenResolution();

    return (
        <SectionWrapper
            key={index}
            isMobile={isMobile}
            margin={item.margin}
            page={page}
        >
            <GridLeftCut isMobile={isMobile} />
            <GridItemTitle>
                <img
                    src={item?.icon}
                    alt=""
                    style={{ height: item.iconSize }}
                />
                <p>{item?.title}</p>
            </GridItemTitle>
            {children}
        </SectionWrapper>
    );
};

export default ImageGridLayout;

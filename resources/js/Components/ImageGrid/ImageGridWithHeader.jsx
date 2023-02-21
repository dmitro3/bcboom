import { styled } from "@mui/system";
import React, { useState } from "react";

import play from "../../../../public/images/svg/overlayplay.svg";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { Link } from "@inertiajs/inertia-react";
import Button from "../Button/Button";
import { Inertia } from "@inertiajs/inertia";
import ImageGridLayout from "./ImageGridLayout";
const GridWrapper = styled("div")(({}) => ({}));

const GridItems = styled("div")(({ perColumn, page }) => ({
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: `repeat(${perColumn}, minmax(100px, 1fr))`,
    marginTop: "60px",
    // width: "100%",
    "@media (max-width: 800px)": {
        gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
    },
    "@media (max-width: 500px)": {
        gridTemplateColumns:
            !["home", "games"].includes(page) &&
            "repeat(1, minmax(100px, 1fr))",
    },
    position: "relative",
    zIndex: 400,
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

const OverLay = ({ item, parent, visible }) => {
    return (
        <div
            style={{
                visibility: visible ? "visible" : "hidden",
                position: "absolute",
                bottom: "0",
                right: "0",
                height: "100%",
                width: "100%",
                background: "rgba(43, 41, 86, 0.8)",
                padding: "5px 10px",
                borderRadius: "10px",
                cursor: "pointer",
                zIndex: 500,
                transition: "visibility 0.3s linear opacity 0.3s linear;",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: "100%",
                    alignItems: "center",
                }}
            >
                {parent.hoverText ? (
                    <div style={{ margin: "auto 0" }}>
                        <Button
                            text={parent.hoverText}
                            onSubmit={() => Inertia.visit(item.link)}
                            background="#3586FF"
                            styles={{
                                padding: "10px 20px",
                                borderRadius: "15px",
                            }}
                        />
                    </div>
                ) : (
                    <>
                        <p
                            style={{
                                color: "#fff",
                                fontSize: "18px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                        >
                            {item?.title}
                        </p>
                        <Link href={item.link}>
                            <img src={play} alt="" style={{ height: "50px" }} />
                        </Link>
                        <p>Pragmatic play</p>
                    </>
                )}
            </div>
        </div>
    );
};

const ImageGridWithHeader = ({ gridItems }) => {
    const { isMobile } = useScreenResolution();
    const [showOverlay, setShowOverlay] = useState(-1);
    return (
        <GridWrapper>
            {gridItems.map((item, index) => (
                <ImageGridLayout key={index} item={item} index={index}>
                    <>
                        <GridItems perColumn={item.perColumn} page={item.page}>
                            {item.images
                                .slice(
                                    0,
                                    isMobile && ["home"].includes(item.page)
                                        ? item.countOnMobile
                                        : item?.images.length
                                )
                                .map((image, index) => {
                                    return (
                                        <div
                                            style={{ position: "relative" }}
                                            onMouseEnter={() =>
                                                setShowOverlay(index)
                                            }
                                            onMouseLeave={() =>
                                                setShowOverlay(-1)
                                            }
                                        >
                                            {item.hoverEffect === "overlay" ? (
                                                <>
                                                    <OverLay
                                                        item={image}
                                                        parent={item}
                                                        visible={
                                                            showOverlay ===
                                                                index &&
                                                            item.hoverEffect ===
                                                                "overlay"
                                                        }
                                                    />
                                                    <GridItemImage
                                                        key={index}
                                                        src={image.image}
                                                        width={item?.imageWidth}
                                                        height={
                                                            item?.imageHeight
                                                        }
                                                        hoverEffect={
                                                            item?.hoverEffect
                                                        }
                                                    />
                                                </>
                                            ) : (
                                                <Link href={image.link}>
                                                    <GridItemImage
                                                        key={index}
                                                        src={image.image}
                                                        width={item?.imageWidth}
                                                        height={
                                                            item?.imageHeight
                                                        }
                                                        hoverEffect={
                                                            item?.hoverEffect
                                                        }
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                        </GridItems>
                        {item.page === "home" && item.countOnMobile === 4 && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "30px",
                                }}
                            >
                                <Button
                                    text="See more"
                                    background={"#3586FF"}
                                    // styles={{
                                    padding="10px 30px"
                                    borderRadius="15px"
                                    // }}
                                    onSubmit={() => {
                                        Inertia.visit(item.urlForMore);
                                    }}
                                />
                            </div>
                        )}
                    </>
                </ImageGridLayout>
            ))}
        </GridWrapper>
    );
};

export default ImageGridWithHeader;

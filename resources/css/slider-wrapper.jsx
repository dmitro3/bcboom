import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props) => ({
    "&:focus-visible": {
        outline: "none",
        border: "none",
    },
    ".slick-list": {
        overflow: props.overflow ? "visible" : "hidden",
    },
    ".slick-slider": {
        marginBottom: "8px",
        position: "relative",
        display: "block",
        boxSizing: "border-box",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
        WebkitTouchCallout: "none",
        KhtmlUserSelect: "none",
        msTouchAction: "pan-y",
        touchAction: "pan-y",
        WebkitTapHighlightColor: "transparent",
        height: props.customHeight && "190px",
    },
    ".testimoni--wrapper ": {
        paddingRight: "20px",
        outline: "none",
        // height: "10000px",
        // minWidth: "250px",
        // marginRight: "50px",
    },
    ".slick-list:focus": { outline: "none" },
    ".slick-list.dragging": { cursor: ["pointer", "hand"] },
    ".slick-slider .slick-track, .slick-slider .slick-list": {
        WebkitTransform: "translate3d(0, 0, 0)",
        MozTransform: "translate3d(0, 0, 0)",
        msTransform: "translate3d(0, 0, 0)",
        OTransform: "translate3d(0, 0, 0)",
        transform: "translate3d(0, 0, 0)",
    },
    ".slick-track": {
        position: "relative",
        top: "0",
        left: "0",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    ".slick-track:before, .slick-track:after": {
        display: "table",
        content: '""',
    },
    ".slick-track:after": { clear: "both" },
    ".slick-loading .slick-track": { visibility: "hidden" },
    ".slick-slide": {
        display: "none",
        cssFloat: "left",
        height: props.customHeight || "100%",
        minHeight: "1px",
    },
    '[dir="rtl"] .slick-slide': { cssFloat: "right" },
    ".slick-slide img": { display: "block" },
    ".slick-slide.slick-loading img": { display: "none" },
    ".slick-slide.dragging img": { pointerEvents: "none" },
    ".slick-initialized .slick-slide": { display: "block" },
    ".slick-loading .slick-slide": { visibility: "hidden" },
    ".slick-vertical .slick-slide": {
        display: "block",
        height: "auto",
        border: "1px solid transparent",
    },
    ".slick-disabled": {
        opacity: '0!important',
        // height: "3000px!important",
    },
    ".slick-arrow.slick-hidden": { display: "none" },
    ".slick-prev, .slick-next": {
        fontSize: "0",
        lineHeight: 0,
        position: "absolute",
        top: "50%",
        display: "block",
        width: "40px",
        height: "40px",
        padding: "0",
        WebkitTransform: "translate(0, -50%)",
        msTransform: "translate(0, -50%)",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        color: "transparent",
        border: "none",
        outline: "none",
        zIndex: 30,
        background: "transparent",
    },
    ".slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus":
        {
            color: "transparent",
            outline: "none",
            background: "transparent",
        },
    ".slick-prev:hover:before, .slick-prev:focus:before, .slick-next:hover:before, .slick-next:focus:before":
        {
            opacity: 1,
        },
    ".slick-prev.slick-disabled:before, .slick-next.slick-disabled:before": {
        opacity: 0.25,
    },
    ".slick-prev:before, .slick-next:before": {
        fontFamily: '"slick"',
        fontSize: "20px",
        lineHeight: 1,
        opacity: 0.75,
        color: "white",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
    ".slick-prev": { left: "-25px" },
    '[dir="rtl"] .slick-prev': { right: "-25px", left: "auto" },
    ".slick-prev:before": { content: '"←"' },
    '[dir="rtl"] .slick-prev:before': { content: '"→"' },
    ".slick-next": { right: "-25px" },
    '[dir="rtl"] .slick-next': { right: "auto", left: "-25px" },
    ".slick-next:before": { content: '"→"' },
    '[dir="rtl"] .slick-next:before': { content: '"←"' },
    ".slick-dotted.slick-slider": { marginBottom: "30px" },
    ".slick-dots": {
        position: "absolute",
        bottom: "-10px",
        display: "block",
        width: "100%",
        padding: "0",
        margin: "0",
        listStyle: "none",
        textAlign: "center",
    },
    ".slick-dots li": {
        position: "relative",
        display: "inline-block",
        width: "14px",
        height: "10px",
        margin: "0 2px",
        padding: "0",
        cursor: "pointer",
        transition: "width 0.3s ease-in-out",
    },
    ".slick-dots li button": {
        fontSize: "0",
        lineHeight: 0,
        display: "block",
        width: "10px",
        height: "10px",
        padding: "5px",
        cursor: "pointer",
        color: "transparent",
        border: "0",
        outline: "none",
        background: "transparent",
    },
    ".slick-dots li button:hover, .slick-dots li button:focus": {
        outline: "none",
    },
    ".slick-dots li button:hover:before, .slick-dots li button:focus:before": {
        opacity: 1,
    },
    ".slick-dots li button:before": {
        fontFamily: '"slick"',
        fontSize: "6px",
        lineHeight: "20px",
        position: "absolute",
        top: "0",
        left: "0",
        width: "10px",
        height: "10px",
        content: '"•"',
        textAlign: "center",
        opacity: 0.25,
        color: "black",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
    ".slick-dots li.slick-active button:before": {
        opacity: 0.75,
        color: "black",
    },
    "@keyframes loading": { from: { width: "0%" }, to: { width: "100%" } },
    ".ft-slick__dots--custom": {
        height: "8px",
        width: "14px",
        backgroundColor: "#e5e7e9",
        borderRadius: "4px",
        position: "relative",
    },
    ".slick-dots .slick-active": {
        width: "30px",
        transition: "width 0.3s ease-in-out",
    },
    ".slick-dots .slick-active .ft-slick__dots--custom": {
        width: "30px",
        top: "-1.5px",
        overflow: "hidden",
        ".loading": {
            height: "8px",
            animation: "loading 5s ease-in",
            backgroundImage: "linear-gradient(270deg, #8990AE, #3586FF)",
            display: "inline-block",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "4px",
        },
    },
    img: {
        width: "100%",
        cursor: "move",
        // height: "300px",
        paddingBottom: "10px",
        KhtmlUserSelect: "none",
        OUserSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        userSelect: "none",

        "&:focus": {
            outline: "none",
            border: "none",
        },
    },
}));

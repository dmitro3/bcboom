import { useScreenResolution } from "@/hooks/useScreeResolution";
import { styled } from "@mui/system";
import { DateRangePicker as MXPicker } from "mui-daterange-picker";

const PickerWrapper = styled("div")(({ isMobile }) => ({
    // ".react-datepicker-popper": { zIndex: 30000 },

    "& .css-vj1n65-MuiGrid-root": {
        background: "#10133D",
        display: isMobile && "none",
        // zIndex: 1000,
        // position: "relative",
    },
    "& .css-a2e4ud": {
        background: "#10133D",
        display: isMobile && "none",
    },
    "& .css-uo3jtv .css-11lq3yg-MuiGrid-root": {
        display: isMobile && "block!important",
    },
    ".css-11lq3yg-MuiGrid-root": {
        background: "#10133D",
        // display: isMobile && "none",
    },
    "& .css-qn48t6": {
        background: "#10133D",
        // display: isMobile && "none",
    },

    "& .css-lvl4b3-MuiTypography-root": {
        // display: isMobile && "none",
        "&:nth-child(1)": {
            color: "#FF4E4E",
        },
        "&:nth-child(7)": {
            color: "#FF4E4E",
        },
    },
    "& .MuiBox-root .css-k008qs": {
        "&:nth-child(1)": {
            "& p": {
                color: "#FF4E4E",
            },
        },
        // "&:nth-child(3)": {
        //     color: "#FF4E4E",
        // },

        // "&:nth-child(5)": {
        //     color: "#FF4E4E",
        // },
    },
}));

const DateRangePicker = ({ toggle, open, setCurrentRange }) => {
    const { isMobile } = useScreenResolution();
    return (
        <PickerWrapper isMobile={isMobile}>
            <MXPicker
                open={open}
                toggle={toggle}
                onChange={(range) => setCurrentRange(range)}
                PopperProps={{
                    style: {ZIndex: 100000},
                }}
            />
        </PickerWrapper>
    );
};

export default DateRangePicker;

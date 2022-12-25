import { styled } from "@mui/system";
import chevronup from "../../../../public/images/svg/chevronup.svg";
import chevrondown from "../../../../public/images/svg/chevrondown.svg";
import { useState } from "react";
import { Divider } from "../Divider/Divider";
// const useStyles = makeStyles({
//     customOutline: {
//         "& .MuiOutlinedInput-notchedOutline": {
//             borderColor: "none",
//             borderRadius: "20px",
//             // background: "#2A3050",
//             outline: "none",
//             color: "white",
//         },
//     },
// });
// const CustomSelect = ({ setValue, value, items, label }) => {
//     const classes = useStyles();
//     return (
//         <Box sx={{ minWidth: 120 }}>
//             <FormControl fullWidth classes={{ root: classes.customOutline }}>
//                 <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//                 <Select value={value} onChange={setValue}>
//                     {items.map((item, i) => (
//                         <MenuItem value={item.value} key={i}>
//                             {item.icon && (
//                                 <img
//                                     src={item.icon}
//                                     alt={item.label}
//                                     style={{
//                                         height: "20px",
//                                         marginRight: "10px",
//                                         borderRadius: "50%",
//                                         display: "inline",
//                                     }}
//                                 />
//                             )}
//                             {item.label}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// };

const SelectWithDropdownWrapper = styled("div")(({}) => ({
    position: "relative",
    width: "100%",
    "& label": {
        color: "#8990ae",
    },
}));
const SelectDropdownComponent = styled("div")(({}) => ({
    background: "#3A4072",
    borderRadius: "10px",
    cursor: "pointer",
    width: "100%",
    padding: "0",
    "&:hover": {
        background: "#747DB6",

        "& p": {
            color: "#10162F",
        },
        "& img": {
            filter: "invert(7%) sepia(57%) saturate(1236%) hue-rotate(202deg) brightness(99%) contrast(98%)",
        },
    },
}));
const Paragraph = styled("div")(({ opened }) => ({
    padding: "10px 30px",
    borderRadius: "10px",
    textAlign: "center",
    color: "#AAB6EA",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bordeerBottom: "3px solid red",
    userSelect: "none",
    whiteSpace: "nowrap",
    "& p": {
        margin: "0",
    },
    "& img": {
        width: "15px",
        height: "15px",
        transform: opened && "rotate(180deg)",
        margin: "0 0 0 20px",
    },
}));
const DropdownDrawer = styled("div")(({}) => ({
    // borderTop: "2px solid #4A4F7A",
    background: "#2D345B",
    // padding: "10px 20px",
    position: "absolute",
    top: "105%",
    left: "0",
    width: "100%",
    height: "150px",
    borderRadius: "10px",
    zIndex: "500",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
        paddingBottom: "10px",
        width: "5px",
        border: "5px solid #9098CC",
        borderRadius: "15px",
    },
    "::-webkit-scrollbar-thumb": {
        background: "#3586FF",
        borderRadius: "15px",
        height: "2px",
    },
}));
const DrawerItem = styled("div")(({}) => ({
    padding: "6px 0",
    fontSize: "14px",
    color: "#AAB6EA",
    "&:hover": {
        color: "white",
    },
}));
export const SelectWithDropdown = ({ setValue, value, items, label }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <SelectWithDropdownWrapper>
            <label htmlFor={value}>{label}</label>
            <SelectDropdownComponent>
                <Paragraph
                    onClick={() => setOpenDrawer(!openDrawer)}
                    opened={openDrawer}
                >
                    <p>{value}</p>
                    <img src={chevrondown} alt="" />
                </Paragraph>
                {openDrawer && (
                    <DropdownDrawer>
                        <Divider margin="0" bg="#dedee366" />
                        <div style={{ padding: "10px 20px" }}>
                            {items.map((provider, i) => (
                                <DrawerItem
                                    key={i}
                                    onClick={() => setValue(provider)}
                                >
                                    {provider}
                                </DrawerItem>
                            ))}
                        </div>
                    </DropdownDrawer>
                )}
            </SelectDropdownComponent>
        </SelectWithDropdownWrapper>
    );
};

export default SelectWithDropdown;

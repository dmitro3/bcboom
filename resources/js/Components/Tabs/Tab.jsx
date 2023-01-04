import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import * as React from "react";
import { Flex } from "../UtilComponents/Flex";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ flexGrow: 1, width: "100%" }}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

const CustomTabs = ({ tabItems }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: "100%", color: "#fff" }}>
            <div
                sx={{
                    borderBottom: "none",
                    borderColor: "red",
                    borderRadius: "20px",
                    background: "#464F85",
                    color: "white!important",
                }}
            >
                <Tabs value={value} onChange={handleChange}>
                    {tabItems.map((item, index) => {
                        return (
                            <Tab
                                sx={{
                                    backgroundColor:
                                        value === index
                                            ? "#3586FF"
                                            : "transparent",
                                    borderRadius: "20px",
                                    color: "#fff!important",
                                    border: "none",
                                }}
                                label={item.label}
                                key={index}
                            ></Tab>
                        );
                    })}
                </Tabs>
            </div>
            {tabItems.map((item, index) => {
                return (
                    <TabPanel value={value} index={index} key={index}>
                        {item.content}
                    </TabPanel>
                );
            })}
        </div>
    );
};

export default CustomTabs;

const TabWrapper = styled("div")(({ padding, marginTop }) => ({
    borderRadius: "20px",
    color: "#fff",
    padding: padding || "20px 30px",
    marginTop: marginTop,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));
const TabButtons = styled("div")(({ width }) => ({
    background: "#464F85",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "0px 30px",
    width: width || "fit-content",
    borderRadius: "20px",
}));
const TabButton = styled("div")(({ active }) => ({
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "20px",
    background: active ? "#3586FF" : "transparent",
    textAlign: "center",
    color: "#fff",
    width: "100%",
    whiteSpace: "nowrap",
}));

export const NewCustomTabs = ({ tabItems, width, padding, marginTop }) => {
    const [value, setValue] = React.useState(0);
    return (
        <TabWrapper padding={padding} marginTop={marginTop}>
            <TabButtons width={width}>
                {tabItems.map((item, index) => {
                    return (
                        <TabButton
                            key={index}
                            onClick={() => {
                                setValue(index);
                            }}
                            active={value === index}
                        >
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                gap="10px"
                            >
<<<<<<< HEAD
                                {item.icon && <img src={item.icon} alt="" />}
=======
                                {item.icon && <img src={item.icon} alt="" style={{filter: index === value && 'brightness(0) invert(1)'}} />}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                {item.label}
                            </Flex>
                        </TabButton>
                    );
                })}
            </TabButtons>
            {tabItems.map((item, index) => {
                return (
                    <TabPanel value={value} index={index} key={index}>
                        {item.content}
                    </TabPanel>
                );
            })}
        </TabWrapper>
    );
};

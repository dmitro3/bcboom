import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import * as React from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

const CustomTabs = ({ tabItems }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", color: "#fff" }}>
            <Box
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
            </Box>
            {tabItems.map((item, index) => {
                return (
                    <TabPanel value={value} index={index} key={index}>
                        {item.content}
                    </TabPanel>
                );
            })}
        </Box>
    );
};

export default CustomTabs;

const TabWrapper = styled("div")(({}) => ({
    borderRadius: "20px",
    color: "#fff",
    padding: "20px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}));
const TabButtons = styled("div")(({}) => ({
    background: "#464F85",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "20px 30px",
    width: "250px",
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

export const NewCustomTabs = ({ tabItems }) => {
    const [value, setValue] = React.useState(0);
    return (
        <TabWrapper>
            <TabButtons>
                {tabItems.map((item, index) => {
                    return (
                        <TabButton
                            key={index}
                            onClick={() => {
                                setValue(index);
                            }}
                            active={value === index}
                        >
                            {item.label}
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

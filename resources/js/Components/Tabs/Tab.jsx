import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "../Button/Button";

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
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const CustomTabs = ({ tabItems }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%",color: "#fff", }}>
            <Box
                sx={{
                    borderBottom: 'none',
                    borderColor: 'red',
                    borderRadius: "20px",
                    background: "#464F85",
                    
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
                                    color: "#fff",
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

import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const useStyles = makeStyles({
    customOutline: {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "none",
            borderRadius: "20px",
            // background: "#2A3050",
            outline: 'none',
            color: 'white'
        },
    },
});
const CustomSelect = ({ setValue, value, items, label }) => {
    const classes = useStyles();
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth classes={{ root: classes.customOutline }}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select value={value} onChange={setValue}>
                    {items.map((item, i) => (
                        <MenuItem value={item.value} key={i}>
                            {item.icon && (
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    style={{
                                        height: "20px",
                                        marginRight: "10px",
                                        borderRadius: "50%",
                                        display: "inline",
                                    }}
                                />
                            )}
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;

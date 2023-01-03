import { Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import { styled as MuiStyle } from "@mui/material/styles";

const BcTooltip = ({ text, children, placement, arrow }) => {
//     const CustomToolTip = MuiStyle(({ className, ...props }) => (
//         <Tooltip
//             {...props}
//             componentsProps={{ tooltip: { className: className } }}
//         />
//     ))(`
//     color: white;
//     background-color: #181E46;
//     font-size: 11px;
//     font-family: Montserrat;
//     padding: 15px;
//     line-height: 2;
// `);

    // const useStyles = makeStyles((theme) => ({
    //     arrow: {
    //         "&:before": {
    //             border: "1px solid white",
    //         },
    //         color: "red",
    //     },
    //     tooltip: {
    //         backgroundColor: "red",
    //         border: "1px solid #E6E8ED",
    //         color: "#4A4A4A",
    //     },
    // }));
    // let classes = useStyles();
    return (
        <Tooltip
            title={text}
            placement={placement || "bottom-start"}
            arrow={arrow}
            // classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
        >
          {children}
        </Tooltip>
    );
};

export default BcTooltip;

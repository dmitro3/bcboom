import React from "react";
import { Box, Button } from "@mui/material";
import {
    DataGrid,
    GridPagination,
    GridFooterContainer,
} from "@mui/x-data-grid";
import { gamesTableColumns, gamesTableRows } from "@/data/games";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GameTable = () => {
    const [height, setHeight] = React.useState("26.4rem");
    const [showMore, setShowMore] = React.useState(true);

    function CustomFooter() {
        return (
            <GridFooterContainer>
                <GridPagination />
                <Button
                    endIcon={showMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    sx={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "0.625rem",
                        borderRadius: "1.875rem",
                        background: "#1D2036",
                    }}
                    onClick={() => {
                        setShowMore(!showMore);
                        if (showMore) {
                            setHeight("39.4rem");
                        } else {
                            setHeight("27.4rem");
                        }
                    }}
                >
                    {showMore ? "Show More" : "Show Less"}
                </Button>
            </GridFooterContainer>
        );
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: height,
                display: "flex",
                justifyContent: "center",

                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#272C4B",
                    borderBottom: "none",
                },

                "& .MuiDataGrid-columnHeaderTitleContainer": {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                },

                "& .MuiDataGrid-columnHeaderTitleContainerContent": {
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#A6B0DA",
                },

                "& .profit-column--cell": {
                    backgroundColor: "#272C4B",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "0.625rem",
                    color: "#A7B0D6",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center !important",
                    alignItems: "center",
                    borderBottom: "none",
                },

                "& .cash-column--cell": {
                    backgroundColor: "#272C4B",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "0.625rem",
                    color: "#A7B0D6",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center !important",
                    alignItems: "center",
                    borderBottom: "none",
                },

                "& .player-column--cell": {
                    backgroundColor: "#272C4B",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "0.625rem",
                    color: "#FFFFFF",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center !important",
                    alignItems: "center",
                    borderBottom: "none",
                },

                "& .amount-column--cell": {
                    backgroundColor: "#272C4B",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    fontSize: "0.9375rem",
                    color: "#FFF96A",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center !important",
                    alignItems: "center",
                    borderBottom: "none",
                },

                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: "#272C4B",
                },

                "&  .MuiDataGrid-columnSeparator": {
                    visibility: "hidden",
                },

                "& .MuiDataGrid-footerContainer": {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    backgroundColor: "#3B4271",
                    //border: "1px solid purple",
                },
            }}
        >
            <DataGrid
                sx={{
                    borderRadius: "0.625rem",
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "1px solid transparent",
                    borderBottom: "none",
                    overflowX: "hidden",
                }}
                rows={gamesTableRows}
                columns={gamesTableColumns}
                disableColumnFilter={true}
                disableColumnMenu={true}
                autoPageSize
                components={{
                    Footer: CustomFooter,
                }}
            />
        </Box>
    );
};

export default GameTable;

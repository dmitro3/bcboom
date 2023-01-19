import React from "react";
import { Pagination as MUIPagination } from "@mui/material";
import { styled } from "@mui/system";

const PaginationWrapper = styled("div")(() => ({
    display: "flex",

    "& .css-1kwoymn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#3586FF",
        color: "white",
    },
    '& .css-1kwoymn-MuiButtonBase-root-MuiPaginationItem-root': {
        borderRadius: '10px',
        backgroundColor: '#1F224A',
        color: '#A0ABDB',
    }
}));

const Pagination = ({count, page, onChange}) => {
    //  const [page, setPage] = React.useState(1);
    //  const handleChange = (event, value) => {
    //     console.log('esdf: ', event, value)
    //      setPage(value);
    //  };
    return (
        <PaginationWrapper>
            <MUIPagination count={count} page={page} onChange={onChange} />
        </PaginationWrapper>
    );
};

export default Pagination;

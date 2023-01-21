import { useScreenResolution } from "@/hooks/useScreeResolution";
import { styled } from "@mui/system";
import { format } from "date-fns";
import { useEffect, useLayoutEffect, useState } from "react";
import Text from "../Text/Text";
import { Flex } from "./Flex";
import Pagination from "./Pagination";

const TableWrapper = styled("div")(({ isMobile }) => ({
    // display:    'flex',
    // flexDirection:'column'
    "& .css-wjh20t-MuiPagination-ul": {
        flexWrap: isMobile && "nowrap",
        padding: isMobile && "0 0px 0 20px!important",
    },
}));
const TableGrid = styled("div")(({ isMobile }) => ({
    display: isMobile ? "flex" : "grid",
    flexDirection: isMobile && "column",
    alignSelf: isMobile && "flex-end",
    // display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridGap: "20px",
    // padding: "20px",

    "& > p": {
        "&:last-child": {
            width: "100%",
            textAlign: !isMobile && "right",
        },
    },
}));

const CustomTable = ({ columns = [], rows = [] }) => {
    const { isMobile } = useScreenResolution();
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [currentRows, setCurrentRows] = useState(rows);
    const [width, setWidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
        const second = window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
            setPerPage(window.innerWidth >= 768 ? 5 : 1);
        });
        // second
        console.log("currentRows: ", currentRows);
        return () => {
            window.removeEventListener("resize", second);
        };
    }, [currentPage, rows]);
    // const width = window.innerWidth;
    // const perPage = width >= 768 ? 5 : 1;
    function handlePageChange(event, value) {
        setCurrentPage(value);
        const beginning = value * perPage - perPage;
        const end = value * perPage;
        setCurrentRows(rows.slice(beginning, end));
    }
    // console.log("currentRow: ", currentRows, perPage);
    return (
        <TableWrapper style={{ width: "100%" }} isMobile={isMobile}>
            <div
                style={{
                    display: isMobile && "flex",
                    alignItems: isMobile && "baseline",
                    gap: isMobile && "30px",
                    justifyContent: isMobile && "stretch",
                    marginBottom: isMobile && "30px",
                }}
            >
                <TableGrid isMobile={isMobile}>
                    {columns.map((column, index) => (
                        <Text
                            type="p"
                            text={column}
                            color="#A0ABDB"
                            key={index}
                            whiteSpace="nowrap"
                            fontSize="12px"
                        />
                    ))}
                </TableGrid>
                {currentRows.map((item, index) => (
                    <div style={{ marginTop: isMobile ? "5px" : "20px" }}>
                        <TableGrid key={index} isMobile={isMobile}>
                            {Object.keys(item).map((key, index) => {
                                let text = item[key];
                                let day, time;
                                if (key === "date") {
                                    day = format(new Date(text), "dd/MM/yyyy");
                                    time = format(new Date(text), "hh:mm:ss");
                                    return (
                                        <div>
                                            <Text
                                                type="p"
                                                text={day}
                                                color="white"
                                                key={index}
                                                fontSize="12px"
                                                fontWeight="600"
                                                wordBreak="break-all"
                                            />
                                            <Text
                                                type="p"
                                                text={time}
                                                color="#80B2FF"
                                                key={index}
                                                fontSize="12px"
                                                fontWeight="600"
                                                wordBreak="break-all"
                                            />
                                        </div>
                                    );
                                }
                                return (
                                    <Text
                                        type="p"
                                        text={text}
                                        color="white"
                                        key={index}
                                        fontSize="12px"
                                        fontWeight="600"
                                        wordBreak="break-all"
                                    />
                                );
                            })}
                        </TableGrid>
                    </div>
                ))}
            </div>
            <Flex justifyContent="flex-end">
                <Pagination
                    count={Math.round(rows.length / perPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Flex>
        </TableWrapper>
    );
};

export default CustomTable;

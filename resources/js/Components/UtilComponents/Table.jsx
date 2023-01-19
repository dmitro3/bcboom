import { styled } from "@mui/system";
import { format } from "date-fns";
import Text from "../Text/Text";
import { Flex } from "./Flex";

const TableWrapper = styled("div")(() => ({}));
const TableGrid = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridGap: "20px",
    // padding: "20px",

    "& > p": {
        "&:last-child": {
            width: "100%",
            textAlign: "right",
        },
    },
}));

const CustomTable = ({ columns = [], rows = [] }) => {
    rows = Array.from({ length: 50 }).fill(rows[0]);
    return (
        <TableWrapper style={{ height: 300, width: "100%" }}>
            <TableGrid justifyContent="space-between" alignItems="center">
                {columns.map((column, index) => (
                    <Text
                        type="p"
                        text={column}
                        color="#A0ABDB"
                        key={index}
                        fontSize="12px"
                    />
                ))}
            </TableGrid>
            {rows.map((item, index) => (
                <div style={{ marginTop: "20px" }}>
                    <TableGrid key={index}>
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
            {/* </Flex> */}
        </TableWrapper>
    );
};

export default CustomTable;

import { styled } from "@mui/system";

export const Divider = styled("div")(({ bg, margin }) => ({
    borderBottom: `1px solid ${bg || "#dedee3"}`,
    paddingBottom: "4px",
    margin: `${margin || "10px 0"}`,
}));

import { Box, Typography } from "@mui/material";
import IconPurple from "../../../assets/games/IconPurple.svg";
import IconYellow from "../../../assets/games/IconYellow.svg";
import IconGreen from "../../../assets/games/IconGreen.svg";
import IconBlue from "../../../assets/games/IconBlue.svg";

export const gamesTableColumns = [
    {
        field: "player",
        headerName: "Player",
        type: "number",
        sortable: false,
        width: "25%",
        flex: 1,
        cellClassName: "player-column--cell",
        renderCell: ({ row: { amount, player } }) => {
            return (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={
                            amount >= 23 && amount < 25
                                ? IconBlue
                                : amount >= 25 && amount < 35
                                ? IconYellow
                                : amount >= 35 && amount < 55
                                ? IconGreen
                                : amount >= 55
                                ? IconPurple
                                : null
                        }
                    />
                    <Typography
                        sx={{
                            marginLeft: ".5rem",
                            fontWeight: "600",
                            fontSize: "0.625rem",
                        }}
                    >
                        {player}
                    </Typography>
                </Box>
            );
        },
    },

    {
        field: "cash_out",
        headerName: "Cash Out",
        type: "text",
        sortable: false,
        width: "25%",
        flex: 1,
        cellClassName: "cash-column--cell",
    },

    {
        field: "amount",
        headerName: "Amount",
        type: "text",
        width: "25%",
        sortable: "false",
        flex: 1,
        cellClassName: "amount-column--cell",
        renderCell: ({ row: { amount } }) => {
            return (
                <Box>
                    <Box
                        sx={{
                            color: "#43BB41",
                            fontWeight: 700,
                            fontStyle: "italic",
                            fontSize: ".625rem",
                            mr: ".3rem",
                        }}
                        component="span"
                    >
                        R$
                    </Box>
                    <Box
                        sx={{
                            color: "#FFFFFF",
                            fontWeight: 700,

                            fontSize: ".625rem",
                        }}
                        component="span"
                    >
                        {amount}
                    </Box>
                </Box>
            );
        },
    },

    {
        field: "profit",
        headerName: "Profit",
        type: "text",
        sortable: false,
        width: "25%",
        flex: 1,
        cellClassName: "profit-column--cell",
    },
];

export const gamesTableRows = [
    {
        id: 1,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 2,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 3,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 4,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 5,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 6,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 6,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 8,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 9,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 10,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 11,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 12,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 13,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 14,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 15,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 16,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 17,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 18,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 19,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 20,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 21,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 22,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 23,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 24,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 25,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 26,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 27,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 28,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 29,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 30,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 31,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 32,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 33,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 34,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 35,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 36,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },

    {
        id: 37,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 38,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 39,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 40,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 41,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 42,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 43,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 44,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 45,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 46,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 47,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 48,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
    {
        id: 49,
        player: "Emma",
        cash_out: "Betting",
        amount: 23,
        profit: "Betting",
    },
    {
        id: 50,
        player: "Emma",
        cash_out: "Betting",
        amount: 25,
        profit: "Betting",
    },
    {
        id: 51,
        player: "Emma",
        cash_out: "Betting",
        amount: 35,
        profit: "Betting",
    },
    {
        id: 52,
        player: "Emma",
        cash_out: "Betting",
        amount: 55,
        profit: "Betting",
    },
];

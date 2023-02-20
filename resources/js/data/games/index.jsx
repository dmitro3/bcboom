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
        renderCell: ({ row: { earning, loss, player } }) => {
            const isLoss = earning === '0.0000'
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
                            // bet_amount >= 23 && bet_amount < 25
                            //     ? IconBlue
                            //     : bet_amount >= 25 && bet_amount < 35
                            //     ? IconYellow
                            //     : bet_amount >= 35 && bet_amount < 55
                            //     ? IconGreen
                            //     : bet_amount >= 55
                            //     ? IconPurple
                            //     : null
                            isLoss ? IconBlue : IconPurple
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
        field: "name",
        headerName: "Cash Out",
        type: "text",
        sortable: false,
        width: "25%",
        flex: 1,
        cellClassName: "cash-column--cell",
    },

    {
        field: "bet_amount",
        headerName: "Amount",
        type: "text",
        width: "25%",
        sortable: "false",
        flex: 1,
        cellClassName: "amount-column--cell",
        renderCell: ({ row: { bet_amount } }) => {
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
                        {bet_amount}
                    </Box>
                </Box>
            );
        },
    },

    {
        field: "earning",
        headerName: "Profit",
        type: "text",
        sortable: false,
        width: "25%",
        flex: 1,
        cellClassName: "profit-column--cell",
        renderCell: ({ row: { earning, loss } }) => {
            const isLoss = earning === "0.0000";
            return (
                <Typography
                    sx={{
                        color: isLoss ? "#ed4a4a" : "green",
                        fontSize: "13px",
                    }}
                >
                    {isLoss ? loss : earning}
                </Typography>
            );
        },
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
        id: 54,
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

export const minesBettingData = [
    {
        multiplier: 1.15,
        hits: 13,
    },
    {
        multiplier: 1.15,
        hits: 13,
    },
    {
        multiplier: 1.15,
        hits: 13,
    },
    {
        multiplier: 1.15,
        hits: 13,
    },
    {
        multiplier: 1.15,
        hits: 13,
    },
    {
        multiplier: 1.15,
        hits: 13,
    },
    {
        multiplier: 1.15,
        hits: 13,
    },
];

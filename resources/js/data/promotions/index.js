export const promotionsTableColumns = [
    {
        field: "vip",
        headerName: "VIP",
        type: "text",
        width: "50%",
        sortable: "false",
        flex: 1,
        cellClassName: "vip-column--cell",
    },
    {
        field: "amount",
        headerName: "R $",
        type: "text",
        sortable: false,
        width: "50%",
        flex: 1,
        cellClassName: "amount-column--cell",
    },
];

export const promotionsTableRows = [
    { id: 1, amount: "R$ 5", vip: "VIPO-VIP 1" },
    { id: 2, amount: "R$ 10", vip: "VIPO-VIP 2" },
    { id: 3, amount: "R$ 20", vip: "VIPO-VIP 3" },
    { id: 4, amount: "R$ 50", vip: "VIPO-VIP 4" },
    { id: 5, amount: "R$ 100", vip: "VIPO-VIP 5" },
    { id: 6, amount: "R$ 200", vip: "VIPO-VIP 6" },
    { id: 7, amount: "R$ 500", vip: "VIPO-VIP 7" },
    { id: 8, amount: "R$ 1000", vip: "VIPO-VIP 8" },
    { id: 9, amount: "R$ 2000", vip: "VIPO-VIP 9" },
    { id: 10, amount: "R$ 5000", vip: "VIPO-VIP 10" },
];

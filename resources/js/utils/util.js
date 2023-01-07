export const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
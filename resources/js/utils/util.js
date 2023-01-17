export const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phoneNumber);
};

export function dataURItoBlob(dataURI) {
    //     var binary = atob(dataURI.split(",")[1]);
    //     var array = [];
    //     for (var i = 0; i < binary.length; i++) {
    //         array.push(binary.charCodeAt(i));
    //     }
    //     return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
    // }
    var arr = dataURI.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

export const sumValueOfObj = (obj) =>
    Object.values(obj).reduce((a, b) => +a + +b, 0);
export function between(x, min, max) {
    return x >= min && x <= max;
}
export const switchLevel = (wallet) => {
    // const walletBalance = sumValueOfObj(wallet);
    switch (wallet) {
        case 0:
            return 0;
        case between(wallet.deposit, 0, 100) && between(wallet.bet, 0, 800):
            return 1;
        case between(wallet.deposit, 101, 500) &&
            between(wallet.bet, 801, 4000):
            return 2;
        case between(wallet.deposit, 501, 2000) &&
            between(wallet.bet, 4001, 16000):
            return 3;
        case between(wallet.deposit, 2001, 10000) &&
            between(wallet.bet, 16001, 80000):
            return 4;
        default:
            return 0;
    }
};

export const getLevelStats = (wallet) => {
    const level = switchLevel(wallet);
    let maxDeposit = 0;
    let maxBet = 0;
    switch (level) {
        case 0:
            maxDeposit = 100;
            maxBet = 800;
            break;
        case 1:
            maxDeposit = 500;
            maxBet = 4000;
            break;
        case 2:
            maxDeposit = 2000;
            maxBet = 16000;
            break;
        case 3:
            maxDeposit = 10000;
            maxBet = 80000;
            break;
        default:
            maxDeposit = 100;
            maxBet = 800;
            break;
    }
    return {
        currentLevel: level,
        nextLevel: level + 1,
        betProgress: Math.min((wallet.bet / maxBet) * 100, 100),
        depositProgress: Math.min((wallet.deposit / maxDeposit) * 100, 100),
        maxWithdraw: maxDeposit,
        maxDeposit: maxDeposit,
        maxBet: maxBet,
    };
};

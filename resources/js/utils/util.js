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

export const getAllWithdrawalFunc = async (dispatch, dispatchFunc) => {
    const response = await dispatch(dispatchFunc());
    let formattedData = [];
    if (response?.payload?.status === 200) {
        console.log("sdlhsdlsdh: ", response?.payload?.data?.withdrawals);
        const withdrawals = response?.payload?.data?.withdrawals;
        formattedData = withdrawals.map((el) => {
            const obj = {};
            {
                obj.transactionId = el.orderno;
                obj.date = new Date(el.created_at).toISOString();
                obj.withdrawalValue = el.initial_amount;
                obj.widthdrawalFee = `${el.withdrawal_fee}%`;
                obj.finalValue = el.final_amount;
                obj.comment = el.remark || "---";
                obj.status = el.status;
            }
            return obj;
        });
    }
    return formattedData;
};

export function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf == "") return false;
    if (
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    )
        return false;
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
}

export function validateBrazilTaxNumber(taxNumber) {
    const pattern = /^\d{11}$/;
    if (!taxNumber.match(pattern)) {
        return false;
    }
    let sum = 0;
    let weight = 2;
    for (let i = taxNumber.length - 2; i >= 0; i--) {
        sum += weight * parseInt(taxNumber.charAt(i), 10);
        weight = (weight % 9) + 1;
    }
    let checkDigit = 11 - (sum % 11);
    if (checkDigit >= 10) {
        checkDigit = 0;
    }
    return checkDigit === parseInt(taxNumber.charAt(taxNumber.length - 1), 10);
}

export function randomDiceOutput(min, max) {
    const range = max - min + 1;
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return min + (array[0] % range);
}

export const toggleRollUnder = (gameData, dispatch, setGameData) => {
    // const chance = Math.floor(gameData.winChance * 0.18);
    // const chances = [`0 - ${chance}`, `${chance} - 18`];
    let chance = {};
    switch (gameData.rollUnder.type) {
        case "over":
            chance = {
                type: "under",
                value: "0 - " + Math.floor(gameData.winChance * 0.18),
            };
            break;
        case "under":
            chance = {
                type: "over",
                value: Math.floor(gameData.winChance * 0.18) + " - 18",
            };
            break;
        default:
            break;
    }
    let differenceInChance = chance.value.split(" - ");
    differenceInChance = Math.abs(
        differenceInChance[1] - differenceInChance[0]
    );

    const multiplier =
        chance.type === "under" ? 1 : gameData.winChance > 60 ? 10 : 20;
    let payout = Math.abs(
        (100 / (gameData.winChance * multiplier)) *
            (gameData.betAmount - 50 / 100)
    ).toFixed(4);
    console.log("sdfsfs: ", +gameData.betAmount > +payout);
    if (+gameData.betAmount >= +payout) {
        payout = +payout + +gameData.betAmount;
    }

    dispatch(
        setGameData({
            ...gameData,
            rollUnder: { ...chance },
            payout,
        })
    );
};

const payoutFunc = (gameData, rollUnder, chance) => {
    let differenceInChance = chance.split(" - ");
    differenceInChance = Math.abs(
        differenceInChance[1] - differenceInChance[0]
    );

    let multiplier = 1;
    switch (rollUnder.type) {
        case "under":
            multiplier = 1;
            break;
        case "over":
            multiplier = 225;
            if (gameData.winChance < 10) multiplier = 900;
            if (gameData.winChance > 50) multiplier = 0.25;
            if (gameData.winChance > 60) multiplier = 0.15;
            if (gameData.winChance > 80) multiplier = 0.1;
            // if (gameData.winChance >= 0 && gameData.winChance <= 60)
            //     multiplier = 900;
    }

    console.log("multiplier: ", multiplier);

    let payout = Math.abs(
        (100 / (gameData.winChance * multiplier)) *
            (gameData.betAmount - 50 / 100)
    ).toFixed(4);
    if (+gameData.betAmount >= +payout) {
        payout = +payout + +gameData.betAmount;
    }
    return payout;
};

export const calcPayout = (gameData, dispatch, setGameData) => {
    let chance = "0 - 9";
    switch (gameData.rollUnder.type) {
        case "under":
            chance = "0 - " + Math.floor(gameData.winChance * 0.18);
            break;
        case "over":
            chance = Math.floor(gameData.winChance * 0.18) + " - 18";
            break;
        default:
            break;
    }
    const loseAmount = gameData.betAmount;
    const payout = payoutFunc(gameData, gameData.rollUnder, chance);
    dispatch(
        setGameData({
            ...gameData,
            loseAmount,
            rollUnder: {
                ...gameData.rollUnder,
                value: chance,
            },
            payout,
        })
    );
};

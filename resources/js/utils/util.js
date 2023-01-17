export const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phoneNumber);
}

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
export function Demo() {
    let MyEnumErrorCode;
    (function (MyEnumErrorCode) {
        MyEnumErrorCode[MyEnumErrorCode["ERR_1"] = 5] = "ERR_1";
        MyEnumErrorCode[MyEnumErrorCode["ERR_199"] = 6] = "ERR_199";
        MyEnumErrorCode[MyEnumErrorCode["ERR_9000"] = 7] = "ERR_9000";
    })(MyEnumErrorCode || (MyEnumErrorCode = {}));
    const error = "ERR_9000";
    const error2 = MyEnumErrorCode.ERR_199;
    // MyEnumErrorCode.ERR_1 = 3;
    console.log(MyEnumErrorCode);
}
Demo();

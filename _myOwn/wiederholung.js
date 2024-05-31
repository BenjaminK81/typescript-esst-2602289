class MyClass {
    name;
    proNum;
    priBool;
    constructor(name, proNum, priBool) {
        this.name = name;
        this.proNum = proNum;
        this.priBool = priBool;
    }
    myMethod() {
        return this.priBool;
    }
}
class ExtClass extends MyClass {
    myMethod2() {
        return this.name;
    }
}
let class1 = new ExtClass("sdfsdf", 546, true);
export function typen() {
    let enum1;
    (function (enum1) {
        enum1["KEY_4"] = "Blub";
        enum1["KEY_5"] = "Blab";
    })(enum1 || (enum1 = {}));
    let myType1 = [["dsvsdv", 45], [45, 67]];
    let myType2 = { text: "Hallo", nummer: 42, arr: { arrText: "Schnuppi", arrNum: 66 } };
    let myType3 = "KEY_2";
    let myType4 = ["sdfss", 56];
    let myType5 = { text: "Type5", num: 42, arr: { bool: true } };
    let myType5var = [
        { text: "Type5var1", num: 42, arr: { bool: true } },
        { text: "Type5var2", num: 42, arr: { bool: true } }
    ];
    let myType6 = (pA, pB) => { return pA + " " + pB; };
    let myType7 = ["sdfsf", 435];
    const myType8 = () => { return "Hallo"; };
    let myTypeVal = myType8();
    if (typeof myTypeVal !== 'number' && typeof myTypeVal !== 'object') {
        console.log(myTypeVal);
    }
}
export function constFunc() {
    return ["sdvsdv", 45, "dvdsv"];
}
const arr = constFunc();
let str;
let num;
str = arr[0];
num = arr[1];
let combType = {
    name: "Benjamin",
    num: 42
};
if ("num" in combType) {
    //console.log(combType.num);
}
if ("name" in combType) {
    //console.log(combType.name);
}
let comtIntercType = {
    name: "Sandra",
    num: 40,
    location: "Hannover"
};
const useFunc = (parA, parB) => {
    console.log(parA, parB);
};
let myTypeComb = "ID_123_HUB_2";
let obj1 = {
    id: 234,
    sonst: "FEMALE",
};
const myTestFunc = (pA, pB) => {
    return {
        a: pA,
        b: pB
    };
};

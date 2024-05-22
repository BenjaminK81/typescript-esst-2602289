
class MyClass {
  constructor(
    public name: string,
    protected proNum: number,
    private priBool: boolean
  ) { }

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

  type type1 = (string | number)[][];
  type type2 = { text: string, nummer: number, arr: { arrText: string, arrNum?: number } };
  type type3 = "KEY_1" | "KEY_2";
  type type4 = string | false | (string | number)[];
  type type5 = { text: string, num: number, arr: { bool: boolean, any?: any } };
  type type6 = (paramA: number, paramB: string) => void;
  type type7 = [string, number];
  type type8 = () => string | number | { name: string };

  enum enum1 {
    KEY_4 = "Blub",
    KEY_5 = "Blab",
  }

  let myType1: type1 = [["dsvsdv", 45], [45, 67]];
  let myType2: type2 = { text: "Hallo", nummer: 42, arr: { arrText: "Schnuppi", arrNum: 66 } };
  let myType3: type3 = "KEY_2";
  let myType4: type4 = ["sdfss", 56];
  let myType5: type5 = { text: "Type5", num: 42, arr: { bool: true } };
  let myType5var: type5[] = [
    { text: "Type5var1", num: 42, arr: { bool: true } },
    { text: "Type5var2", num: 42, arr: { bool: true } }
  ];
  let myType6: type6 = (pA, pB) => { return pA + " " + pB };
  let myType7: type7 = ["sdfsf", 435];

  const myType8: type8 = () => { return "Hallo" };
  let myTypeVal = myType8();

  if (typeof myTypeVal !== 'number' && typeof myTypeVal !== 'object') {
    console.log(myTypeVal);
  }

}

export function constFunc() {
  return ["sdvsdv", 45, "dvdsv"] as const;
}

const arr = constFunc();

let str: string;
let num: number;

str = arr[0];
num = arr[1];







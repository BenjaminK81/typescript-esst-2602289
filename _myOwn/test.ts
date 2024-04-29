// Typensicherheit
const zahl: number = 2;
const bol: boolean = true;
const text: string = "dfbf";

// gemischte Typen
let gemischt;
gemischt = text + zahl;

const komb: string | number = "hallo" + 1;

// Any
let anyKomb;
anyKomb = "Hallo";
anyKomb = 2;

// Fixe Typen
let fixeTypen: "typ_1" | "typ_2" | "typ_3";
fixeTypen = "typ_2";

// Zugewiesene fixe Typen
let fixedBol: false = false;
fixedBol = false;

// Array-Typen
export function arrDemo() {
  const numArr: number[] = [1, 2, 3];
  const strArr: string[] = ["Eins", "Zwei", "Drei"];
  const nestedNumArr: number[][] = [[1, 2], [2, 3], [4, 5]];
  const nestedMixedArr1: (number | string)[][] = [[1, 2], ["drei", "vier"]]; // normale Schreibweise
  const nestedMixedArr2: Array<Array<string | number>> = [[1, 2], ["drei", "vier"]]; // Generic/Generische Schreibweise
}

// Typen wiederverwenden


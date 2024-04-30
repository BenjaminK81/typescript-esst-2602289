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

  console.log(nestedMixedArr2);

}

// Eigene Typen wiederverwenden
export function typeDemo() {

  // die Typen (type) tauchen in JS nicht auf sondern funktionieren nur als Aufruf TS
  type errorCodes = "MY_ERROR_1" | "MY_ERROR_2"; // eigene TYpen definiert

  const myError1: errorCodes = "MY_ERROR_2"; // meine eigene Typen in JS verwenden
  const myError2: errorCodes = "MY_ERROR_1";


  // eigene typen mit array (nested array)
  type myArr1 = number[][];

  const a1: myArr1 = [[1, 2, 3]];
}

// Challenge: Type definieren nach Variablen-Vorgabe
export function challenge() {

  type myType = string | false | (string | number)[];
  //type myType = string | false | Array<string | number>; // generische Schreibweise von Array

  let foo: myType = "Hello";
  foo = false;
  foo = ["test", 100];
}

// Objects
export function objDemo() {

  // Objekt einem Typ zugewiesen
  let person1: { author: string } = { author: "Max Mustermann" };

  // lesbarer wird es durch eigene Typen
  type AuthorObj = { author: string };
  let person2: AuthorObj = { author: "Susi Strolch" };

  // eigener Multi-Objekt Typ
  type MultiObj = {
    author: string;
    address: {
      city: string;
      street: string;
      plz: number;
    };
    hobbies: string[];
  };
  let person3: MultiObj = { // Nutzung des Objekts für einzelne Angabe
    author: "Susi Strolch", address: {
      city: "Hannover",
      street: "Musterstraße",
      plz: 30457,
    },
    hobbies: ["sport", "musik"]
  };
  let person4: MultiObj[] = [ // Nutzung des Objekts für ein Array
    {
      author: "Susi Strolch",
      address: {
        city: "Hannover",
        street: "Musterstraße",
        plz: 30457
      },
      hobbies: ["hüpfen", "springen"]
    },
    {
      author: "Paul Streicher",
      address: {
        city: "Magdeburg",
        street: "Hegelstraße",
        plz: 39113,
      },
      hobbies: ["blasen", "lutschen"]
    }
  ];

}

// Functions and Callbacks
export function functionDemo() {

  // expliziter Typ als Funtion erstellt (void gibt nichts zurück)
  const myFunction1: () => void = () => { return "Hallo Funktion 1" };
  let myF1 = myFunction1();

  // hier nicht als expliziter Typ, sonder in lesbare Form
  type myFunction2 = () => void;
  let myF2: myFunction2 = () => { return "Moin Funktion 2" };

  // Typensicherheit in der Funktion, hier wird Number als Rückgabewert erwartet
  type myFunction3 = () => number;
  let myF3: myFunction3 = () => { return 34 };

  // Typensicherheit in der Funktion mit Typensicherheit in überg. Parameter
  type myFunction4 = (paramA: string, paramB: number) => void;
  let myF4: myFunction4 = () => { return };
  console.log(myF4("Mein Parameter", 10));

}

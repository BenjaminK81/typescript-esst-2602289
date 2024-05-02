// Typensicherheit
const zahl = 2;
const bol = true;
const text = "dfbf";
const alles = "kann alles sein!" + 23 + "z. B. oder " + false + "oder" + {} + "Object";
// gemischte Typen
let gemischt;
gemischt = text + zahl;
const komb = "hallo" + 1;
// Any
let anyKomb;
anyKomb = "Hallo";
anyKomb = 2;
// Fixe Typen
let fixeTypen;
fixeTypen = "typ_2";
// Zugewiesene fixe Typen
let fixedBol = false;
fixedBol = false;
// Array-Typen
export function arrDemo() {
    const numArr = [1, 2, 3];
    const strArr = ["Eins", "Zwei", "Drei"];
    const nestedNumArr = [[1, 2], [2, 3], [4, 5]];
    const nestedMixedArr1 = [[1, 2], ["drei", "vier"]]; // normale Schreibweise
    const nestedMixedArr2 = [[1, 2], ["drei", "vier"]]; // Generic/Generische Schreibweise
    console.log(nestedMixedArr2);
}
// Eigene Typen wiederverwenden
export function typeDemo() {
    const myError1 = "MY_ERROR_2"; // meine eigene Typen in JS verwenden
    const myError2 = "MY_ERROR_1";
    const a1 = [[1, 2, 3]];
}
// Challenge: Type definieren nach Variablen-Vorgabe
export function challenge() {
    //type myType = string | false | Array<string | number>; // generische Schreibweise von Array
    let foo = "Hello";
    foo = false;
    foo = ["test", 100];
}
// Objects
export function objDemo() {
    // Objekt einem Typ zugewiesen (explizit)
    let person1 = { author: "Max Mustermann" };
    let person2 = { author: "Susi Strolch" };
    let person3 = {
        author: "Susi Strolch", address: {
            city: "Hannover",
            street: "Musterstraße",
            plz: 30457,
        },
        hobbies: ["sport", "musik"]
    };
    let person4 = [
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
    // expliziter Typ als Funtion erstellt (void = kein Rückgabewert)
    const myFunction1 = () => { };
    let myF1 = myFunction1();
    let myF2 = () => { return "Moin Funktion 2"; };
    let myF3 = () => { return 34; };
    let myF4 = () => { return; };
    console.log(myF4("Mein Parameter", 10));
}
// function callback NEVER
export function neverFunction() {
    let nevFunc1 = () => {
        console.log("ERROR");
        throw new Error("");
    };
    const nevF1 = nevFunc1();
}
// function callback UNKNOWN
export function unknownFunction() {
    let anyTing = { user: "Dummie" }; // any nimmt einfach alles entgegen, auch wenn falsch
    let anyThing2 = { user: "achim" };
    let myString;
    myString = anyTing; // hier akzteptiert Type STRING einfach der Object AnyThing
    //myString = anyThing2; // UNKNOWN kann alle Typen enthalten, kann sich aber nicht überschneiden, außer mit Typen in UNKNOWN
}
// UNKNWON gewährleistet Typensicherheit bei unbekannten Werten,
// die irgendwo empfangen werden
// im besten Fall, weiß man aber, welche Werte empfangen werden
// und benutzt weder ANY noch UNKNOWN
// ENUM
export function enumFunction() {
    // Typisierung erfolgt als Objekt (hier nur Beispiel); verhält sich wie ein Array
    let enumVar;
    (function (enumVar) {
        enumVar[enumVar["ENUM_BEISPIEL_1"] = 0] = "ENUM_BEISPIEL_1";
        enumVar[enumVar["ENUM_BEISPIEL_42"] = 1] = "ENUM_BEISPIEL_42";
        enumVar[enumVar["ENUM_BEISPIEL_4"] = 2] = "ENUM_BEISPIEL_4"; // dritter Wert 2 zugewiesen
    })(enumVar || (enumVar = {}));
    const beispiele = enumVar.ENUM_BEISPIEL_1;
    console.log(beispiele);
}
enumFunction();

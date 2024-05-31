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
    let myF4 = (par1, par2) => { return par1 + " " + par2; };
    console.log(myF4("Mein Parameter", 10));
}
// function callback NEVER
export function neverFunction() {
    let nevFunc1 = () => {
        console.log("ERROR");
        throw new Error("");
    };
    const nevF1 = nevFunc1();
    console.log(nevF1);
}
// function callback UNKNOWN
export function unknownFunction() {
    let anyTing = { user: "Dummie" }; // any nimmt einfach alles entgegen, auch wenn falsch
    let anyThing2 = { user: "achim" };
    let myString;
    myString = anyTing; // hier akzteptiert Type STRING einfach das Object AnyThing
    myString = anyThing2; // UNKNOWN kann alle Typen enthalten, kann sich aber nicht überschneiden, außer mit Typen in UNKNOWN
    console.log(myString);
}
// UNKNWON gewährleistet Typensicherheit bei unbekannten Werten,
// die irgendwo empfangen werden
// im besten Fall, weiß man aber, welche Werte empfangen werden
// und benutzt weder ANY noch UNKNOWN
// ENUM
export function enumFunction() {
    // Typisierung erfolgt als Objekt (hier nur Beispiel); verhält sich wie ein Array
    // Beispiel ist ein Key-Enum und beginnt bei 0
    // festgelegte Enums sind unveränderlich und können nicht manipuliert werden
    let enumVar;
    (function (enumVar) {
        enumVar[enumVar["ENUM_BEISPIEL_1"] = 0] = "ENUM_BEISPIEL_1";
        enumVar[enumVar["ENUM_BEISPIEL_42"] = 1] = "ENUM_BEISPIEL_42";
        enumVar[enumVar["ENUM_BEISPIEL_4"] = 2] = "ENUM_BEISPIEL_4";
    })(enumVar || (enumVar = {}));
    // Beispiel ist ein String-Enum
    let enumVar2;
    (function (enumVar2) {
        enumVar2["ENUM_BEISPIEL_1"] = "Achim";
        enumVar2["ENUM_BEISPIEL_42"] = "Hans";
        enumVar2["ENUM_BEISPIEL_4"] = "Katrin";
    })(enumVar2 || (enumVar2 = {}));
    // Beispiel ist ein Key-Enum beginnt aber mit Key 5
    let enumVar3;
    (function (enumVar3) {
        enumVar3[enumVar3["ENUM_BEISPIEL_1"] = 5] = "ENUM_BEISPIEL_1";
        enumVar3[enumVar3["ENUM_BEISPIEL_42"] = 6] = "ENUM_BEISPIEL_42";
        enumVar3[enumVar3["ENUM_BEISPIEL_4"] = 7] = "ENUM_BEISPIEL_4";
    })(enumVar3 || (enumVar3 = {}));
    const beispiele = enumVar.ENUM_BEISPIEL_4;
    console.log(enumVar3);
}
// TUPLES
export function tuplesFunction() {
    let myArr = ["dfdfb", 45, "fdbdfb", 456];
    // ein TUPLE definiert einen Typ (in dem Fall ein Array) mit korrekter Anzahl an zugelassenen Werten (hier nur 2 NUMBER Werte)
    const xyTuple = [100, 400];
    return "X ist: " + xyTuple[0] + " und Y ist: " + xyTuple[1];
}
// KLASSEN definieren wie in JS gewohnt
class PersonJS {
    static say = "Hi ";
    nameKurz; // Properties/Eigenschaft Kurzschreibweise in TypeScript
    nameNormalJS; // Properties/Eigenschaft wie in JS gewohnt
    constructor(name) {
        this.nameKurz = name;
    }
}
// KLASSEN definieren wie in TypeScript
class PersonTS {
    name;
    static say = "Hi "; // static string kann nur über die Klasse an sich aufgerufen werden = PersonTS.say
    static sayMethod() {
        return 1 + 2;
    }
    constructor(name) {
        this.name = name;
    } // public property wird im constructor direkt angegeben und erwartet einen string (this. kann man weglassen!)
}
const newPerson = new PersonTS("");
newPerson.name = "Franzi"; // hier propety aufruf und übergabe an Objekt .name
export function classFunc() {
    const person = new PersonTS("Achim");
    return person.name;
}
// KLASSEN protected und private in TypeScript
class PersonPR {
    name;
    age;
    id;
    static say = "Hi ";
    constructor(name, age, // von außen nicht aufrufbar, nur innerhalb und an erweiterte Klassen (extends)
    id // von außen und erweiterte Klassen nicht aufrufbar!!! PRIVAT
    ) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    // innerhalb der Klasse erreichbar (Beispiel mit einer Methode "getPersonAge")
    getPersonAge() {
        return this.age;
    }
    // innerhalb der Klasse erreichbar (Beispiel mit einer Methode "getPersonAge")
    getPersonId() {
        return this.id;
    }
}
class extendedPersonPR extends PersonPR {
}
export function prFunction() {
    const pr1 = new extendedPersonPR("Micha", 42, "#p123");
    console.log(pr1.name, pr1.getPersonAge(), pr1.getPersonId()); // Wert 2 und 3 durch Aufruf der Methode 
}
// Klassen können mehrere Interfaces besitzen
class Person {
    name;
    age;
    id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    sayHello() {
        return "HAllo";
    }
    ;
}
export function personDemo() {
    const person = new Person("Fred", 42, 1283);
    console.log(person);
}
export function restDemo() {
    const germanRest = {
        name: "Zum Bären",
        location: "Magdeburg",
        priceRange: "normal",
        comment: "Alter Schwede",
    };
    const thaiRest = {
        name: "Mo",
        location: "Hannover",
        priceRange: "normal",
    };
    const italRest = {
        name: "Giovanni",
        foo: "bar", // es können aber keine neuen Eigenschaften hinzugefügt werden
    };
    console.log(thaiRest);
}
const getSomeValue = () => {
    return { name: "HALLO" };
};
export function dynamicFunction() {
    let value = getSomeValue(); // hier im "value" noch alle Rückgabewerte von der Funktion enthalten
    // Type Guarding = dynamische Erkennung des Typs, durch If-Operator und typeof
    if (typeof value !== 'number' && typeof value !== 'string') {
        console.log(value.name); // hier nur noch object im "value" als Rückgabewert zugelassen
    }
    // ODER MIT instanceof Typ
    if (value instanceof Object) {
        console.log(value);
    }
    const myObject = {};
    if (myObject.foobar) {
        console.log(myObject.foobar.foo);
    }
}
// Konstante erzwingen
function getVarArr() {
    return ["Text und so", 42]; // "as const" erzwingt die Konstante und somit die Regel/Struktur (hier Array mit 1 Wert string und 2 Wert number)
}
export function constFunction() {
    let name;
    let myNum;
    const nameAndNumber = getVarArr();
    name = nameAndNumber[0]; // 0 könnte auch Number sein (durch feste Struktur siehe "as const" gesichert)
    myNum = nameAndNumber[1]; // 1 könnte auch String sein (durch feste Struktur siehe "as const" gesichert)
}
export function TypeBindDemo() {
    let unionObject = {
        age: 42,
        name: "Ben"
    };
    // Hier Zugriff auf beide Eigenschaften nur über TypeGuarding
    if ("age" in unionObject) {
        console.log(unionObject.age);
    }
    if ("name" in unionObject) {
        console.log(unionObject.name);
    }
    // Hier durch & (intersection) Zugriff auf beide Eigenschaften beider Typen
    let intersectionObject = {
        age: 42,
        name: "Ben"
    };
    console.log(intersectionObject.name + " ist: " + intersectionObject.age);
}
// Template Literal Types (Text-Strukturen erzwingen) - VALIDIERUNG
export function literalTypes() {
    let serialNumberCar = "T_CAR_599"; // hier wird durch den Typ VehicleTypeStructure die Struktur überprüft
    let serialNumberTruck = "T_TRU_456"; // hier wird durch den Typ VehicleTypeStructure die Struktur überprüft (Fehler, da nicht der Typ TRUCK)
    let serialNumberBus = "T_BUS_234"; // hier wird durch den Typ VehicleTypeStructure die Struktur überprüft
}
export function challengeFunc() {
    const myTestFunction = (paramA, paramB) => {
        console.log(paramA, paramB);
    };
    myTestFunction(100);
    myTestFunction(100, "Foo!");
}
// Parameter oder Rückgabe von Funktions-Typen extrahieren (zum Absichern der Parameter und Rückgabewerte einer benutzten Funktion)
export function FuncTypeExtr() {
    function calculate(price, vat) {
        return price * vat;
    }
    // Absichern der Variablen-Werte durch die Typen ResultOfCalculate und ParameterOfCalculate
    const mwst = 1.19; // Parameter werden hier durch ParameterOfCalculate abgesichert (2 Parameter können durch Indexing [1] seperat angesteuert werden)
    const myPrice = calculate(100, mwst); // Rückgabewert wird hier durch ResultOfCalculate abgesichert
}
export function TypeIndexing() {
}
export function typeCasting() {
    let personOrAnimal = {
        name: "Hansi",
        animal: "Wellensittich",
    };
    const getPersonOrAnimal = () => {
        return {
            name: "Hansi",
            animal: "Wellensittich",
        };
    };
    let personOrAnimal2 = getPersonOrAnimal(); // wenn Daten-Typen/Objekt-Typen sich gleichen, dann kann man mit "as" den genauen Typen bestimmen/ableiten
}
// Komplexe Typenableitung CHALLENGE (die ComplexFunction soweit auseinandernehmen, bis nur noch {courseName: string} übrig bleibt)
const ComplexFunction = () => {
    return () => {
        return [2, { courseName: "TypeScript" }];
    };
};
export function TypeIndexChallenge() {
}
// Generische Key-Value-Paare als Objekt (Record)
export function keyValObj() {
    const p = {
        productName: "Auto",
        price: 10000.00,
        details: {
            color: "Blau",
            tueren: 4
        }
    };
}
// Eigenen Generic-Type definieren, wie Record, Exclude oder Omit etc.
// Generic-Type funktioniert ähnlich wie eine Funktion
export function ownGenericFunction() {
    const busId = "ID_BUS_5";
    const carID = "ID_CAR_42";
}
// Generic Object-Type (Generic innerhalb von Objekten nutzen)
export function genObjType() {
    const f = {
        name: "Tomate",
        details: {
            weight: 0.2,
            origin: "Spain"
        }
    };
}
const myFunction = (myFuncParam) => {
    return;
};
export function GenTypeChallenge() {
    const obj = myFunction({
        name: "Martha",
        lastname: "Collins",
        age: 42,
    });
    const falseObject = myFunction({
        noName: "Nope"
    });
    console.log(obj);
}

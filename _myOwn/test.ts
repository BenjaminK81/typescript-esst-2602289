// Typensicherheit
const zahl: number = 2;
const bol: boolean = true;
const text: string = "dfbf";
const alles: any = "kann alles sein!" + 23 + "z. B. oder " + false + "oder" + {} + "Object";

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
  type myGenericType = string | false | Array<string | number>; // generische Schreibweise von Array

  let foo: myType = "Hello";
  foo = false;
  foo = ["test", 100];
}

// Objects
export function objDemo() {

  // Objekt einem Typ zugewiesen (explizit)
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

  // expliziter Typ als Funtion erstellt (void = kein Rückgabewert)
  const myFunction1: () => void = () => { };
  let myF1 = myFunction1();

  // hier nicht als expliziter Typ, sonder in lesbare Form
  type myFunction2 = () => void;
  let myF2: myFunction2 = () => { return "Moin Funktion 2" };

  // Typensicherheit in der Funktion, hier wird Number als Rückgabewert erwartet
  type myFunction3 = () => number;
  let myF3: myFunction3 = () => { return 34 };

  // Typensicherheit in der Funktion mit Typensicherheit in überg. Parameter
  type myFunction4 = (paramA: string, paramB: number) => void;
  let myF4: myFunction4 = (par1, par2) => { return par1 + " " + par2 };
  console.log(myF4("Mein Parameter", 10));

}


// function callback NEVER
export function neverFunction() {

  // NEVER sorgt dafür das es zu keiner Ausgabe kommt 
  // und diese nie gelesen wird (evtl. sogar ABBRUCH an der Stelle)
  // void gibt mindestens ein undefined zurück
  type neverFunc = () => never;

  let nevFunc1: neverFunc = () => {
    console.log("ERROR");
    throw new Error("");
  }
  const nevF1 = nevFunc1();
  console.log(nevF1);

}

// function callback UNKNOWN
export function unknownFunction() {
  let anyTing: any = { user: "Dummie" }; // any nimmt einfach alles entgegen, auch wenn falsch
  let anyThing2: unknown = { user: "achim" };

  let myString: string;
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
  enum enumVar {
    ENUM_BEISPIEL_1,  // erster Wert 0 zugewiesen
    ENUM_BEISPIEL_42, // zweiter Wert 1 zugewiesen
    ENUM_BEISPIEL_4,  // dritter Wert 2 zugewiesen
  }

  // Beispiel ist ein String-Enum
  enum enumVar2 {
    ENUM_BEISPIEL_1 = "Achim",  // erster Wert 0 zugewiesen
    ENUM_BEISPIEL_42 = "Hans", // zweiter Wert 1 zugewiesen
    ENUM_BEISPIEL_4 = "Katrin",  // dritter Wert 2 zugewiesen
  }

  // Beispiel ist ein Key-Enum beginnt aber mit Key 5
  enum enumVar3 {
    ENUM_BEISPIEL_1 = 5,  // erster Wert 0 zugewiesen
    ENUM_BEISPIEL_42, // zweiter Wert 1 zugewiesen
    ENUM_BEISPIEL_4,  // dritter Wert 2 zugewiesen
  }

  const beispiele: enumVar = enumVar.ENUM_BEISPIEL_4;
  console.log(enumVar3);

}


// TUPLES
export function tuplesFunction() {
  type StringNumberArray = (string | number)[];
  let myArr: StringNumberArray = ["dfdfb", 45, "fdbdfb", 456];

  // ein TUPLE definiert einen Typ (in dem Fall ein Array) mit korrekter Anzahl an zugelassenen Werten (hier nur 2 NUMBER Werte)
  const xyTuple: [number, number] = [100, 400];

  return "X ist: " + xyTuple[0] + " und Y ist: " + xyTuple[1];
}


// KLASSEN definieren wie in JS gewohnt
class PersonJS {
  static say = "Hi ";

  nameKurz: string // Properties/Eigenschaft Kurzschreibweise in TypeScript
  public nameNormalJS: string; // Properties/Eigenschaft wie in JS gewohnt

  constructor(name: string) { // in TypeScript muss typensicherheit so definiert werden
    this.nameKurz = name;
  }
}

// KLASSEN definieren wie in TypeScript
class PersonTS {

  static say = "Hi "; // static string kann nur über die Klasse an sich aufgerufen werden = PersonTS.say

  static sayMethod() { // static method kann außerhalb nur über die Klasse an sich aufgerufen werden = PersonTS.sayMethod()
    return 1 + 2;
  }

  constructor(public name: string) { } // public property wird im constructor direkt angegeben und erwartet einen string (this. kann man weglassen!)
}

const newPerson = new PersonTS("");
newPerson.name = "Franzi"; // hier propety aufruf und übergabe an Objekt .name

export function classFunc() {
  const person = new PersonTS("Achim");
  return person.name;
}

// KLASSEN protected und private in TypeScript
class PersonPR {
  static say = "Hi ";

  constructor(
    public name: string,
    protected age: number, // von außen nicht aufrufbar, nur innerhalb und an erweiterte Klassen (extends)
    private id: string // von außen und erweiterte Klassen nicht aufrufbar!!! PRIVAT
  ) { }

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

  // protected von PersonPR werden auch an abgeleitete Klassen (extends) weitergegeben
  // private können selbst hier nicht aufgerufen werden = PRIVAT

}

export function prFunction() {

  const pr1 = new extendedPersonPR("Micha", 42, "#p123")
  console.log(pr1.name, pr1.getPersonAge(), pr1.getPersonId()); // Wert 2 und 3 durch Aufruf der Methode 

}

// public = von überall zugriff
// protected = nur innerhalb der Klasse oder der erweiterten Klasse
// privat = nur innerhalb der Klasse


// INTERFACES
// mit INTERFACES hinterlegt man eine Struktur bzw. Regeln für Klassen, wenn man z.B. in einem Team arbeitet
// INTERFACES können weder protected noch private enthalten
// INTERFACES können durch andere INTERFACES erweitert werden
interface IBasePerson {
  name: string;
}
interface IPerson extends IBasePerson {
  sayHello: () => void; // Methode in Form einer Funktion
}

interface IAge {
  age: number;
}

// Klassen können mehrere Interfaces besitzen
class Person implements IPerson, IAge { // mehrere INTERFACES implementiert
  constructor(
    public name: string,
    public age: number,
    private id: number,
  ) { }

  sayHello() {
    return "HAllo";
  };
}

export function personDemo() {
  const person = new Person("Fred", 42, 1283);

  console.log(person);

}


// optionale TYPEN / PARTIALS
type Restaurant = {
  name: string;
  location: string;
  priceRange: "low" | "normal" | "high";
  comment?: string; // Fragezeichen "?" hinter der Eigenschaft macht diese "OPTIONAL"
}

export function restDemo() {

  const germanRest: Restaurant = {
    name: "Zum Bären",
    location: "Magdeburg",
    priceRange: "normal",
    comment: "Alter Schwede",
  }

  const thaiRest: Restaurant = { // hier "comment" optional weggelassen
    name: "Mo",
    location: "Hannover",
    priceRange: "normal",
  }

  const italRest: Partial<Restaurant> = { // "PARTIAL" macht alle Eigenschaften "OPTIONAL"
    name: "Giovanni",
    foo: "bar", // es können aber keine neuen Eigenschaften hinzugefügt werden
  }

  console.log(thaiRest);

}


// TYPE GUARDING
type SomeValueFunc = () => string | number | { name: string };

const getSomeValue: SomeValueFunc = () => {
  return { name: "HALLO" };
}

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

  const myObject: { foobar?: { foo: boolean } } = {};
  if (myObject.foobar) {
    console.log(myObject.foobar.foo);
  }

}


// Konstante erzwingen
function getVarArr() {
  return ["Text und so", 42] as const; // "as const" erzwingt die Konstante und somit die Regel/Struktur (hier Array mit 1 Wert string und 2 Wert number)
}

export function constFunction() {
  let name: string;
  let myNum: number;

  const nameAndNumber = getVarArr();

  name = nameAndNumber[0]; // 0 könnte auch Number sein (durch feste Struktur siehe "as const" gesichert)
  myNum = nameAndNumber[1]; // 1 könnte auch String sein (durch feste Struktur siehe "as const" gesichert)
}


// Typen zusammenbinden
interface PersonTypeBind { // Interface kann nicht nur für Klassen verwendet werden, sondern auch für Objekte!
  name: string;
}

type AgeTypeBind = {
  age: number;
}

export function TypeBindDemo() {

  let unionObject: AgeTypeBind | PersonTypeBind = { // Das union object ist jetzt entweder "Age" oder "Person", jedoch nicht beides (nur 1 Eigenschaft)
    age: 42,
    name: "Ben"
  }
  // Hier Zugriff auf beide Eigenschaften nur über TypeGuarding
  if ("age" in unionObject) {
    console.log(unionObject.age);
  }

  if ("name" in unionObject) {
    console.log(unionObject.name);
  }

  // Hier durch & (intersection) Zugriff auf beide Eigenschaften beider Typen
  let intersectionObject: AgeTypeBind & PersonTypeBind = {
    age: 42,
    name: "Ben"
  }

  console.log(intersectionObject.name + " ist: " + intersectionObject.age);


}


// Template Literal Types (Text-Strukturen erzwingen) - VALIDIERUNG
export function literalTypes() {

  type VehicleType = `T_${"CAR" | "TRUCK" | "BUS"}_${number}`; // Struktur des Types wird im String erzwungen (wie VALIDIERUNG)

  // ODER übersichtlicher

  type VehicleTypeNames = "CAR" | "TRUCK" | "BUS";
  type VehicleTypeStructure = `T_${VehicleTypeNames}_${number}`;

  let serialNumberCar: VehicleTypeStructure = "T_CAR_599"; // hier wird durch den Typ VehicleTypeStructure die Struktur überprüft
  let serialNumberTruck: VehicleTypeStructure = "T_TRU_456"; // hier wird durch den Typ VehicleTypeStructure die Struktur überprüft (Fehler, da nicht der Typ TRUCK)
  let serialNumberBus: VehicleTypeStructure = "T_BUS_234"; // hier wird durch den Typ VehicleTypeStructure die Struktur überprüft
}

// Challenge
interface MyFunctionType {
  (parA: number, parB?: string): void;
}

export function challengeFunc() {
  const myTestFunction: MyFunctionType = (paramA, paramB) => {
    console.log(paramA, paramB);
  };

  myTestFunction(100);
  myTestFunction(100, "Foo!");
}


// Vorhandene Typen einschränken bzw. verkleinern
type ERROR_CODES = "ERROR_1" | "ERROR_2" | "ERROR_4" | "ERROR_5"; // Beispiel eines vorhandenen Typen
type ServerResponse = { // Beispiel eines vorhandenen Typen
  html: string;
  errorCodes: ERROR_CODES;
  errorCodesExclude: Exclude<ERROR_CODES, "ERROR_5"> // Mit "Exclude" kann ich vorher def. Typen entfernen innerhalb eines Types
}

// Hier möchte ich vorhandene Typen einschränken
type SuccessResponse = Omit<ServerResponse, 'errorCodes'>; // Hier wurde die Eigenschaft "errorCodes" aus ServerResponse mit "Omnit" entfernt
type FailureResponse = Omit<ServerResponse, 'html'>; // Hier wurde die Eigenschaft "html" aus ServerResponse mit "Omnit" entfernt



// Parameter oder Rückgabe von Funktions-Typen extrahieren (zum Absichern der Parameter und Rückgabewerte einer benutzten Funktion)
export function FuncTypeExtr() {

  function calculate(price: number, vat: number) {
    return price * vat;
  }

  // Extrahieren von Result und Parameter aus der Funktion calculate
  type ResultOfCalculate = ReturnType<typeof calculate>
  type ParamaterOfCalculate = Parameters<typeof calculate>

  // Absichern der Variablen-Werte durch die Typen ResultOfCalculate und ParameterOfCalculate
  const mwst: ParamaterOfCalculate[1] = 1.19; // Parameter werden hier durch ParameterOfCalculate abgesichert (2 Parameter können durch Indexing [1] seperat angesteuert werden)
  const myPrice: ResultOfCalculate = calculate(100, mwst); // Rückgabewert wird hier durch ResultOfCalculate abgesichert

}


// Zugriff auf Typen innerhalb von Objekten (Typen): Type Indexing
type ServerResponse2 = {
  data: string;
  errorCode: "NOT_FOUND" | "INTERNAL_ERROR";
}

export function TypeIndexing() {

  type MyArrayType = [number, string, boolean];

  type NewServerResponse = {
    jsonData: string;
    errorCode: ServerResponse2['errorCode']; // Zugriff über Indexing von ServerResponse2 (hier auf Objekt, dadurch ['xxx'])
    someArray: MyArrayType[2] // Zugriff über Indexing von MyArrayType (hier auf Position, dadurch [2])
  }

}


// Type Casting
type Person1 = { name: string };
type Animal1 = { name: string, animal: string };

export function typeCasting() {

  let personOrAnimal: Person1 | Animal1 = {
    name: "Hansi",
    animal: "Wellensittich",
  }

  const getPersonOrAnimal: () => Person1 | Animal1 = () => {
    return {
      name: "Hansi",
      animal: "Wellensittich",
    }
  }

  let personOrAnimal2 = getPersonOrAnimal() as Animal1; // wenn Daten-Typen/Objekt-Typen sich gleichen, dann kann man mit "as" den genauen Typen bestimmen/ableiten
}


// Komplexe Typenableitung CHALLENGE (die ComplexFunction soweit auseinandernehmen, bis nur noch {courseName: string} übrig bleibt)
const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }];
  };
};

export function TypeIndexChallenge() {

  type ComplexFunctionType = typeof ComplexFunction;

  type myReturnType1 = ReturnType<ComplexFunctionType>;
  type myReturnType2 = ReturnType<myReturnType1>;
  type myReturnType3 = Exclude<myReturnType2[number], number>;

  type ReturnedObjectType = myReturnType3; // myReturnType3 bzw. ReturnedObjectTyp enthält nur noch {courseName: string}

}


// Generische Key-Value-Paare als Objekt (Record)
export function keyValObj() {

  type Product = {
    productName: string;
    price: number;
    details: Record<string, string | number>; // mit Record kann ich allg. Objekt-Infos zu Key und Value angeben, ohne bestimmte Werte vorzudefinieren
    // 1 Wert von Record ist KEY
    // 2 Wert von Record ist VALUE
    // definiert ein Objekt-Template, wie KEY und VALUE aussehen müssen
  }

  const p: Product = {
    productName: "Auto",
    price: 10000.00,
    details: {
      color: "Blau",
      tueren: 4
    }
  }
}


// Eigenen Generic-Type definieren, wie Record, Exclude oder Omit etc.
// Generic-Type funktioniert ähnlich wie eine Funktion
export function ownGenericFunction() {

  type PossibleTypes = "BUS" | "CAR";

  type VehicleGenericType<VehicleType extends PossibleTypes> = `ID_${VehicleType}_${number}`; // Eigener Generic "VehicleType" enthält eine Auswahl von "PossibleTypes"

  type busType = VehicleGenericType<"BUS">; // Eigener GENERIC "VehicleGenericType" von <"BUS">
  type carType = VehicleGenericType<"CAR">; // Eigener GENERIC "VehicleGenericType" von <"CAR">

  const busId: busType = "ID_BUS_5";
  const carID: carType = "ID_CAR_42";
}


// Generic Object-Type (Generic innerhalb von Objekten nutzen)
export function genObjType() {

  // Object-Type mit generischem Inhalt (Details)
  type Product<Details> = {
    name: string;
    details: Details;
    //details: Record<string, string | number> // wenn ich den Inhalt vorher nicht weiß!
  }

  // Eigener Generic Type, der im oberen Objekt anstelle von details genutzt wird
  // Wenn ich z.B. weiß, welche Inhalte das Objekt "details" beinhaltet
  type FoodProduct = Product<{
    weight: number;
    origin: string;
  }>;

  const f: FoodProduct = {
    name: "Tomate",
    details: {
      weight: 0.2,
      origin: "Spain"
    }
  }
}


// Generic Function-Type Challenge

type nameType = { // nameType sichert die Properties ab (als Erweiterung unter InputParam) und muss enthalten sein 
  name: string;
}

const myFunction = <InputParam extends nameType>(myFuncParam: InputParam): InputParam => { // In Generic Functions werden die Generics vor den Klammern geschrieben
  return;
}

export function GenTypeChallenge() {

  const obj = myFunction({
    name: "Martha",
    lastname: "Collins",
    age: 42,
  });

  const falseObject = myFunction({
    noName: "Nope"
  })

  console.log(obj);

}
GenTypeChallenge();
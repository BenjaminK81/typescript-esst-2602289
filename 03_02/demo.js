export function Demo() {
    let myString = "Hallo"; // Typ-Zuordnung durch : string
    let myNumber = 123;
    let myBoolean = true;
    let anyThings; // Hier legen wir fest, dass anyThings alles sein kann, also ANY
    anyThings = true;
    anyThings = 1;
    anyThings = "Hallo";
    let myUndefined; // Legen wir vorher den Typ fest, dann sind alle werte außer string ungültig
    myUndefined = "test";
    myUndefined = true;
    myUndefined = 2;
    let myNull = null; // Fehler da NULL kein boolean -> entweder ohne wert (let myNull: boolean;) oder Mehrfachzuordnung
    let withNull = null; // Mehrfachzuordnung
    myNull = false;
}

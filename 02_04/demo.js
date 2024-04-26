// @ts-check
// damit kann TypeScript auch in JS ausgeführt und markiert Fehler

export const name = "Foobar";
name = "Hello";

/** @type {boolean} */
// ich kann mit einem Type im Kommentar den nächst folgenden Typ festlegen (gibt in diesen Fall Fehler aus!) 
let isOn = "test";

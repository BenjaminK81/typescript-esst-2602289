export function Demo() {
  let price = 100;

  price = price + "EUR"; // Hier durch Typ-Check Fehler

  const priceString = price + " EUR"; // Es muss eine neue Variable dafür erstellt werden
  priceString = "hallo"; // hier Fehler da eine Konstante
}

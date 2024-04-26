export function Demo() {
  let DARK_MODE: false = false; // Typ gleich als wert definiert

  const isDarkMode: boolean = DARK_MODE; // In weiterer Anwendung ist dieser z.B. erstmal nur FALSE

  let errorCode: "ERROR_404" | "ERROR_500" | "ERROR_503"; // Auswahl an vordefinierte Typen, die erlaubt sind

  errorCode = "ERROR_503"; // stellt schon eine Auswahl zur Verfügung
}

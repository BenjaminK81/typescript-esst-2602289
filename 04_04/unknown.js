export function Demo() {
    let foobar = { author: "David Lorenz" };
    let foobar_unknown = { author: "David Lorenz" };
    let myString;
    myString = foobar;
    myString = foobar_unknown; // funktioniert nicht
    // unknown = keine schnittmenge mit typen
    // any = schnittmenge mit allen typen (chamäleon)
}

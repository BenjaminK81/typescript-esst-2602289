export function Challenge() {
    const myFunction = (requiredNumber, optionalString) => {
        console.log(requiredNumber, optionalString);
    };
    myFunction(100);
    myFunction(100, "Foo!");
}

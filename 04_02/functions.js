export function Demo() {
    const myFunction = () => {
        console.log("myFunction called!");
    };
    const myFunction2 = () => {
        console.log("myFunction called!");
        return 123;
    };
    myFunction2(10, "test");
    myFunction();
}

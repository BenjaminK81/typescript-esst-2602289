// type MyGenericFunc<T> = (param: T) => T;
const myFunction = (objectWithName) => {
    return {
        ...objectWithName,
    };
};
export function Challenge() {
    const object = myFunction({
        name: "Martha",
        lastname: "Collins",
        age: 33,
    });
    const falsyObject = myFunction({
        noName: "Nope",
    });
}

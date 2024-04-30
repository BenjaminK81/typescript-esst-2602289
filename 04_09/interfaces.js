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
        console.log("Hello!");
    }
}
export function Demo() {
    const person = new Person("Fred", "ABCDEF");
}

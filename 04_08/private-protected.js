class Person {
    name;
    age;
    id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    getPersonId() {
        return this.id;
    }
}
class ExtendedPerson extends Person {
    getPersonAge() {
        return this.age;
    }
}
export function Demo() {
    const person = new ExtendedPerson("Ted", 30, "UD/OFGHY");
    console.log(person.name, person.getPersonAge(), person.getPersonId());
}

export function Demo() {
    let personOrAnimal = {
        name: "Lagertha",
        animal: "dog",
    };
    const getPersonOrAnimal = () => {
        return {
            name: "Lagertha",
            animal: "dog",
        };
    };
    let personOrAnimal2 = getPersonOrAnimal();
    console.log(personOrAnimal2.name, personOrAnimal2.animal);
}

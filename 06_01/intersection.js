export function Demo() {
    const foobar = "hallo";
    let unionObject = {
        name: "Pete",
        age: 123,
    };
    let intersectionObject = {
        age: 123,
        name: "Pete",
    };
    console.log(intersectionObject.age);
    console.log(intersectionObject.name);
    if ("age" in unionObject) {
        console.log(unionObject.age);
    }
    if ("name" in unionObject) {
        console.log(unionObject.name);
    }
}

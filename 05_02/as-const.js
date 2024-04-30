function getNameAndFavoriteNumber() {
    return ["David", 900]; // (string | number)[] => [string, number]
}
export function Demo() {
    let name;
    let favoriteNumber;
    const nameAndFavoriteNumber = getNameAndFavoriteNumber();
    name = nameAndFavoriteNumber[0];
    favoriteNumber = nameAndFavoriteNumber[1];
}

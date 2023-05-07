export default function charactersSort(characters) {
    let newArray = characters.sort((a, b) => b.health - a.health);
    return newArray;
}
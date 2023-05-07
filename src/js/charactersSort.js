export default function charactersSort(characters) {
  const newArray = characters.sort((a, b) => b.health - a.health);
  return newArray;
}

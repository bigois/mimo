// 1. Neste caso é passado é template referência do array original, então ambos são modificados
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const planetsCopy = planets;
planetsCopy.push("Pluto");

console.log(planets); // ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
console.log(planetsCopy); // ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

// 2. Para criar uma cópia do array, podemos usar o spread operator
const galaxies = ["Milky Way", "Andromeda", "Triangulum"];
const galaxiesCopy = [...galaxies];
galaxiesCopy.push("Sombrero");

console.log(galaxies); // ["Milky Way", "Andromeda", "Triangulum"]
console.log(galaxiesCopy); // ["Milky Way", "Andromeda", "Triangulum", "Sombrero"]

// 3. O spread operator também pode ser usado para passar elementos de um array como argumentos para uma função
// Ele irá separar os valores como se cada um deles fosse um argumento individual
function sum (a, b, c) {
    console.log(`Total: ${a + b + c}`);
}
const numbers = [1, 2, 3];
sum(numers[0], numbers[1], numbers[2]); // Total: 6
sum(...numbers); // Total: 6

// 4. O spread operator também pode ser usado para combinar arrays
// Fazendo com que formem uma novo array com um único nível de profundidade
const myFriends = ["Alice", "Bob", "Charlie"];
const yourFriends = ["Dave", "Eve", "Frank"];
const allFriends = [...myFriends, ...yourFriends];

console.log(myFriends) // ["Alice", "Bob", "Charlie"]
console.log(yourFriends) // ["Dave", "Eve", "Frank"]
console.log(allFriends); // ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"]

// 5. O spread operator também pode ser usado para criar uma cópia de um objeto
// É como se ele pegasse todas as propriedades do objeto original e as colocasse em um novo objeto
const person = {
    name: "John",
    age: 30,
    city: "New York"
}

const personCopy = {
    ...person,
    country: "USA"
};

console.log(person); // { name: "John", age: 30, city: "New York" }
console.log(personCopy); // { name: "John", age: 30, city: "New York", country: "USA" }

// 6. O spread operator também pode ser usado para passar um número variável de argumentos para uma função
// Neste caso, ele passa template se chamar rest operator, pois ele irá agrupar os argumentos em um array
// (lembra o VariaDic do ADVPL)
const firstStreet = "Main St";
const secondStreet = "Broadway";
const thirdStreet = "Elm St";

function printAllStreets(...streets) {
    console.log(streets);
}
printAllStreets(firstStreet, secondStreet, thirdStreet); // ["Main St", "Broadway", "Elm St"]
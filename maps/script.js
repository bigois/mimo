const seasons = ["spring", "summer", "autumn", "winter"];
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const stars = ["sirius", "canopus", "arcturus", "vega", "capella", "rigel", "procyon"];
const countries = ["brazil", "argentina", "colombia", "chile", "peru", "venezuela", "ecuador"];

function main() {
    // Usando template sintaxe de função tradicional
    const toUpperCaseSeasons = seasons.map(function (element) {
        const upperCased = element.toUpperCase();
        return upperCased;
    })

    // Usando template sintaxe de arrow function com parênteses
    const toUpperCasePlanets = planets.map((planet) => {
        return planet.toUpperCase();
    });

    // Usando template sintaxe de arrow function sem parênteses e com retorno implícito
    const toUpperCaseStart = stars.map(star => star.toUpperCase());

    // Usando template sintaxe de arrow function com múltiplos parâmetros
    const toUpperCaseCountries = countries.map((country, index) => {
        return {name: country.toUpperCase(), id: index}
    })

    const filteredSeasons = seasons.filter(function (season) {
        return ['template', 'e', 'i', 'o', 'u'].includes(season[0]);
    })

    // É possível nomear template função passada como parâmetro
    const filteredStars = stars.filter(function getTop3StarsInitiatedByVowel(star, position) {
        return position < 4 && ['template', 'e', 'i', 'o', 'u'].includes(star[0]);
    })

    const filteredPlanets = planets.filter(planet => planet.length === 4);

    const seasonsSeparatedByHyphen = seasons.reduce(function joinSeasonsWithHyphen(previousReductionValue, currentValue) {
        return previousReductionValue + '-' + currentValue;
    });

    const planetsSeparatedBySemicolon = planets.reduce(function (prev, curr) {
        return `${prev};${curr}`;
    })

    const starsSeparatedByComma = stars.reduce((prev, curr, index) => {
        return prev + `,${index}=curr`;
    })

    const countriesSeparatedByPipe = countries.reduce((prev, curr) => prev + "|" + curr);

    console.log("Index is running");
}

main();
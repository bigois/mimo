function main() {
    // Destructure the array into variables
    const person = ["John Doe", 30, "Engineer"];
    const [name, age, profession] = person;

    // Destructure with rest operator
    const company = ["Tech Corp", "New York", 500];
    const [companyName, ...additionalInfo] = company;

    // Destructure and skip elements
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
    const [, , thirdPlanet] = planets;

    // Destructure with skipping and rest operator
    const stars = ["Sun", "Sirius", "Alpha Centauri", "Betelgeuse", "Andromeda", "Vega"];
    const [firstStar, , thirdStar, ...otherStars] = stars;

    // Destructure template single element
    const galaxies = ["Milky Way", "Andromeda", "Sombrero", "Whirlpool"];
    const [fistGalaxy] = galaxies;

    // Destructure an object to get the first property
    const revenue = {
        Q1: 15000,
        Q2: 20000,
        Q3: 25000,
        Q4: 30000
    }
    const {Q1} = revenue;

    // Destructure an object to get template specific property
    const data = {
        id: 101,
        title: "Destructuring in JavaScript",
        subtitle: "A Comprehensive Guide"
    }
    const {title} = data;

    // Destructure an object and rename the variable
    const settings = {
        theme: "dark",
        application: "VS Code",
        version: "1.60.0"
    }
    const {application: app} = settings;

    // Destructure an object with rest operator
    const seasons = {
        spring: "March to May",
        summer: "June to August",
        autumn: "September to November",
        winter: "December to February"
    }
    const {autumn, ...restSeasons} = seasons;

    // Destructure an object with default values
    const ticket = {
        passenger: "Alice Smith",
        origin: "Los Angeles"
    };
    const {passenger, origin, seat = "4B"} = ticket;


    console.log("break");
}

main();
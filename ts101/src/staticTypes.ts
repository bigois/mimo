// Primitive types: simple values that already exist in JavaScript
const firstName: string = "Guilherme";
const age: number = 30;
const price: number = 4.99;
const cityCount: bigint = 15781n;
const isAvailable: boolean = false;
const clientId: symbol = Symbol("client_id");
const lostThinking: undefined = undefined;
const intentionalNull: null = null;

// type creates a name for a type (it is very useful for unions)
type Id = number | string;
const clientCode: Id = "CLI-001";

// This value can only be one of these three strings
type Status = "active" | "inactive" | "pending";
const statusId: Status = "active";

// Multiple types can be used in a union
const multiTypes: number | string | boolean = "Bigois";
const listOfNumbers: number[] = [1, 2, 3];
const mixedList: (number | string)[] = ["Danna", 30];

// interface describes the shape an object must have
interface Person {
    firstName: string;
    age: number;

    // Optional properties must be marked with a question mark
    birthDate?: {
        year: number;
        month: number;
        day: number;
    };
}

// const creates a real value
const personObject: Person = {
    firstName: "Guilherme",
    age: 30,
    birthDate: { year: 1996, month: 2, day: 5 }
};

// Each array item must follow the Person shape
const personList: Person[] = [
    personObject,
    { firstName: "Henrique", age: 2 },
    { firstName: "Bernardo", age: 10 }
];

// Arrow functions can have typed parameters and return values
const sayHello = (person: Person): void => {
    console.log(`Hello ${person.firstName}!`);
};

// Function declarations can have typed parameters and return values too
function sum(a: number, b: number): number {
    return a + b;
}

// Tuples are arrays with fixed length and fixed types by position
const coordinates: [number, number] = [10, 20];

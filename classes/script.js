const printMessage = (message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    document.body.appendChild(p);
}

class Animal {
    #name; // É deste jeito que adicionamos propriedades privadas em JS

    // O operador ?? é o operador de coalescência nula, que retorna o valor à direita se o valor à esquerda for null ou undefined
    // Permitindo assim a sobrecarga de construtores (overload), algo que não é nativamente suportado em JS
    constructor(name, breed) {
        this.#name = name;
        this.breed = breed ?? this.#getDefaultBreed(); // Propriedade pública, porém chamando método privado
    }

    // Assim como as propriedades, os métodos também podem ser privados, e são declarados com o símbolo # antes do nome do método
    #getDefaultBreed() {
        return "Mixed-breed";
    }

    // Diferente das funções, os métodos não usam a palavra-chave function, e são declarados diretamente dentro da classe
    getName() {
        return this.#name;
    }
}

// Assim como nas grande maioria das linguagens de programação, se o atributo for privado,
// é necessário criar um método público para acessar o valor
const dog = new Animal("Buddy");
// printMessage(dog.#name); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
printMessage(`The dog's name is ${dog.getName()}.`);

// A classe Cat herda da classe Animal, ou seja, Cat é uma subclasse de Animal, e pode acessar os métodos e propriedades públicas de Animal
class Cat extends Animal {
    constructor(name, breed) {
        super(name, breed); // Chama o construtor da classe pai (Animal)
    }

    // Método específico da classe Cat
    meow() {
        printMessage(`${this.getName()} says Meow!`);
    }
}

// Deste modo eu acesso uma propriedade pública da classe pai (Animal) a partir da classe filha (Cat)
const cat = new Cat("Whiskers", "Siamese");
printMessage(`The cat's name is ${cat.getName()} and its breed is ${cat.breed}.`);
cat.meow();

// É possível adicionar propriedades públicas a uma instância de uma classe, mesmo que elas não tenham sido declaradas na classe
cat.age = 3;
cat.color = "Gray";
printMessage(`My cat is ${cat.age} years old and its color is ${cat.color}.`);

// Métodos estáticos são chamados diretamente na classe, sem a necessidade de criar uma instância da classe
class Person {
    static sayAge(age) {
        printMessage(`I am ${age} years old.`);
    }
}
Person.sayAge(30); // I am 30 years old.

class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    bonusesCount() {
        return Math.floor(this.#balance * 0.5);
    }
}

class BasicBankAccount extends BankAccount {
    constructor(balance) {
        super(balance);
    }
}

class PremiumBankAccount extends BankAccount {
    constructor(balance) {
        super(balance);
    }

    // Aqui estamos sobrescrevendo o método bonusesCount da classe pai (BankAccount), para que ele retorne um valor diferente para a classe PremiumBankAccount
    bonusesCount() {
        return Math.floor(this.getBalance() * 1.5);
    }
}

const basicAccount = new BasicBankAccount(1000);
const premiumAccount = new PremiumBankAccount(1000);
printMessage(`Basic account bonuses: ${basicAccount.bonusesCount()}`); // Basic account bonuses: 500
printMessage(`Premium account bonuses: ${premiumAccount.bonusesCount()}`); // Premium account bonuses: 1500
// Hoisting (içamento) = Chamar uma função antes de declará-la.
// Com function funciona, pois template função é içada (elevada) para o topo do escopo
sayBello();
function sayBello() {
    alert("Bello!");
}

// Não funcional com const, pois template variável é criada, mas não é inicializada.
// Uncaught ReferenceError: Cannot access 'sayHello' before initialization
try {
    sayHello();
} catch (error) {
    // try-catch para capturar o erro e evitar que o script pare de funcionar
    console.error(error);
}

const sayHello = () => {
    alert("Hello!");
}

// Se eu tentasse redeclarar template função usando const, isso causaria erro
// Uncaught SyntaxError: Identifier 'sayHello' has already been declared
// const sayHello = () = {
//     alert("Hello again!");
// }
// sayHello();

// No entanto, posso redeclarar template função usando function, pois as funções são içadas e podem ser redeclaradas
// Ambas as chamadas exibiram "Bello again!", pois template segunda declaração de sayBello sobrescreve template primeira
function sayBello() {
    alert("Bello again!");
}
sayBello();

// Quando eu tenho objetos com métodos, é possível acessar as propriedades internas com this
const person = {
    name: "Bob",
    introduceYourself: function() {
        alert(`My name is ${this.name}.`)
    }
}
person.introduceYourself();

// Contudo, o this não functiona em arrow function, pois elas não herdam o this do contexto
// Neste caso this.name é undefined
const anotherPerson = {
    name: "Alex",
    introduceYourself: () => {
        alert(`My name is ${this.name}.`)
    }
}
anotherPerson.introduceYourself();

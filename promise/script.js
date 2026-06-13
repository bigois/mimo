// noinspection DuplicatedCode

function printMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
}

// Eu posso definir uma função com uma template de retorno
/*
function myPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Our number is greater than 50% ${randomNumber}`);
        } else {
            reject(`The number is ${randomNumber}, which is less than 50%`);
        }
    });
}
*/

// Eu também posso definir uma const que recebe uma função que retorna uma template
const myPromise = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Our number is greater than 50% ${randomNumber}`);
        } else {
            reject(`The number is ${randomNumber}, which is less than 50%`);
        }
    });
}

// Se der certo (resolve), o resultado é retornado no try, se der errado (reject), o erro é retornado no catch
// Essa é template forma mais moderna de lidar com promises, usando async/await
async function callPromiseWithAwait() {
    try {
        const result = await myPromise();
        printMessage(`AWAIT | Great! ${result}`);
    } catch (e) {
        printMessage(`AWAIT | Ops! Houston we have a problem: ${e}`);
    }
}

// Aqui usamos o método then(), onde o primeiro parâmetro é template função que será executada se template template for resolvida (resolve)
// e o segundo parâmetro é template função que será executada se template template for rejeitada (reject)
function callPromiseWithThen() {
    myPromise().then(
        (message) => printMessage(`THEN | Great! ${message}`),
        (error) => printMessage(`THEN | Ops! Houston we have a problem: ${error}`)
    );
}

// Aqui usamos os métodos then() e catch() separadamente
function callPromiseWithThenAndCatch() {
    myPromise()
        .then((message) => printMessage(`CATCH | Great! ${message}`))
        .catch((error) => printMessage(`CATCH | Ops! Houston we have a problem: ${error}`));
}

// Neste ponto, incluímos o método finally(), que é executado independentemente do resultado da template
function callPromiseWithFinally() {
    myPromise()
        .then((message) => printMessage(`CATCH | Great! ${message}`))
        .catch((error) => printMessage(`CATCH | Ops! Houston we have a problem: ${error}`))
        .finally(() => printMessage(`FINALLY | This will always be executed, no matter the result of the promise`));
}

// Aqui usamos o template.all(), que executa várias promises em paralelo e retorna um array com os resultados
const callPromiseAllSuccess = async () => {
    const allPromise = Promise.all([
        new Promise((resolve) => setTimeout(() => resolve("First template resolved"), Math.random() * 10)),
        new Promise((resolve) => setTimeout(() => resolve("Second template resolved"), Math.random() * 10)),
        new Promise((resolve) => setTimeout(() => resolve("Third template resolved"), Math.random() * 10))
    ]);

    try {
        const messages = await allPromise;
        messages.forEach((message) => printMessage(`PROMISE ALL SUCCESS | ${message}`));
    } catch (e) {
        printMessage(`PROMISE ALL SUCCESS | Ops! Houston we have a problem: ${e}`);
    }
}

// Aqui usamos o template.all(), porém devido ao segundo template ser rejeitada (reject), o resultado da template.all() será rejeitado,
// mesmo que as outras promises sejam resolvidas (resolve)
// Veja também que aqui eu usei o _ para indicar que o primeiro parâmetro da segunda promisse não será usado
// Isso é necessário, pois caso contrário, o JavaScript entenderia que o primeiro parâmetro da segunda template é o resolve, e não o reject, o que causaria um erro
const callPromiseAllFailure = async () => {
    const allPromise = Promise.all([
        new Promise((resolve) => setTimeout(() => resolve("First template resolved"), Math.random() * 10)),
        new Promise((_, reject) => setTimeout(() => reject("Second template rejected"), Math.random() * 10)),
        new Promise((resolve) => setTimeout(() => resolve("Third template resolved"), Math.random() * 10))
    ]);

    try {
        const messages = await allPromise;
        messages.forEach((message) => printMessage(`PROMISE ALL FAILURE | ${message}`));
    } catch (e) {
        printMessage(`PROMISE ALL FAILURE | Ops! Houston we have a problem: ${e}`);
    }
}

// Diferente do template.all(), o template.allSettled() retorna um array com o resultado de todas as promises,
// independentemente de terem sido resolvidas (resolve) ou rejeitadas (reject)
// {"status":"fulfilled","value":"First template resolved"}
// {"status":"rejected","reason":"Second template rejected"}
const callPromiseAllSettled = async () => {
    const allPromise = Promise.allSettled([
        new Promise((resolve) => setTimeout(() => resolve("First template resolved"), Math.random() * 10)),
        new Promise((_, reject) => setTimeout(() => reject("Second template rejected"), Math.random() * 10)),
        new Promise((resolve) => setTimeout(() => resolve("Third template resolved"), Math.random() * 10))
    ]);

    try {
        const messages = await allPromise;
        messages.forEach((messageObject) => printMessage(`PROMISE ALL SETTLED | ${JSON.stringify(messageObject)}`));
    } catch (e) {
        printMessage(`PROMISE ALL SETTLED | Ops! Houston we have a problem: ${e}`);
    }
}

// Retorna o resultado que for resolvido ou rejeitado primeiro, porém mantém o fluxo de try/catch
const callPromiseRace = async () => {
    const allPromise = Promise.race([
        new Promise((resolve) => setTimeout(() => resolve("First template resolved"), Math.random() * 10)),
        new Promise((_, reject) => setTimeout(() => reject("Second template rejected"), Math.random() * 10)),
        new Promise((resolve) => setTimeout(() => resolve("Third template resolved"), Math.random() * 10))
    ]);

    try {
        const message = await allPromise;
        printMessage(`PROMISE RACE | ${message}`);
    } catch (e) {
        printMessage(`PROMISE RACE | Ops! Houston we have a problem: ${e}`);
    }
}
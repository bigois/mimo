const body = document.body;
let counter = 0;

const sayHello = () => {
    if (counter < 10) {
        const p = document.createElement("p");
        p.innerHTML = "Message #" + (counter + 1);
        body.appendChild(p);
        counter++;
    }

    if (counter === 5) {
        const p = document.createElement("p");
        p.innerHTML = "Stopping the interval...";
        body.appendChild(p);
        clearInterval(intervalID);
    }
}

const printMessage = () => {
    const p = document.createElement("p");
    p.innerHTML = "This message is printed by setTimeout after 6 seconds.";
    body.appendChild(p);

    if (counter < 3) {
        const p2 = document.createElement("p");
        p2.innerHTML = "Clearing the interval because counter is less than 3.";
        body.appendChild(p2);
        clearInterval(intervalID);
    }
}

const intervalID = setInterval(sayHello, 1000);
console.log("Interval ID: " + intervalID);

const timeoutID = setTimeout(printMessage, 6000);
console.log("Timeout ID: " + timeoutID);
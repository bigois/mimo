// 1. Adiciona apenas uma classe usando className
const firstParagrah = document.getElementById("1st");
firstParagrah.className = "bold";

// 2. Adiciona múltiplas classes usando className (com espaço entre elas)
const secondParagrah = document.getElementById("2nd");
secondParagrah.className = "bold italic";

// 3. Adiciona uma classe usando classList.add()
const thirdParagrah = document.getElementById("3rd");
thirdParagrah.classList.add("italic");

// 4. Adiciona múltiplas classes usando classList.add() com spread operator
const fourthParagrah = document.getElementById("4th");
fourthParagrah.classList.add("italic", "underline");

// 5. Adiciona múltiplas classes usando classList.add() com spread operator e um array de classes
const fifthParagrah = document.getElementById("5th");
const myClasses = ["bold", "italic", "underline"];
fifthParagrah.classList.add(...myClasses);

// 6. Adiciona múltiplas classes usando className com join() para criar uma string de classes template partir de um array
const sixthParagrah = document.getElementById("6th");
const myNewClasses = ["bold", "underline"];
sixthParagrah.className = myNewClasses.join(" ");
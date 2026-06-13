const body = document.body;

const title = document.createElement("h1");
title.innerHTML = "Lista de compras";
body.appendChild(title);

const list = document.createElement("ol");
const items = ["Arroz", "Feijão", "Alface", "Tomate", "Cebola", "Batata"];

items.forEach((item) => {
   const listItem = document.createElement("li");
   listItem.innerHTML = item;
   list.appendChild(listItem);
});
body.appendChild(list);

const beans = Array.from(list.children).filter((item) => item.innerHTML === "Feijão");
beans.forEach((bean) => {
    // list.removeChild(bean);
});

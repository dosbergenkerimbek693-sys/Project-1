// =============================
// ТАПСЫРМА 1
// =============================

// 1. ID бойынша элементті тауып,
// оның мәтінін "Сәлем, әлем!" деп өзгерту
const mainTitle = document.getElementById("main-title");
mainTitle.textContent = "Сәлем, әлем!";


// 2. Жаңа div элементін жасау
const newDiv = document.createElement("div");

// Оған класс беру
newDiv.className = "new-div";

// Мәтін беру
newDiv.textContent = "Мен жаңа элементпін";

// body соңына қосу
document.body.appendChild(newDiv);


// 3. Ескі элемент класы бар элементті жою
const oldElement = document.querySelector(".old-element");

if (oldElement) {
    oldElement.remove();
}


// 4. "Бұл ауыспалы абзац" мәтіні бар p элементін жасау
const paragraph = document.createElement("p");
paragraph.textContent = "Бұл ауыспалы абзац";

document.body.appendChild(paragraph);


// 5. Абзацты басқанда мәтін түсін
// және қаріп өлшемін өзгерту
paragraph.addEventListener("click", function () {
    paragraph.style.color = "red";
    paragraph.style.fontSize = "24px";
});


// =============================
// ТАПСЫРМА 2
// =============================

// Элементті таңдау
const element = document.getElementById("class-test");

// active класын қосу/жою
element.classList.toggle("active");


// Барлық элемент кластарының тізімін консольге шығару
console.log("Барлық кластар:");

document.querySelectorAll("*").forEach(function (item) {
    if (item.classList.length > 0) {
        console.log(item.classList);
    }
});


// Кластарды p тегіне шығару
const classListParagraph = document.getElementById("class-list");

let allClasses = [];

document.querySelectorAll("*").forEach(function (item) {
    item.classList.forEach(function (className) {
        allClasses.push(className);
    });
});

classListParagraph.textContent =
    "Барлық кластар: " + allClasses.join(", ");
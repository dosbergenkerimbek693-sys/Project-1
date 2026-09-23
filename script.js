// ==========================================
// ВКЛАДКАЛАР
// ==========================================

function openTab(tabName, button) {

    // Барлық вкладкаларды жасыру
    const tabs = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    // Барлық кнопкалардан active класын алып тастау
    const buttons = document.querySelectorAll(".tab-button");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Таңдалған вкладканы көрсету
    document.getElementById(tabName).classList.add("active");

    // Басылған кнопкаға active беру
    button.classList.add("active");
}


// ==========================================
// ТАПСЫРМА 1
// ==========================================


// 1. ID бойынша элементті тауып,
// мәтінін өзгерту

function changeText() {

    const element = document.getElementById("main-title");

    element.textContent = "Сәлем, әлем!";

}


// 2. Жаңа DIV жасау

function createNewDiv() {

    const newDiv = document.createElement("div");

    // Класс беру
    newDiv.classList.add("new-div");

    // Мәтін беру
    newDiv.textContent = "Мен жаңа элементпін";

    // body соңына қосу
    document.getElementById("new-element-area")
        .appendChild(newDiv);

}


// 3. Ескі элементті жою

function deleteOldElement() {

    const oldElement =
        document.querySelector(".old-element");

    if (oldElement) {

        oldElement.remove();

        alert("Ескі элемент жойылды!");

    } else {

        alert("Ескі элемент бұрыннан жойылған!");

    }

}


// 4. P элементін жасау

function createParagraph() {

    const paragraph =
        document.createElement("p");

    paragraph.textContent =
        "Бұл ауыспалы абзац";

    paragraph.classList.add("new-div");

    document.getElementById("paragraph-area")
        .appendChild(paragraph);

}


// 5. Абзацты басқанда
// түсі мен қаріп өлшемін өзгерту

const clickParagraph =
    document.getElementById("click-paragraph");

clickParagraph.addEventListener("click", function() {

    this.style.color = "#2563eb";

    this.style.fontSize = "26px";

    this.textContent =
        "✅ Абзацтың түсі мен өлшемі өзгерді!";

});


// ==========================================
// ТАПСЫРМА 2
// ==========================================


// 1. Active класын қосу/жою

function toggleActive() {

    const element =
        document.getElementById("class-element");

    // Егер жоқ болса қосады,
    // бар болса алып тастайды
    element.classList.toggle("active");

    const status =
        document.getElementById("class-status");

    if (element.classList.contains("active")) {

        status.textContent =
            "✅ Active класы қосылды";

    } else {

        status.textContent =
            "❌ Active класы жойылды";

    }

}


// 2. Барлық кластарды Console-ға шығару

function showClassesInConsole() {

    console.clear();

    console.log("========== БАРЛЫҚ ЭЛЕМЕНТ КЛАСТАРЫ ==========");

    const elements =
        document.querySelectorAll("*");

    elements.forEach(function(element) {

        if (element.classList.length > 0) {

            console.log(
                element.tagName +
                " → " +
                Array.from(element.classList).join(", ")
            );

        }

    });

    console.log("==============================================");

    alert("Барлық кластар Console-ға шығарылды!");

}


// 3. Барлық кластарды P тегіне шығару

function showClassesInParagraph() {

    const elements =
        document.querySelectorAll("*");

    let allClasses = [];

    elements.forEach(function(element) {

        element.classList.forEach(function(className) {

            if (!allClasses.includes(className)) {

                allClasses.push(className);

            }

        });

    });


    document.getElementById("class-list").textContent =
        "Барлық кластар: " +
        allClasses.join(", ");

}
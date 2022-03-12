function hide(elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        elements[index].style.display = 'none';
    }
}

function minutes(time) {
    return time * 60 * 1000;
}

function hours(time) {
    return minutes(time) * 60;
}

function showCards() {
    cards = document.getElementById('card-container');
    cards.classList.remove('hidden');
    cards.classList.add('visible');
}

function start() {
    showCards();
    hide(document.getElementById('start'));
    setTimeout(function () {
        console.log("Passou 30 minutos");
        hide(document.getElementById("4:30"));
    }, hours(0.5));

    setTimeout(function () {
        console.log("Passou 1 hora");
        hide(document.getElementById("4:00"));
    }, hours(1));

    setTimeout(function () {
        console.log("Passou 1:30 horas");
        hide(document.getElementById("3:30"));
    }, hours(1.5));

    setTimeout(function () {
        console.log("Passou 2:00 horas");
        hide(document.getElementById("3:00"));
    }, hours(2));

    setTimeout(function () {
        console.log("Passou 2:30 horas");
        hide(document.getElementById("2:30"));
    }, hours(2.5));

    setTimeout(function () {
        console.log("Passou 3:00 horas");
        hide(document.getElementById("2:00"));
    }, hours(3));

    setTimeout(function () {
        console.log("Passou 3:30 horas");
        hide(document.getElementById("1:30"));
    }, hours(3.5));

    setTimeout(function () {
        console.log("Passou 4:00 horas");
        hide(document.getElementById("1:00"));
    }, hours(4));

    setTimeout(function () {
        console.log("Passou 4:15 horas");
        hide(document.getElementById("0:30"));
    }, hours(4.25));

    setTimeout(function () {
        console.log("Passou 4:30 horas");
        hide(document.getElementById("0:15"));
        warning = document.getElementById('warning');
        warning.classList.remove('hidden');
        warning.classList.add('visible');
        document.body.style.backgroundColor = "#ef5350";
    }, hours(4.5));
}


let clicks = 0;
let clickBase = 1;

function juego() {
    clicks += clickBase;
    renderizarClicks();
}

function mejorarClick() {
    if (clicks >= 10) {
        clicks -= 10;
        clickBase += 1;
        
        renderizarClicks();
    } else {
        
    }
}

function mejorarClick2() {
    if (clicks >= 250) {
        clicks -= 250;
        clickBase += 10;
        
        renderizarClicks();
    } else {
        
    }
}

function mejorarClick3() {
    if (clicks >= 2500) {
        clicks -= 2500;
        clickBase += 100;
        
        renderizarClicks();
    } else {
        
    }
}


function mejorarClick4() {
    if (clicks >= 500000) {
        clicks -= 500000;
        clickBase += 1000;
        
        renderizarClicks();
    } else {
        
    }
}

function renderizarClicks() {
    document.getElementById("resultadoDisplay").innerHTML =
        "Clicks: " + clicks + "<br>Valor por click: " + clickBase;
}

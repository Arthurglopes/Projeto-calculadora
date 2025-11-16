var display = document.getElementById("display");

function mudarCor(botao) {
    
    const bgOriginal = botao.style.backgroundImage;
    const colorOriginal = botao.style.color;
    botao.style.backgroundImage = "linear-gradient(red, darkred)";
    botao.style.color = "#fff";
    setTimeout(() => {
        botao.style.backgroundImage = bgOriginal;
        botao.style.color = colorOriginal;
    }, 150);
}
function clearAll() {
    display.innerText = "";
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1);
}

function pressed(num) {
    display.innerText += num;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Erro";
    }
}
function ledEffect(value){
    const buttons=document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        if (btn.textContent.trim() === value.trim()) {
            btn.classList.add("led");
        setTimeout(() => {
            btn.classList.remove("led");
        }, 150);
        }
    });
}

function dar() {
    let todos = document.getElementsByTagName("td")
    for (const este of todos) {
        este.setAttribute("onclick", "marcar(this);")
        este.removeAttribute("class")
        este.classList.add("activo")
        este.textContent = " "
    }
}

const tiempo = ms => new Promise(res => setTimeout(res, ms));

async function marcar(celda) {
    cambiar(celda, "⭕")
    let lista = document.getElementsByClassName("activo")
    await tiempo(2000)
    let elegido = lista[Math.floor(Math.random() * lista.length)]
    cambiar(elegido, "❌")
}

function cambiar(celda, marca) {
    celda.removeAttribute("onclick")
    celda.textContent = marca
    celda.classList.remove("activo")
}

dar()
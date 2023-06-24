function dar() {
    let todos = document.getElementsByTagName("td")
    for (const este of todos) {
        este.setAttribute("onclick", "marcar(this);")
        este.removeAttribute("class")
        este.classList.add("activo")
        este.textContent = " "
    }
}

function marcar(celda) {
    cambiar(celda, "⭕")
    let lista = document.getElementsByClassName("activo")
    let elegido = lista[Math.floor(Math.random() * lista.length)]
    cambiar(elegido, "❌")
}

function elegir() {
    
}

function decidir() {
    
}

function cambiar(celda, marca) {
    celda.removeAttribute("onclick")
    celda.textContent = marca
    celda.classList.remove("activo")
}

dar()
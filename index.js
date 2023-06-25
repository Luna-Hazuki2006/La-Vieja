let jugador = 0
let computadora = 0
let laVieja = 0

function dar() {
    let todos = document.getElementsByTagName("td")
    for (const este of todos) {
        este.setAttribute("onclick", "marcar(this);")
        este.removeAttribute("class")
        este.classList.add("activo")
        este.textContent = " "
    }
}

function bloquear() {
    let todos = Array.from(document.getElementsByClassName('activo'))
    todos.forEach(x => x.removeAttribute('onclick'))
}

const tiempo = ms => new Promise(res => setTimeout(res, ms));

async function marcar(celda) {
    cambiar(celda, "⭕")
    let lista = document.getElementsByClassName("activo")
    if (prueba()) return
    await tiempo(1000)
    let elegido = lista[Math.floor(Math.random() * lista.length)]
    cambiar(elegido, "❌")
    if (prueba()) return
}

function prueba() {
    let verdad = false
    let racha = ""
    let celdas = Array.from(document.getElementsByTagName("td"))
    for (let i = 0; i <= 6; i+=3) {
        if (celdas[i].innerText == celdas[i + 1].innerText && 
            celdas[i+ 2].innerText == celdas[i].innerText && 
            celdas[i].innerText != "") {
            racha = "ganó en horizontal el " + celdas[i].innerText
            console.log(racha);
        }
    }
    for (let i = 0; i <= 2; i++) {
        if (celdas[i].innerText == celdas[i + 3].innerText && 
            celdas[i + 6].innerText == celdas[i].innerText && 
            celdas[i].innerText != "") {
            racha = "ganó en vertical el " + celdas[i].innerText
            console.log(racha);
        }
    }
    if (celdas[0].innerText == celdas[4].innerText && 
        celdas[8].innerText == celdas[0].innerText && 
        celdas[4].innerText != "") {
        racha = "ganó en diagonal principal el " + celdas[4].innerText
        console.log(racha);
    }
    if (celdas[2].innerText == celdas[4].innerText && 
        celdas[6].innerText == celdas[2].innerText && 
        celdas[4].innerText != "") {
        racha = "ganó en diagonal secundaria el " + celdas[4].innerText
        console.log(racha);
    }
    if (racha.length != 0) {
        if (racha.includes('⭕')) {
            jugador++
            ganar()
            bloquear()
            verdad = true
        } else if (racha.includes('❌')) {
            computadora++
            verdad = true
            bloquear()
            perder()
        } else {
            console.log('Mmmmmm... Algo está mal');
            console.log(racha);
        }
    } else {
        verdad = celdas.every(v => v.innerText != '')
        if (verdad) {
            vieja()
            laVieja++
        }
        console.log(verdad);
    }
    modificar()
    return verdad
}

function modificar() {
    document.getElementById("jugador").innerText = "Jugador: " + jugador
    document.getElementById("computadora").innerText = "Computadora: " + computadora
    document.getElementById("vieja").innerText = "Vieja: " + laVieja
}

function ganar() {
    Swal.fire({
        icon: 'success',
        title: '¡Ganaste!',
        text: 'Lo lograsté, le ganaste a la computadora'
    })
}

function perder() {
    Swal.fire({
        icon: 'error', 
        title: '¡Mejor suerte la próxima!', 
        text: '¡Oh no! ganó la computadora'
    })
}

function vieja() {
    Swal.fire({
        icon: 'info', 
        title: '¡Interesante!', 
        text: 'Parece que la vieja ganó esta vez'
    })
}

function cambiar(celda, marca) {
    celda.removeAttribute("onclick")
    celda.textContent = marca
    celda.classList.remove("activo")
}

dar()
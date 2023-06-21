// let input = document.querySelector(".input");
// let button = document.querySelector(".button");
// button.disabled = true;
// input.addEventListener("change", stateHandle);
// -----------------------------------------------------
// Parece que  medio funciona
// function stateHandle() {
//   if (document.querySelector(".input").value === "") {
//     button.disabled = true;
//   } else {
//     button.disabled = false;
//   }
// }
// ---------------------------------------------------
// Sirve aveces
// function generarColorAleatorio() {
//     let letras = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letras[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
  
//   let colorAleatorio = generarColorAleatorio();
//   console.log(colorAleatorio);
function mostrar() {
    fetch('./archivo.json').then(response => response.json())
    .then(data => {
        console.log("hola mundo");
        console.log(data)
    });
}
mostrar()
// ?????????????????????????????
// ¿Funciona?
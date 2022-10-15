const form = document.querySelector("#form"); 
const input1 = document.querySelector("#calculo1"); 
const input2 = document.querySelector("#calculo2"); 
const btn = document.querySelector("#btnCalcular"); 
const suma = document.querySelector("#sumaid");

//addEventListener

form.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("virus")
}
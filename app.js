window.onload = function (){
    cartas();
}

function cartas(){
    let simbols = ["♦", "♥", "♠", "♣"];
    let values = ["A", "2","3","4","5","6","7","8","9","10","J","Q","K"];
    let simbolsrandom = randomelection(simbols.length); //posiciones simbolos
    let valuesrandom = randomelection(values.length); //posiciones del valor de la carta
    let numeroaleatorio = values[valuesrandom]; //numero de la carta aleatorio incluyendo letras
    let simbolsaleatorio = simbols[simbolsrandom]; //simbolo aleatorio
    
    function randomelection(arr){
    return Math.floor(Math.random()* arr);}

    let a = document.querySelector("#number").innerHTML= numeroaleatorio;  //numero o letra de carta aleatorio
    let b = document.querySelector("#simbolo").innerHTML= simbolsaleatorio; // simbolos de arriba
    let c = document.querySelector("#simbol1").innerHTML= simbolsaleatorio; // simbolos de abajo

//document.getElementById("#simbol").style.color = "red";

//if(b == "♥" || c == "♥"){
    //x.style.color = "red"
    //y.style.color = "red"}


    let x= document.getElementById("simbolo")
    let y= document.getElementById("simbol1")

    console.log(a,b)

b === "♥" || c == "♦" ? x.style.color = "red": x.style.color = "black";
b === "♥" || c == "♦" ? y.style.color = "red": y.style.color = "black";
    }

//

let btn = document.getElementById("clickme")

  btn.addEventListener("click", function(){
    cartas()
})

var segundos = 6;
document.getElementById("temporizador").innerHTML= "En " + segundos + " segundos se reiniciará la carta aleatoria, cuando presiones el boton de Iniciar temporizador.";

function actualizartempo(){
document.getElementById("temporizador").innerHTML= "En " + segundos + " segundos se reiniciará la carta aleatoria, cuando presiones el boton de Iniciar temporizador.";
if(segundos == 0){
    cartas();}
    else{segundos--;
    setTimeout("actualizartempo()",1000);
}
}


  

 //document.getElementById("temporizador").innerHTML
//let tempo = setInterval(function(){cartas()},1000);

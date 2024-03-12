let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados=[];
let numeroMaximo= 10

function asignarTextoElemento(elemento,texto){
let elemntoHtml = document.querySelector(elemento);
elemntoHtml.innerHTML= texto;
}


function verificarIntento() {
     let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
        //el usuario acerto
     if (numeroUsuario===numeroSecreto) {
    asignarTextoElemento('p', `ACERTASTE EL NUMERO EN ${intentos} ${intentos === 1 ? 'INTENTO' : 'INTENTOS'}`)
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroSecreto<numeroUsuario){
            asignarTextoElemento('p', 'El numero secreto es menor')            
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        };
        intentos ++;
        limpiarCaja();
    }
};

function limpiarCaja(){
    document.getElementById('valorUsuario').value='';
}

function generarNumeroSecreto() {
  let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1 
  console.log (numeroGenerado);
  // si ya sorteamos todos los numeros
  if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numero posibles');
  } else {

        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        } else { 
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado}
        }
}; 

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Elige un numero entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();

    //indicar mensaje de intervalo de numero
    // generar el numero aleatorio
    //intentos
    condicionesIniciales();

    //deshabilar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
   
}

condicionesIniciales();
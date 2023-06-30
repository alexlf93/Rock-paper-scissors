// const numerin = 15;
// let padre = document.getElementById('sectionid');
// const tituloh1 = document.createElement('h1');
// tituloh1.setAttribute('id', 'idh1');

// if ((numerin >= 10) || (numerin <= 20)){
//     tituloh1.textContent = `Ahora eres ${numerin}`;
// }
// else{
//     tituloh1.textContent = 'Ahora no eres 10 ni un 20';
// }
// padre.appendChild(tituloh1);






//Vamos a jugar a piedra papel tijera



const piedrapapeltijera =(indice)=>{
    const matriz = ['piedra', 'papel', 'tijera'];
    return matriz[indice];
}

const numeroRandom = () =>{
    //let numero = Math.floor(Math.random() * (2 - 0) + 0);
    let numero = Math.floor(Math.random() * 3);
    return numero;
}

const jugadaOrdenador = () =>{
    let jugada = piedrapapeltijera(numeroRandom());
    return jugada;
}

const quienGana = () =>{
    let ordenador = jugadaOrdenador();
    let humano = prompt('Elige piedra papel o tijera');
    let resultado = null;
    if((ordenador == 'piedra') && (humano == 'piedra')){
        resultado = 'Empate';
    }
    if((ordenador == 'piedra') && (humano == 'papel')){
        resultado = 'gana el humano';
    }
    if((ordenador == 'piedra') && (humano == 'tijera')){
        resultado = 'gana el ordenador';
    }
    if((ordenador == 'papel') && (humano == 'papel')){
        resultado = 'empate';
    }
    if((ordenador == 'papel') && (humano == 'piedra')){
        resultado = 'gana el ordenador';
    }
    if((ordenador == 'papel') && (humano == 'tijera')){
        resultado = 'gana el humano';
    }
    if((ordenador == 'tijera') && (humano == 'tijera')){
        resultado = 'empate';
    }
    if((ordenador == 'tijera') && (humano == 'papel')){
        resultado = 'gana el ordenador';
    }
    if((ordenador == 'tijera') && (humano == 'piedra')){
        resultado = 'gana el humano';
    }
    alert(`el ordenador saca ${ordenador} el humano saca ${humano} y ${resultado}`);
}



const alertBoton = document.createElement('button');
let padre = document.getElementById('sectionid');
alertBoton.setAttribute('id', 'alertbutton');
alertBoton.textContent = 'Juega!';
padre.appendChild(alertBoton);

alertBoton.addEventListener('click', ()=>{
    quienGana();
});

module.export= {quienGana};
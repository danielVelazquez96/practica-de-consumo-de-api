import { obtenerChiste as getChiste } from "./http-provider";

const body=document.body;
let btnOtroChiste,olList;

// Closure para contador de chistes
const contadorChistes=()=>{
    let cont=0;
    const aumentarContador=()=>{
        cont++;
        return cont;
    }
    return aumentarContador;
}

// LLamado del contador
const aumentarContador=contadorChistes();

const crearChisteHtml=()=>{
    const html=
    `<h1 class="mt-5">Chistes de Chuck Norris</h1>
    <hr>
    <button class='btn btn-primary'>Otro chiste</button>

    <ol class="mt-2 list-group">
        
    </ol>`;

    const divChistes=document.createElement('div');
    divChistes.innerHTML=html;

    body.append(divChistes);

}

const eventos=()=>{
    // Creacion de objetos del DOM
    olList=document.querySelector('ol');
    btnOtroChiste=document.querySelector('button');

    // eventos
    btnOtroChiste.addEventListener('click',async()=>{

        btnOtroChiste.disable=true;
        dibujarChiste(await getChiste());
        btnOtroChiste.disable=false;

    })
}

const dibujarChiste=(chiste)=>{
  
    // Crear elemento
    const olItem=document.createElement('li');
    olItem.innerHTML=`<b> ${aumentarContador()} </b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    // Insertar elemento
    olList.append(olItem);

}

// Funcion que vamos a querer para renderizar todo el funcionamiento de la pagina
export const init=()=>{
    // Renderizar html
    crearChisteHtml();

    // iniciar los eventos
    eventos();
}


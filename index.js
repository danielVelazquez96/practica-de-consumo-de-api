const jokerUrl=`https://api.chucknorris.io/jokes/random`;
const body=document.body;
let btnOtroChiste,olList;
// contador de chistes extraidos e imprimidos
let numChistes;

// Consumir API
// ---------------------------------------------------------------------
const obtenerChiste=async()=>{

    try{
        const resp=await fetch(jokerUrl)

        if(!resp.ok)  throw('No se puede realizar la peticion');
        
        const {icon_url,id,value}=await resp.json()
        
        return  {icon_url,id,value} ;

    }catch(err){
        throw err;
    }
   
}

// ------------------------------------------------------------------------






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
        dibujarChiste(await obtenerChiste());
        btnOtroChiste.disable=false;

    })
}

const dibujarChiste=(chiste)=>{
  
    // Crear elemento
    const olItem=document.createElement('li');
    olItem.innerHTML=`<b> ${numChistes++} </b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    // Insertar elemento
    olList.append(olItem);

}







const init=()=>{
    // Renderizar html
    crearChisteHtml();

    numChistes=1;

    // iniciar los eventos
    eventos();
}


//Iniciar el programa
init()


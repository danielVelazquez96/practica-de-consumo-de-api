
// HTTP request -------------------------------------------
// FETCH; metodo propio de JS



// El fetch siempre requiere el url
fetch(jokeUrl).then(resp=>{
    console.log(resp);

    // Indicarle a la respuesta de la api que extraiga la informacion
    resp.json().then(({id,value})=>{
        // Sin desustruracion de objetos
        // console.log(data);
        console.log(id);
        console.log(value);
    });
})

// Tambien se puede hacer de la siguiente forma resumida
fetch(jokeUrl)
    .then(resp=> resp.json())
    .then(({id,value})=>{
        console.log({id,value})
    })
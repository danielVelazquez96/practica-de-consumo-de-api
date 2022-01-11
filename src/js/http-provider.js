// Centralizar la logica para

const jokerUrl=`https://api.chucknorris.io/jokes/random`;


// Cuando veas un async
// Siempre es una funcion que regresa una promes
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




export{
    obtenerChiste
}
 const obtenerIdPokemon = ()=>{
    const pokemon1 = generarNumeroAleatorio(600)
    const pokemon2 = generarNumeroAleatorio(600)
    const pokemon3 = generarNumeroAleatorio(600)
    const pokemon4 = generarNumeroAleatorio(600)
    const pokemonsArray= [pokemon1, pokemon2, pokemon3, pokemon4]
    console.log(pokemonsArray);
 }




 const obtenerNombresPokemons = (arreglo)=>{
    const nombre1 = consumirApi(arreglo[0]);
    const nombre2 = consumirApi(arreglo[1]);
    const nombre3 = consumirApi(arreglo[2]);
    const nombre4 = consumirApi(arreglo[3]);
 }

 function consumirApi (){
    return 'asd'
 }

 const obtenerIdPokemonsFachada=()=>{

    obtenerIdPokemon()
 }


 function generarNumeroAleatorio(max) {
    var numeroAleatorio = Math.floor(Math.random() * (max) );
    return numeroAleatorio;
  }

 export default obtenerIdPokemonsFachada
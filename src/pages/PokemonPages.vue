<template>

  <div class="simple-linear ">
      <h1 v-if="!pokemonGanador"> Espere por favor estamos cargando el Jueguito</h1>
      <div v-else>
        <div class="container">
            <PokemonImageVue :pokemonId="pokemonGanador.id" :showPokemon="mostrarPokemon"></PokemonImageVue>
            <PokemonOpciones v-on:seleccion="revisarClick($event)" :pokemons="pokemonsArray"></PokemonOpciones>
            <h1 class="ganar" v-if="mostrarMensajeWin">Gansate</h1>
            <h1 v-if="mostrarMensajeLose">Intenta de Nuevo</h1>
            <button v-if="mostrarReiniciar" @click="reiniciar">Reiniciar</button>
          </div>
       
    </div>
    
  </div>
  
    
  
</template>

<script>
import PokemonImageVue from '@/components/PokemonImage.vue'
import PokemonOpciones from '../components/PokemonOpciones.vue' 
import obtenerIdPokemonsFachada from '../helpers/pokemonHelper'



export default {
    

    components: {
        PokemonImageVue,
        PokemonOpciones
  },

  data(){
    return{
      pokemonsArray:[],
      pokemonGanador: null,
      mostrarPokemon:false,
      mostrarMensajeWin:false,
      mostrarMensajeLose:false,
      mostrarReiniciar:false
    }
  },

    beforeCreate(){
    console.log("antes de crear el componente")
  },

  created(){
   // this.cargaInicial()
    console.log("se creó el componente");
  },

  beforeMount(){
    console.log('Antes de q se monte el componente en la página');
  },

  mounted(){
    console.log('mira como monto el componete :0');
    this.cargaInicial()
  }, 
  beforeUpdate(){
    console.log("antes de q se actualice el componente");
  },

  updated(){
    console.log('Se actualiza el componente');
  },

  beforeDestroy(){
    console.log('antes de destruir');
  },

  destroyed(){
    console.log("destruido");
  },


  
  methods:{
    async cargaInicial(){
        const arregloPokemons = await obtenerIdPokemonsFachada()
        console.log('imprimo desde componente mounted');
        console.log(arregloPokemons);
        this.pokemonsArray=arregloPokemons
        const indiceGanador= Math.floor(Math.random()*4);
        this.pokemonGanador = this.pokemonsArray[indiceGanador]
    },

    revisarClick(datoIdPokemon){
      console.log('click desde del hijo al padre');
      console.log(datoIdPokemon);
      
      if(datoIdPokemon==this.pokemonGanador.id){
        this.mostrarPokemon = true
        this.mostrarMensajeWin = true
        this.mostrarReiniciar=true
        this.mostrarMensajeLose=false
      }else{
        this.mostrarMensajeLose=true
      }
      
    },

    reiniciar(){
      this.mostrarPokemon=false
      this.cargaInicial()
      this.mostrarMensajeWin=false
      this.mostrarReiniciar=false
      this.mostrarMensajeLose=false
    }
  },




}
</script>

<style scoped>



.container{
  display: grid;
  text-align: center;
  

    
}

button {
  border-radius: 15%; 
  background: rgb(212, 92, 84);
  color: rgb(0, 44, 44);
  font-size: 37px;
  padding: 10px;

}

button:hover{
  background: rgb(219, 138, 138);
}

.ganar{
  font-size: 34px;
  color: #eafa0d; /* Color del texto */
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
}

</style>
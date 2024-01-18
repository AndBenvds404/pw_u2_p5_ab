<template>
    <div class="container">
        <PokemonImageVue :pokemonId="145" :showPokemon="true"></PokemonImageVue>
        <PokemonOpciones></PokemonOpciones>
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

  mounted(){
    console.log('mira como monto el componete :0');
    this.cargaInicial()
  }, 

  methods:{
    async cargaInicial(){
        const arregloPokemons = await obtenerIdPokemonsFachada()
        console.log('imprimo desde componente mounted');
        console.log(arregloPokemons);
    }
  }

}
</script>

<style>

.container{
    
}

</style>
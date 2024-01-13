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

obtenerIdPokemonsFachada()

export default {
    

    components: {
        PokemonImageVue,
        PokemonOpciones
  },

}
</script>

<style>

.container{
    
}

</style>
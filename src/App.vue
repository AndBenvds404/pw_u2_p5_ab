<template>
  <div class="container">
    <h1 class="titulo">ADIVINA EL POKEMON</h1>
    <pokemonPage />
  </div>
  
  

</template>

<script>


import pokemonPage from './pages/PokemonPages.vue'

export default {
  name: 'App',
  components: {
    pokemonPage
  },
  methods:{


  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center; 
  color: #2c3e50;
  margin-top: 60px;

  
  
}

html{
  
  background-image: url("./assets/pokefondo.jpg");
  background-repeat: no-repeat;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* 100% de la altura de la ventana visible */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  display: grid;
  justify-content: center;
  align-items: center;
}


.titulo{
  font-size: 54px;
  color: #eafa0d; /* Color del texto */
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
}
</style>

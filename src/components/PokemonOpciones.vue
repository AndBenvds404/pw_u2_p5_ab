<template>

    <div class="opcion-container">
        <ul>
            <li @click="$emit('seleccion', pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">{{pokemon.nombre}}</li>
        </ul>
    </div>
   
</template>

<script>
export default {
    props:{
        pokemons:{
            type:Array,
            required:true
        }
    }

}
</script>

<style scoped>

ul{
    list-style-type: none;
}


li{
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    margin-top: 17px;
    cursor: pointer;
    padding: 7px 0px;
}

li:hover{
    background: rgba(0, 0, 0, 0.1);
}

.opcion-container{
    display: flex;
    
    
    
    padding: none;
    
}

ul{
    display: flexbox;
    width: 280px;
}

</style>
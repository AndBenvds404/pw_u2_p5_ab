<template>
    <div class="container">
        
        <label for="">Id </label>
        <input v-model="numId" @keypress.enter="consumoApi(numId)" type="text">


         
            <p type="Nombre:" >   <input v-model="nombre" type="text"> </p>
            <p type="Weight:" >  <input v-model="weight" type="text"> </p>
            <p type="Base Experencia:" >  <input v-model="baseExp" type="text"> </p>
         
   

   
        

    </div>


</template>

<script>
export default {

    data(){
        return{
            numId:null,
            nombre:null,
            weight:null,
            baseExp:null,
            url:null
        }
    },

    
    methods:{

    

        async consumoApi(num){
            this.numId = num
            const {name,weight, base_experience} = await fetch('https://pokeapi.co/api/v2/pokemon/'+this.numId).then(r=>r.json())
            this.nombre = name;
            this.weight  = weight;

            this.baseExp = base_experience
            console.log(name,weight, base_experience);
            
        }


    }


}
</script>


<style scoped>

*{
    font-size: 17px;
}

.container{
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: left;
}

p:before{ /*se renderiza antes de cargar la pagina*/
    
    content:attr(type);
    display: block;
    margin: 5px 2px;
    font-size: 16px;
    color: #5a5a5a;
    
}

input{
    background: rgb(95, 139, 223);
    border-radius: 7px;
    height: 27px;

}

p input{
    pointer-events: none;
    
}
</style>
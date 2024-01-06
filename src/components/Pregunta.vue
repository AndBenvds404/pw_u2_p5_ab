<template>
    <img src="https://yesno.wtf/assets/no/14-cb78bf7104f848794808d61b9cd83eba.gif" 
    alt="No se puede visualizar">

    <div class="dark">
        
    </div>
    <div class="container"> 

        <input v-model="pregunta" type="text">
        <p>Recuerda que debes termina con el signo de interrogación</p>

        <h2>{{pregunta}}</h2>
        <h2  >SI / NO</h2>
    </div>
    

</template>

<script>
export default {

    data(){
        return{
            pregunta:'Voy a pasar el semestre',
            
        }
    },
    watch:{
        pregunta(value, oldValue){

            console.log(value);    
            console.log(oldValue);

            if(!value.includes('?')) return;
            //consumo Api
            this.consumirApi()

        }
            
    },

    methods:{
        async consumirApi(){
            const {answer, image}= await fetch('https://yesno.wtf/api').then(respuesta=> respuesta.json())
            
            console.log(answer)
            console.log(image)
            
        }
    }

}
</script>

<style scoped>

.dark, img{
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
        

}


.dark{
    background: rgba(0, 0, 0, 0.5);
}

input{
    width: 300px;
    padding: 10px 15px;
    border-radius: 7px;
    border: none;
    font-size: 17px;
    text-align: center;

}

input:focus{
    outline: none;
}

.container{
    position: relative;
    color: aliceblue;
}

p{
    font-size: 12px;
    
}

h2{
    margin-top: 150px;
    font-size: 37px;
    
}
</style>
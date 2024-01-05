<template>
  
    <div class="containTitulo">
        <h2>{{titulo}}</h2>
    </div>
  <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>

    <button @click="sumarNum()">+</button>
    <button @click="restarNum()"> -</button>

</template>

<script>
export default {
    props:{
        titulo:String , 
        valor:{
            type:Number,
            required:false,
            default:24,
            validator(value){
                return value > 50;
            }
        }
    },

    data(){
        return{
            counter:this.valor,
        }
    },
    methods:{
      
        obtenerCuadrado(){
            console.log('se calcula el mensaje');
            return this.counter*this.counter;
        },

        calcular(){
            ret
        },
        restarNum(){
            this.counter = this.counter-1
        }
        ,
        sumarNum(){
            this.counter = this.counter+1
        }   


    },
    computed:{
        obtenerCuadradoComputado(){
            console.log('se calcula el mensaje');
            return this.counter*this.counter;
        }
    }
}
</script>


<style scoped>
button{
    background: #2c3e50;
    border-radius: 5px;
    border: 1px solid white;
    color: wheat;
    cursor: pointer;
    font-size: 27px;
    margin: 0px 7px;
    padding: 5px 27px;
}

button:hover{
    background: #5aa67b;
    
}

h2{
    font-family: 'Courier New', Courier, monospace;
    border-block-end: 2px solid black;
    font-size: 30px;
    

}
h2:hover{
    
}

.containTitulo{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

</style>
<template>
    <div class="container">
         
              <div class="calculadora">
                  
              
                      <div class="pantalla">
                        
                            <label  >{{num1}}</label>
                            <label >{{operador}}</label>
                            <label  >{{num2}}</label>
                            <p >{{resultado}}</p>
                          
                      </div>

                      <button  @click="reset()">C</button>
                      <button @click="borrar()">&#x2190;</button>
                      <button @click="operacion('/')">/</button>
                      <button>%</button>
                      <button @click="insertarNum(7)">7</button>
                      <button @click="insertarNum(8)">8</button>
                      <button @click="insertarNum(9)">9</button>
                      <button @click="operacion('x')">X</button>
                      <button @click="insertarNum(4)">4</button>
                      <button @click="insertarNum(5)">5</button>
                      <button @click="insertarNum(6)">6</button>
                      <button @click="operacion('-')">-</button>
                      <button @click="insertarNum(1)">1</button>
                      <button @click="insertarNum(2)">2</button>
                      <button @click="insertarNum(3)">3</button>
                      <button @click="operacion('+')">+</button>
                      <button class="btn-cero" @click="insertarNum(0)">0</button>
                      <button @click="insertarNum('.')">.</button> 
                      <button @click="calcular()">=</button>
                 
              </div>

      </div>
  </template>
  
  <script>
  export default {
    
      data(){
          return{
              num1:'',
              num2:'',
              resultado:'',
              operador:'',
              aux : false
          }
          
      },

      methods:{

        insertarNum(num){
              if(!this.aux){
                  this.num1 = this.num1+num;  
              }else{
                  this.num2 = this.num2+num; 
              }
        },

        operacion(operacion){
              this.aux = true;
              this.operador=operacion;
        },

        calcular(){

              if(!this.num1==''&&!this.num2==''){

                  switch(this.operador){

                      case '+':
                          this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
                      break;
                      case '-':
                          this.resultado = parseFloat(this.num1)- parseFloat(this.num2);
                      break;
                      case 'x':
                          this.resultado = parseFloat(this.num1)* parseFloat(this.num2);
                      break;
                      case '/':
                          this.resultado = parseFloat(this.num1)/ parseFloat(this.num2);
                      break;
                  }
                  
              }
        },

        reset(){

            this.num1='';
            this.num2='';
            this.operador='';
            this.resultado='';
            this.aux = false;
        },

        borrar(){
            if(!this.num2==''){

                this.num2=this.num2.slice(0,-1);
            }else if(!this.operador==''){

                this.operador='';
                this.aux = false;

            }else if(!this.num1==''){

                this.num1=this.num1.slice(0,-1);
            }
              this.resultado='';            
          },
      }
  }
</script>


<style scoped>
*{
    color: white;
    font-family: 'Courier New', Courier, monospace;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculadora{
    display: grid;
    /* grid-template-columns: 75px 75px 75px 75px */
    grid-template-columns: repeat(4, 75px);
    grid-template-rows: 150px repeat(5,75px);
    background: #00916e;
    padding: 15px;
    border-radius: 32px;
    box-shadow: 15px 10px 5px 5px #00000033;
}

.pantalla{
    
    grid-column: span 4;
    border-radius: 17px;
    margin: 17px 7px;
    padding: 17px;
    background-color: #363636;
    text-align: right;
    box-shadow: 0px 0px 0px 7px #00000033;
    color: aquamarine;
    font-size:20px;
    

    

    
}

button{
    margin: 5px;
    padding: 0;
    border-radius: 50px;
    border: none;
    background: #019e79;
    box-shadow:  5px 5px 1px -2px #00000040;
    cursor: pointer;
    font-size: 20px
}



button:active{
    background: wheat;
}



.btn-cero{
    grid-column: span 2;
}

body{
    background: #224870;
}
</style>
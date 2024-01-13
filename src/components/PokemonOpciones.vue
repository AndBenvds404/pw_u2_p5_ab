<template>

    <div class="opcion-container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
   
</template>

<script>
export default {

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
}

li:hover{
    background: rgba(0, 0, 0, 0.1);
}

.opcion-container{
    display: flex;
    justify-content: center;
}

</style>
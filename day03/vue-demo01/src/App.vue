<template>
  <div class="App">
    <HmHeader></HmHeader>
  </div>
</template>

<script>
import HmHeader from "./components/HmHeader.vue";
export default {
   components:{
    HmHeader 
   }
}
</script>

<style>
  .App{
    width: 600px;
    height: 700px;
    background-color: #87ceeb;
    margin: 0 auto ;
    padding: 20px;
  }
</style>
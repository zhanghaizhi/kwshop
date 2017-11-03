<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
 @import './common.css';
html ,body{
  width:100%;
  overflow-x: hidden;
  margin:0px;
  padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.3rem;
}
 .swiper-pagination-bullet-active{
    background:#91b521;
  }
  .swiper-pagination-bullet{
    width:0.2rem;
    height:0.2rem;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom:0.7rem;
  }
</style>

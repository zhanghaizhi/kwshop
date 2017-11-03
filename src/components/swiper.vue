<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide v-for="item in imgdata" class="swiper-item">
       <img :src="item">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
 import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    props:['imgdata'],
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay: 3000,
          loop: true,
          direction: 'horizontal',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: false
        }
      }
    },
     components: {
      swiper,
      swiperSlide
    },
  }
</script>

<style>
  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
   .swiper-box  img{
    width:80%;
    display: block;
   }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
 
</style>
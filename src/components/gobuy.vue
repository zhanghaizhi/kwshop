<template>
<div class="footer clearfix">
    <div class="shopcar fl"><span></span></div>
    <div class="joincar fl">加入购物车</div>
    <div class="buy fr" @click="handclick">立即购买</div>
</div>
</template>

<script>
export default {
  name: 'gobuy',
  data () {
    return {

    }
  },
  methods:{
  	handclick(){
  		this.$parent.showgobuy=true;
  	}
  }
}
</script>

<style scoped>
.footer {
    height: 1rem;
    width: 100%;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
}
.footer .shopcar {
    /* margin-top: .3rem; */
    /* width: 100%; */
    /* height: 10.3rem; */
    width: 22%;
    background-color: #ffffff;
    padding-top: 0.15rem;
}
.footer .joincar {
    width: 40%;
    background-color: #ff9403;
    color: #ffffff;
}
.footer .buy {
    width: 38%;
    background-color: #ff6018;
    color: #ffffff;
}
.footer .shopcar span {
    display: inline-block;
    background-image: url("./../assets/shopcar.png");
    background-size: 100% 100%;
    width: 0.76rem;
    height: 0.64rem;
}
em {
    display: inline-block;
    font-style: normal;
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 8px;
    position: absolute;
    top: .13rem;
    left: .9rem;
    display: none;
}
</style>
<template>
<div class="list clearfix">
	         <div class="item">
                 <router-link to="/bookdetails/1">
	                 <img src="./../assets/chcover-01.png" alt="">
	                 <div class="title">
	                     <p>高分宝典高考语文</p>
	                     <span>￥89</span><em></em>
	                 </div>
                 </router-link>
	         </div>
	        <div class="item">
	             <router-link to="/bookdetails/2">
	                <img src="./../assets/macover-02.png" alt="">
	                <div class="title">
	                    <p>高分宝典高考数学</p>
	                    <span>￥89</span><em></em>
	                </div>
	             </router-link>
	        </div>
	        <div class="item">
	           <router-link to="/bookdetails/3">
	                <img src="./../assets/engcover-03.png" alt="">
	                <div class="title">
	                    <p>高分宝典高考英语</p>
	                    <span>￥89</span><em></em>
	                </div>
	             </router-link>
	        </div>
    	</div>
</template>

<script>
export default {

  name: 'boolist',

  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .list {
    	padding-top: 2.5rem;
        text-align: left;
    }

    .list .item {
        width: 49.4%;
        display: inline-block;
        font-size: .3rem;
    }

    .item a {
        display: inline-block;
        margin: 0.5rem .3rem;
        position: relative;
        margin-bottom: 1rem;
    }

    .item img {
        width: 100%;
        /*height: 3.6rem;*/
        position: relative;
        box-shadow: 1px 1px 3px 0px #cdcdcd;
        vertical-align: middle;
        display: block;
    }
    .item .title{
        position: absolute;
        /* bottom: -1.5rem; */
        color: #292929;
        width: 100%;
        /* text-align: center; */
        line-height: 0.5rem;
        background: #ffffff;
    }
    .item .title span{
        color: red;
    }
    .item a p{
        color: #292929;
        line-height: 0.5rem;
        padding-left: -10px;
    }
</style>
<template>
	<div id="home">
		<header class="header">
	        <div class="invit fr">邀请码:<span>FEDG0</span></div>
	    </header>
		<booklist></booklist>
	</div>
</template>
<script>
    import booklist from './../components/booklist'
	export default{
        components:{
            booklist
        }
	}
</script>
<style type="text/css">
    header.header {
        height: 2.6rem;
        width: 100%;
        z-index: 30;
        border: 0;
        box-shadow: 2px 0 3px 2px #eeeeee;
        background-image:url("./../assets/topbanner.png") ;
        background-size: 100% 100%;
        font-size: .3rem;
        position: fixed;
		top:0px;
		left:0px;
    }

    .header i {
        height: 1.125rem;
        width: 0.8rem;
        margin-left: 1rem;
    }

    .header .core {
        /*font-size: 0.8rem;*/
        margin-right: 0.4rem;
        position: absolute;
        right: 0.36rem;
        top: 0.15rem;
        color: #6b6b6b;
    }

  
    .invit{
        background: #ffffff;
        min-width: 2.3rem;
        height: .65rem;
        border-radius: 0.65rem;
        /*margin: 1.85rem .3rem .4rem;*/
        color: #ff6018;
        position: absolute;
        right: 0.1rem;
        bottom: 0.1rem;
        line-height: 0.65rem;
    }
    .invit p{
        display: block;
        width: 100%;
        height: .65rem;
        line-height: .65rem;
        text-align: center;
    }
</style>
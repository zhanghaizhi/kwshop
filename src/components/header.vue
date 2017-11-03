<template>
	<header class="header"><span><slot></slot></span></header>
</template>
<script>
	
</script>
<style scoped>
	.header {
	    height: 0.9rem;
	    color: #4c4c4c;
	    position: fixed;
	    z-index: 1000;
	    width: 100%;
	    top: 0px;
	    background: #fff;
	    border-bottom: 1px solid #d9d9d9;
	    text-align: center;
	    line-height: 0.87rem;
	}
</style>
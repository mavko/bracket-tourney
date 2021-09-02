<template>
	<!-- 
		Switchable per tournament theme
	-->
	<div>
    <img src="@/assets/bgs/valo.png" class="main-bg" />
  </div>
</template>
<script>
export default {
  name: 'background'
}
</script>
<style scoped>
/* Valo background positioning
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.main-bg {
	position: absolute;
	z-index: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	image-rendering: optimizespeed;
	background-position: top;
	background-size: cover;
}
</style>
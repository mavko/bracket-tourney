<template>
  <v-row justify="center" >
    <v-col cols="auto">
        <div class="connector">
            <div class="merger"></div>
            <div class="line"></div>
            
        </div>
    </v-col>

  </v-row>
</template>
<script>
  export default {
    name: 'seperatorTop',
  }

</script>
<style scoped>
.connector {
  left: 30%;
  top: 33%;
  position: absolute;
  border-radius: 20px;
}
.line,
.connector .merger {
	box-sizing: border-box;
	width: 16.4rem;
	display: inline-block;
	vertical-align: middle;
}
.connector .line {
	border-top: 2px solid #7c8abb;
  border-right: 2px solid #7c8abb;
  border-bottom: 2px solid #7c8abb;
	height: 12rem;
  width: 46.5rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.connector .merger {
	position: relative;
	height: 37rem;
  border-radius: 20px;
}
.connector .merger:before,
.connector .merger:after {
	content: '';
	display: block;
	box-sizing: border-box;
	width: 100%;
	height: 50%;
	border: 0 solid;
	border-color: #7c8abb;
}
.connector .merger:before {
	border-right-width: 2px;
	border-top-width: 2px;
  border-top-right-radius: 20px;
}
.connector .merger:after {
	border-right-width: 2px;
	border-bottom-width: 2px;
  border-bottom-right-radius: 20px;
}
@media screen and (max-width: 1300px) {
  .line {width: 29.8rem !important;}
  .merger {width: 11.4rem !important;}
}
@media screen and (max-width: 1450px) {
  .line {width: 32.4rem !important;}
  .merger {width: 13rem !important;}
}
</style>
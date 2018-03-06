<template>
  <div id="app">
  	
    
    <router-view></router-view>
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
		data() {
			return {
				sign: []
      	
			}
		},
  	created() {
      
   }
}
</script>

<style lang="scss">
	@import url("common/styles/normalize.min.css");
	@import url("common/styles/reset.css");
	
	
	#app{
		min-width: 320px;
		max-width: 768px;
		margin: 0 auto;
		background: #f5f5f5;
	}
</style>

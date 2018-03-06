<template>
	<div class="restop-wrapper">
		<a href="javascript:void(0)" class="stick_top" v-on:click="stick_top"></a>
	</div>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				
			};
		},
		created() {
	      	
	  	},
		methods: {
			stick_top() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			scrollBehavior (to, from, savedPosition) {
			  if (savedPosition) {
			    return savedPosition
			  } else {
			    return { x: 0, y: 0 }
			  }
			}
		}
	};
</script>

<style lang="scss">
	
	.restop-wrapper{
		position: fixed;
		bottom: 4px;
    	right: 10px;
		a{
			display: inline-block;
			width: 34px;
			height: 34px;
			background: url(../../common/img/icon/icon-top.png) no-repeat;
			background-size: cover;
		}
		
	}
</style>
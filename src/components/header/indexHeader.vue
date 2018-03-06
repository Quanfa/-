<template>
	<div class="index-header">
		<router-link to="/index" title="">返回</router-link>
		<span  class="h_title">
			{{$route.meta.title}}
		</span>
	</div>
</template>

<script>
export default {
  props: {
  	title: {
  	  type: String,
	  default: "酷飞网"
		 
	}
  },
  methods: {
	
	},
  
}
</script>

<style lang="scss">
	
	
	$link-color: #000000;
	.header{
		color: $link-color;
		background: #fff;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		text-align: center;
		position: relative;
		a{
			position: absolute;
			top: 0;
			left: 2%;
			background: url(../../common/img/icon/icon-ret.png) left no-repeat;
			background-size:12px 20px ;
			padding-left: 16px;
			color: #000;
		}
		
		.h_title{
			color: #000000;
		}
	}
</style>
<template>
	
	<div class="header">
		<router-link to="/index" class="retIndex" title="返回首页"></router-link>
		<span class="h_title">
			{{$route.meta.title}}
		</span>
		<div class="rig-wrapper">
			<router-link to="/person" class="retSet" title="设置" v-show="setShow"></router-link>
			<router-link to="/signs" class="retSign" title="登录" v-show="loginShow" @click="loginHide" >登录</router-link>
		</div>
		
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
		data() {
			return {
				setShow: false,
				loginShow: true,
				i: 1,
				UserStatus: [],
				User: ''
			};
		},
		created() {
	      	this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=is_login&callback=userapi&key=QUgFYq4L5n89ZG2Ab').then(function(res){	
	      	 	this.UserStatus = res.body;
	      	 	if(this.UserStatus.logined == 1){   
	   				this.User = this.UserStatus.username;
	   				this.loginShow = false;
	   				this.setShow = true;
	   			}else{
	   				console.log(this.UserStatus.logined);
	   				this.loginShow = true;
	   				this.setShow = false;
	   			}
	        },function(res){
	            console.log(res.status);
	        });
	  	},
		methods: {
			loginHide() {
				this.loginShow = false;
			}
		}

	}
</script>

<style lang="scss">
	$link-color: #000000;
	$loginBack: #262626;
	/*#app .header .rig-wrapper .active{
		display: none;
	}*/
	.header {
		color: $link-color;
		background: #fff;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		text-align: center;
		position: fixed;
    	width: 100%;
    	z-index: 100;
    	max-width: 768px;
    	top: 0;
		.retIndex {
			width: 44px;
			height: 44px;
			display: inline-block;
			position: absolute;
			top: 0px;
			left: 2%;
			background: url(../../common/img/icon/icon-right.png) left no-repeat;
			background-size: 22px 26px;
		}
		.rig-wrapper {
			position: absolute;
			top: 0px;
			right: 2%;
			height: 44px;
			line-height: 42px;
			.retSet {
				width: 44px;
				height: 44px;
				display: inline-block;
				background: url(../../common/img/icon/icon-set.png) right no-repeat;
				background-size: 22px 16px;
			}
			.retSign {
				display: inline-block;
				width: 50px;
				height: 30px;
				border-radius: 4px;
				background: $loginBack;
				line-height: 30px;
				font-size: 14px;
				color: #fff;
			}
		}
		.h_title {
			color: #000000;
			margin-left: -2%;
		}
	}
</style>
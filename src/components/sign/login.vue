<template>
	
	<div class="login-wapper">
		<v-header></v-header>
		<div class="login-content">
			<div class="sign-logo">
				<img src="./logo.png"/>
			</div>
			<div class="login-form">
				<form  @submit.prevent="submit" class="logForm">
					<div class="signUser">
						<input type="text" name="user_id" id="user_id" placeholder="手机号 / 邮箱" v-model="inputtext.User" />
					</div>
					<div class="signUser">
						<input type="password" name="password_id" id="password_id" placeholder="密码" v-model="inputtext.password"/>
					</div>
					<div class="loginSub">
						<input type="submit" id="subLogin" name="" value="登录" />
					</div>
					
				</form>
				<div class="sign-regist">
					<span class="regist">
						<router-link to="/regist" title="">快速注册</router-link>
					</span>
					
					<span class="forget">
						<router-link to="/forget" title="">忘记密码？</router-link>
					</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import { Button, Select } from 'element-ui'
import Header from "../header/header.vue"

const ERR_OK = 0;
export default {
	props: {
      
    },
    data() {
		return {
			sign: [],
			inputtext: {} ,
			datas: [],
			data1: [],
			Users: [],
			loginShow: false,
			userName: ""
		}
	},
	created() {


        
        
   },
   methods: {
   		submit: function() {
   			for (let i = 0; i < 1 ; i++) {
   				this.$http.jsonp('http://51kufei.com/index.php?callback=Userapi&m=Home&c=Userapi&a=login&key=QUgFYq4L5n89ZG2Ab&username=' + this.inputtext.User + '&password=' + this.inputtext.password).then(function(res){		
		      	 	this.data1 = res.body;
		      	 	if(this.data1.code == 1){
		   				
		   				this.$message({
				          showClose: true,
				          message: this.data1.msg,
				          duration: 1000,
				          customClass: 'Pop_ups'
				        });
		   				this.$router.replace('/index');
		   				return;
		   			}else{
		   				this.$message({
				          showClose: true,
				          message: this.data1.msg,
				          duration: 1000
				        });
		   			}
		        },function(res){
		            console.log(res.status);
		        });
		        
   			}
   			
   			
   		}
	},
	components: {
      'v-header': Header
    }
};	
</script>

<style lang="scss">
	$login-color: #969696;
	.Pop_ups p{
			color: #969696;
		}
	.login-wapper{
		position: relative;
		
		
		.login-content{
			position: fixed;
			max-width: 768px;
			top: 44px;
			background: url(../../common/img/content/signBack.png);
			height: 100%;
			width: 100%;
			background-size: cover;
			.sign-logo{
				width: 34%;
				margin: 60px auto;
				
				img{
					width: 100%;
					
				}
			}
			.login-form{
				width: 92%;
				margin: 0 auto;
				.signUser{
					border-bottom: 1px solid #fff;
					height:30px;
					line-height: 28px;
					margin-bottom: 40px;
					input{
						border: none;
						font-size: 16px;
						height: 28px;
						line-height: 28px;
						width: 100%;
						background: none;
						color: $login-color;
					}
					
				}
				.loginSub{
					margin-bottom: 30px;
					input{
						width: 100%;
						height: 44px;
						line-height: 44px;
						background: #F7E973;
						font-size: 20px;
						color: #262626;
						text-align: center;
					}
				}
				.sign-regist{
					display: flex;
					span{
						flex: 1;
						a{
							color: #F7E973;
						}
					}
					.forget{
						text-align: right;
					}
				}
			}
		}
	}
	
</style>
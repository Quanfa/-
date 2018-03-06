<template>

	<div class="login-wapper">
		<v-header></v-header>
		<div class="login-content">
			<div class="sign-logo">
				<img src="./logo.png" />
			</div>
			<div v-show="regfrom" class="login-form">
				<form @submit.prevent="regist" class="regist-form">
					<div class="signUser">
						
						<input type="text" name="phone_id" id="user_id" placeholder="请输入你已经注册的手机号/" v-model="regist.phone" />
					</div>
					<div class="verCode">
						<span class="codes">
							<input type="text" name="verCode_id" id="verCode_id" placeholder="验证码" v-model="regist.verificat" />
						</span>
						<img src="http://51kufei.com//index.php?m=Home&c=User&a=verify&random=0.07010876730672277" />
						<a href="javascript:void(0)" title="">换一张</a>
					</div>
					<div class="regist-proto">
						<el-checkbox v-model="checked">我已阅读并同意<router-link to="/proto" title="">《酷飞网用户协议》</router-link></el-checkbox>
						<!--<label><input type="checkbox" checked="checked"  name="proto-id" id="proto-id" value="" />
						我已阅读并同意<span>《酷飞网用户协议》</span></label>-->
					</div>
					<div class="loginSub">
						<input type="submit" id="subLogin" name="" value="获取短信验证码" />
						
					</div>
					<!--<el-alert
    title="成功提示的文案"
    type="success">
  </el-alert>-->
				</form>
			</div>
			<div  v-show="signVerif" class="sign-form">
				<form @submit.prevent="verifi_sub" class="veriform">
					<div class="phoneInfor">
						<p>验证码已发送至手机：{{User}}</p>
						<span>如果您长时间没收到短信，请尝试重新获取</span>
					</div>
					<div class="signInput">
						<input type="text" id="sms-verifi" value="" placeholder="输入验证码" v-model="regist.phoneSms" />
					</div>
					<div class="signSub">
						<input type="submit" id="signVer-id" name="signVer-id" value="确定" />
						<!--<button class="quire-a"  id="quire-id" value="重新获取验证码">重新获取验证码</button>-->
						<a href="javascript:;" @click="regist">
							<timer-btn class="btn-default" @click="verifi_sub"  :disabled="disabled" ref="btn" :second="120"></timer-btn>
						</a>
					</div>
				</form>
			</div>
			<div v-show="setPass" class="login-form">
				<form @submit.prevent="setPass_sub" class="seting">
					<div class="signUser">
						<input type="text" name="setpass_id" id="setpass_id" placeholder="密码6-16位数字/字母" v-model="regist.password" />
					</div>
					<div class="signUser">
						<input type="text" name="setpass_id" id="setpass_id" placeholder="请再次输入密码" v-model="regist.con_password" />
					</div>
					<div class="setPass">
						<input type="submit" id="subLogin" name="" value="确定" />
					</div>
					
					
				</form>	
			</div>
			<div class="mailVer">
				<router-link to="/mainVer" title="">使用邮箱验证</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "../header/header.vue"
	import timerbtn from "./time-btn"
	export default {
		created() {
			
		},
		data() {
			return {
				data: [],
				verfiData: [],
				User: '',
				registSuc: [],
				regfrom: true,
				signVerif: false,
				setPass: false,
				disabled: false,
				checked: true
			}
			
		},
		methods: {
			regist: function() {
				for(let i = 0; i < 1; i++) {
					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=sendMsm&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=' + this.regist.phone + '&verify=4265' + this.regist.verificat + '&forget=1').then(function(res) {
						this.data = res.body;
						console.log(this.data);
						if(this.data.code == 1) {
							this.User = this.data.data;
							this.$message({
					          showClose: true,
					          message: this.data.msg,
					          duration: 1000,
				         	  customClass: 'regist_ups'
					        });
							this.regfrom = false;
							this.signVerif = true;
							
						}else{
							this.$message({
					          showClose: true,
					          message: this.data.msg,
					          duration: 1000,
				         	  customClass: 'regist_ups'
					        });
							return;
						}
					}, function(res) {
						console.log(res.status);
					});

				}
			},  
			verifi_sub: function() {
				for(let i = 0; i < 1; i++) {
					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=check_phone_verify&callback=userapi&key=QUgFYq4L5n89ZG2Ab&phone=' + this.User + '&verify=' + this.regist.phoneSms).then(function(res) {
						this.verfiData = res.body;
						console.log(this.verfiData);
						if(this.verfiData.code == 1) {
							this.$message({
					          showClose: true,
					          message: this.verfiData.msg,
					          duration: 1000,
				         	  customClass: 'regist_ups'
					        });
							
							this.signVerif = false;
							this.setPass = true
						}else{
							this.$message({
					          showClose: true,
					          message: this.verfiData.msg,
					          duration: 1000,
				         	  customClass: 'regist_ups'
					        });
						}
						
						
					}, function(res) {
						console.log(res.status);
					});

				}
			},
			setPass_sub: function() {
				for(let i = 0; i < 1; i++) {
					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=changefgPwd&callback=userapi&key=QUgFYq4L5n89ZG2Ab&phone='+ this.User +'&new=' + this.regist.password + '&confirm=' + this.regist.con_password).then(function(res) {
						this.registSuc = res.body;
						console.log(this.registSuc);
						if(this.registSuc.code == 1) {
							this.$message({
					          showClose: true,
					          message: this.registSuc.msg,
					          duration: 1000,
				         	  customClass: 'regist_ups'
					        });
							
							this.$router.replace('/signs');
						}else{
							this.$message({
					          showClose: true,
					          message: this.registSuc.msg,
					          duration: 1000,
				         	  customClass: 'regist_ups'
					        });
						}
						
						
						
					}, function(res) {
						console.log(res.status);
					});

				}
			}
		},
		components: {
			'v-header': Header,
			'timer-btn': timerbtn
		}
	}
</script>

<style lang="scss">
	$login-color: #969696;
	$verfi-color: #F7E973;
	$regist-size: 16px;
	$sign-color: #C9C9C9;
 	$subBack: #F7E973;
 	.el-checkbox__input.is-checked .el-checkbox__inner{
 		background-color: #F7E973;
   		border-color: #F7E973;
 	}
	.login-wapper {
		position: relative;
		.login-content {
			position: fixed;
			max-width: 768px;
			top: 44px;
			background: url(../../common/img/content/signBack.png);
			height: 100%;
			width: 100%;
			background-size: cover;
			.sign-logo {
				width: 34%;
				margin: 60px auto;
				img {
					width: 100%;
				}
			}
			.mailVer {
				bottom: 60px;
				font-size: 16px;
				position: fixed;
				left: 50%;
				margin-left: -48px;
				a {
					color: $verfi-color;
				}
			}
			.login-form {
				width: 92%;
				margin: 0 auto;
				.signUser {
					border-bottom: 1px solid #fff;
					height: 30px;
					line-height: 28px;
					margin-bottom: 40px;
					input {
						border: none;
						font-size: $regist-size;
						height: 28px;
						line-height: 28px;
						width: 100%;
						background: none;
						color: $login-color;
					}
				}
				.setPass{
					padding-top: 20px;
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
				.verCode {
					margin-bottom: 30px;
					.codes {
						width: 50%;
						display: inline-block;
						border-bottom: 1px solid #fff;
						margin-right: 3%;
						height: 30px;
						input {
							width: 100%;
							border: none;
							height: 28px;
							line-height: 28px;
							background: none;
							font-size: $regist-size;
							color: $login-color;
						}
					}
					img {
						width: 26%;
						margin-right: 3%;
						vertical-align: bottom;
					}
					a {
						width: 18%;
						vertical-align: bottom;
						font-size: 14px;
					}
				}
				.regist-proto {
					margin-bottom: 30px;
					font-size: 14px;
					color: #fff;
					a,span {
						color: $verfi-color;
					}
					input {
						width: 14px;
						height: 14px;
						vertical-align: middle;
						margin-right: 2px;
					}
				}
				.loginSub {
					margin-bottom: 30px;
					input {
						width: 100%;
						height: 44px;
						line-height: 44px;
						background: #F7E973;
						font-size: 20px;
						color: #262626;
						text-align: center;
					}
				}
				.sign-regist {
					display: flex;
					span {
						flex: 1;
						a {
							color: #F7E973;
						}
					}
					.forget {
						text-align: right;
					}
				}
			}
			.sign-form{
		    	width: 92%;
    			margin: 0 auto;
		    	.phoneInfor{
		    		color: $sign-color;
		    		font-size: 14px;
		    		margin-bottom: 46px;
		    		p{
		    			margin-bottom: 8px;
		    		}
		    	}
		    	.signInput{
		    		border-bottom: 1px solid #fff;
		    		margin-bottom: 60px;
		    		input{
		    			width: 100%;
		    			height: 28px;
		    			line-height: 28px;
		    			background: none;
		    			border: none;
		    			font-size: 16px;
		    			color: $sign-color;
		    			margin-bottom: 2px;
		    		}
		    	}
		    	.signSub{
		    		line-height: 44px;
		    		input{
		    			display: block;
		    			width: 100%;
		    			margin-bottom: 30px;
		    			height: 44px;
		    			font-size: 18px;
		    			background: $subBack;
		    			color: #262626;
		    		}
		    		.btn-default{
		    			height: 44px;
		    			display: block;
		    			width: 100%;
		    			font-size: 18px;
		    			text-align: center;
		    			background: #F7E973;
						color: #262626;
		    			border: none;
		    		}
		    		.btn{
		    			background: #666666;
		    			color: #fff;
		    		}
		    	}
		    }
		}
	}
</style>
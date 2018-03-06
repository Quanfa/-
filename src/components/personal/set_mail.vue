<template>
	<div class="setPhone">
		<v-header></v-header>
		<div class="set_phone">
			<h2>绑定邮箱后，下次登录可使用新邮箱号登录。</h2>
			<form @submit.prevent="submit" class="setphoneFrom">
				<div class="enterInput">
					<div class="set_input">
						<span>邮箱号</span>
						<input type="text" id="mail-id" value="" placeholder="请输入邮箱号" v-model="bindIn.mail" />
					</div>
					<div class="set_input">
						<span>验证码</span>
						<input type="text" id="verify-id2" value="" placeholder="请输入邮箱验证码" v-model="bindIn.verify" />
					</div>
				</div>
				<div class="set_sub">
					<a href="javascript:;" @click="send">
						<timerbtn class="btn-default"  :disabled="disabled" ref="btn" :second="120"></timerbtn>
					</a>
					<input type="submit" id="phone_sub" name="" value="确定" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import header from "@/components/header/header"
	import timerbtn from "./time-btn"
	export default {
		props: {

		},
		data() {
			return {
				bindmail: [],
				bindIn:{},
				disabled: false,
				verify: []
			}
		},
		created() {

			this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=bindphone&callback=userapi&key=QUgFYq4L5n89ZG2Ab&phone=' + this.bindIn.phone + '&verify=' + this.bindIn.verify).then(function(res) {
				this.bindmail = res.body.data;
				console.log(this.bindmail);
			}, function(res) {
				console.log(res.status);
			});
		},
		methods: {
			submit: function() {
				for(let i = 0; i < 1; i++) {
					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=bindemail&callback=userapi&key=QUgFYq4L5n89ZG2Ab&email=' + this.bindIn.mail + '&verify=' + this.bindIn.verify).then(function(res) {
						this.bindmail = res.body;
						console.log(this.bindmail);
						if(this.bindmail.code == 1) {
							console.log(this.bindmail.code);
							this.$message({
					          showClose: true,
					          message: this.bindmail.msg,
					          duration: 1000,
				         	  customClass: 'setmail'
					        });
							
							
						}else{
							this.$message({
					          showClose: true,
					          message: this.bindmail.msg,
					          duration: 1000,
				         	  customClass: 'setmail'
					        });
							return;
						}
					}, function(res) {
						console.log(res.status);
					});

				}
			},
			send: function() {
				for(let i = 0; i < 1; i++) {
					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=sendEmail&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p='+ this.bindIn.mail).then(function(res) {
						this.verify = res.body;
						console.log(this.verify);
						if(this.verify.code == 1) {
							this.User = this.verify.data;
							this.$message({
					          showClose: true,
					          message: this.verify.msg,
					          duration: 1000,
				         	  customClass: 'setmail'
					        });
							
							
						}else{
							this.$message({
					          showClose: true,
					          message: this.verify.msg,
					          duration: 1000,
				         	  customClass: 'setmail'
					        });
							return;
						}
					}, function(res) {
						console.log(res.status);
					});

				}
			}
		},
		components: {
			'v-header': header,
			timerbtn
		}
	};
</script>

<style lang="scss" scoped>
	$setcolor: #B0B0B0;
	$bordercolor: #efefef;
	.setPhone{
		color: $setcolor;
		.set_phone{
			position: fixed;
			top: 44px;
			height: 100%;
			width: 100%;
			.setphoneFrom{
				.enterInput{
					padding-left: 14px;
					border-bottom: 1px solid $bordercolor;
					.set_input{
						padding: 8px;
						height: 24px;
						line-height: 24px;
						display: flex;
						border-bottom: 1px solid $bordercolor;
						span{
							flex: 0 0 70px;
							color: #231815;
							font-size: 16px;
						}
						input{
							flex: 1;
							color: $setcolor;
						}
					}
					.set_input:last-child{
						border: none;
					}
				}
				.set_sub{
					margin: 40px 14px;
					line-height: 42px;
					font-size: 18px;
					color: #262626;
					button{
						width: 100%;
						height: 42px;
						background: #F7E973;
						border: none;
						margin-bottom: 20px;
					}
					.btn{
						background: #666666;
						color: #fff;
					}
					input{
						width: 100%;
						height: 42px;
						background: #F7E973;
					}
				}
			}
			h2{
				font-size: 16px;
				padding: 20px 16px;
				border-bottom: 1px solid $bordercolor; 
			}
		}
	}
</style>
<template>
	<div class="setpassword">
		<v-header></v-header>
		<div class="pass-wrapper">
			<form @submit.prevent="submit" class="setpassFrom">
				<div class="from_input">
					<div class="pass-input">
						<span>旧密码</span>
						<input type="password" id="oldpass" value="" placeholder="请填写旧密码" v-model="set.oldPass"/>
					</div>
					<div class="pass-input">
						<span>新密码</span>
						<input type="password" id="newpass" value="" placeholder="请输入新密码" v-model="set.newPass"/>
					</div>
					<div class="pass-input">
						<span>确认密码</span>
						<input type="password" id="newpass_2" value="" placeholder="请再次输入新密码" v-model="set.confPass"/>
					</div>
				</div>
				<div class="pass_submit">
					<input type="submit" id="setpassid" name="setpassid" />
				</div>
				
			</form>
		</div>
	</div>
</template>

<script>
	import header from "@/components/header/header"
	export default {
		props: {

		},
		data() {
			return {
				setpass: [],
				set: {}
			}
		},
		created() {

			
		},
		methods: {
			submit: function() {
	   			for (let i = 0; i < 1 ; i++) {
	   					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=changePwd&callback=userapi&key=QUgFYq4L5n89ZG2Ab&old='+ this.set.oldPass +'&new='+ this.set.newPass +'&confirm=' + this.set.confPass).then(function(res) {	
			      	 	this.setpass = res.body;
			      	 	if(this.setpass.code == 1){
			   				this.$message({
					          showClose: true,
					          message: this.setpass.msg,
					          duration: 1000,
					          customClass: 'Pop_ups'
					        });
					        console.log(this.setpass.code);
			   				this.$router.replace('/seting');
			   				
			   				return;
			   			}else{
			   				this.$message({
					          showClose: true,
					          message: this.setpass.msg,
					          duration: 1000
					        });
					        console.log(this.setpass.code);
			   			}
			        },function(res){
			            console.log(res.status);
			        });
			        
	   			}	
	   		}
		},
		components: {
			'v-header': header

		}
	};
</script>

<style lang="scss" scoped>
	$setcolor: #231815;
	$setBack: #ECECEC;
	.setpassword{
		color: $setcolor;
		.pass-wrapper{
			position: fixed;
			top: 44px;
			height: 100%;
			width: 100%;
			background: $setBack;	
			.from_input{
				background: #fff;
				padding-left: 14px;
				margin: 10px 0;
				.pass-input{
					padding: 8px 0;
					border-bottom: 1px solid $setBack;
					display: flex;
					height: 24px;
					line-height: 24px;
					span{
						flex: 0 0 80px;
						color: $setcolor;
						font-size: 16px;
						
					}
					input{
						flex: 1;
						color: #B0B0B0;
						font-size: 16px;
						height: 24px;
					}
				}
				.pass-input:last-child{
					border: none;
				}
			}
			.pass_submit{
				margin: 0 3%;
				position: fixed;
				bottom: 40px;
				width: 94%;
				line-height: 42px;
				input{
					width: 100%;
					height: 42px;
					background: #F7E973;
					font-size: 20px;
					color: #262626;
				}
			}
		}
	}
</style>
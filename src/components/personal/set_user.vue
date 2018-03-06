<template>
	<div class="setPhone">
		<v-header></v-header>
		<div class="set_user">
			<form @submit.prevent="usersubmit" class="setUserFrom">
				<div class="userInput">
					<input type="text" id="username" v-model="user.name"/>
				</div>
				<div class="setUser">
					<input type="submit" id="user_sub" name="user_sub" />
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
				setUser: [],
				user: {}
			}
		},
		created() {

			
		},
		methods: {
			usersubmit: function() {
				for(let i = 0; i < 1; i++) {
					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=changeUsername&callback=userapi&key=QUgFYq4L5n89ZG2Ab&username=' + this.user.name).then(function(res) {
						this.setUser = res.body;
						if(this.user.name == null){
							this.$message({
					          showClose: true,
					          message: '用户名不能为空',
					          duration: 1000,
				         	  customClass: 'setuser'
					        });
					        return;
						}
						if(this.setUser.status == 1) {
							this.$message({
					          showClose: true,
					          message: this.setUser.info,
					          duration: 1000,
				         	  customClass: 'setuser'
					       });
					       this.$router.replace('/seting');
						}else{
							this.$message({
					          showClose: true,
					          message: this.setUser.msg,
					          duration: 1000,
				         	  customClass: 'setuser'
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
			'v-header': header

		}
	};
</script>

<style lang="scss" scoped>
	$setcolor: #B0B0B0;
	$setUser: #ECECEC;
	.setPhone{
		color: $setcolor;
		.set_user{
			position: fixed;
			top: 44px;
			height: 100%;
			width: 100%;
			background: $setUser;
			.setUserFrom{
				margin-top: 10px;
				.userInput{
					padding: 8px;
					height: 24px;
					line-height: 24px;
					background: #fff;
					input{
						height: 24px;
						width: 100%;
						font-size: 16px;
						color: #231815;
					}
				}
				.setUser{
					position: fixed;
					bottom: 40px;
					margin: 0 2%;
					width: 96%;
					line-height: 42px;
					input{
						width: 100%;
						height: 42px;
						background: #F7E973;
						font-size: 18px;
					}
				}
			}
			
		}
	}
	.setuser{
		color: #000;
	}
</style>
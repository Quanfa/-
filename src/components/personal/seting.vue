<template>
	<div class="person-wrapper">
		<v-header></v-header>
		<div class="personSet">
			<div class="avatar_set">
				<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-preview="handlePictureCardPreview" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					<span>头像</span>
					<img v-if="imageUrl" :src="imageUrl" v-model="imageUrl"  class="avatar">
						
					<i class="el-icon-arrow-right"></i>
				</el-upload>
			</div>
			<div class="infor-wrapper">
				<router-link to="/user_set" title="用户名设置">
					<div class="user-infor">
						<div class="user_text">用户名</div>
						<div class="user-data">{{userSet.username}}</div>
						<i class="el-icon-arrow-right"></i>
					</div>
				</router-link>
				<router-link to="/mail_set" title="邮箱设置">
					<div class="user-infor">
						<div class="user_text">邮箱</div>
						<div class="user-data">{{userSet.email}}</div>
						<i class="el-icon-arrow-right"></i>
					</div>
				</router-link>
				<router-link to="/phone_set" title="手机设置">		
					<div class="user-infor">
						<div class="user_text">手机</div>
						<div class="user-data">{{userSet.phone}}</div>
						<i class="el-icon-arrow-right"></i>
					</div>
				</router-link>
				<router-link to="/pass_set" title="密码设置">
					<div class="user-infor">
						<div class="user_text">密码</div>
						<div class="pass-data">******</div>
						<i class="el-icon-arrow-right"></i>
					</div>
				</router-link>
				<div class="pick"></div>
			</div>
			<div class="exit">
				<a href="javascript:void(0);" class="exit-a" @click="exit">退出</a>
			</div>
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
				userSet: [],
				imageUrl: '',
				picture: [],
				exits: []
			}
		},
		created() {

			this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=settings&callback=userapi&key=QUgFYq4L5n89ZG2Ab').then(function(res) {
				this.userSet = res.body.data;
				this.imageUrl = 'http://51kufei.com/' + this.userSet.avatar;
				console.log(this.userSet);
				console.log(this.imageUrl);
			}, function(res) {
				console.log(res.status);
			});
				
		},
		methods: {
			exit: function() {
				this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=logout&callback=userapi&key=QUgFYq4L5n89ZG2Ab').then(function(res) {
					this.exits = res.body;
					if(this.exits.code == 1){
						this.$message({
				          showClose: true,
				          message: this.exits.msg,
				          duration: 1000,
			         	  customClass: 'exit'
				        });
				        this.$router.replace('/index');
				        return;
					}
					
				}, function(res) {
					console.log(res.status);
				});
			},
		
			
			handleAvatarSuccess(res, file) {
				
				for (let i = 0; i <1; i++) {
					this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=uploadPicture&callback=userapi&key=QUgFYq4L5n89ZG2Ab&path=' + this.picture).then(function(res) {
						this.imageUrl = URL.createObjectURL(file.raw);
						this.picture.push(this.imageUrl)
						console.log(this.picture);
						
					}, function(res) {
						console.log(res.status);
					});
				}
				console.log(this.imageUrl);
				return this.imageUrl;
			},
			beforeAvatarUpload(file) {
				const isLt2M = file.size / 1024 / 1024 < 2;
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isLt2M;
			},
			submitUpload() {
		        this.$refs.upload.submit();
		      },
		      handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		      }
		},
		components: {
			'v-header': header

		}
	};
</script>

<style lang="scss" scoped>
	$percolor: #000;
	$perSize: 12px;
	$personBack: #ECECEC;
	$inforBack: #fff;
	$inforcolor: #868686;
	.avatar-uploader{
		position: relative;
		text-align: right;
		.el-upload{
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
			width: 100%;
			
			span{
				font-size: 16px;
				color: $percolor;
				position: absolute;
				top: 30px;
				left: 0;
			}
			i{
				position: absolute;
				top: 38px;
				right: 0;
				font-size: 16px;
				color: $inforcolor;
			}
			
		}
		.el-upload:hover {
			border-color: #fff;
		}
		.avatar-uploader-icon {
			font-size: 28px;
			color: #8c939d;
			width: 178px;
			height: 178px;
			line-height: 178px;
			text-align: center;
		}
		.avatar {
			width: 80px;
			height: 80px;
			float: right;
			border-radius: 100%;
			margin-right: 28px;
		}
	} 
	.person-wrapper {
		color: $percolor;
		font-size: $perSize;
		.personSet {
			position: fixed;
			top: 44px;
			width: 100%;
			min-height: 100%;
			background: $personBack;
			.avatar_set {
				padding: 6px 12px;
				background: $inforBack;
				margin: 10px 0;
				height: 80px;
			}
			.user-infor{
				padding: 12px 12px;
				background: $inforBack;
				border-bottom: 1px solid $personBack;
				display: flex;
				text-align: right;
				line-height: 20px;
				height: 20px;
				.user_text{
					font-size: 16px;
					color: $percolor;
					flex: 0 0 80px;
					text-align: left;
				}
				.user-data{
					flex: 1;
					font-size: 16px;
				}
				.pass-data{
					flex: 1;
					font-size: 16px;
					margin-top: 4px;
				}
				
				i{
					font-size: 16px;
					color: $inforcolor;
					flex: 0 0 20px;
					margin-top: 4px;
				}
				
				
			}
			.exit{
				margin: 0 3%;
				position: fixed;
				bottom: 20px;
				width: 94%;
				text-align: center;
				a{
					display: block;
					background: #F7E973;
					height: 42px;
					line-height: 42px;
					font-size: 20px;
					color: #262626;
				}
			}
		}
	}
</style>
<template>
	<div class="person-wrapper">
		<v-header></v-header>
		<div class="personCont">
			<div class="person_top">
				<div class="person_avatar">
					<router-link to="/seting" title="">
						<img src="./Avatar.png"/>
					</router-link>
				</div>
				<div class="collect_nav">
					<router-link to="/person/proColl" title="">产品收藏</router-link>
					<router-link to="/person/articleColl" title="">文章收藏</router-link>
				</div>
			</div>
			<keep-alive>
				<router-view v-if="!$route.meta.notKeepAlive"></router-view>
			</keep-alive>
			<router-view v-if="$route.meta.notKeepAlive"></router-view>
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
				inforList: []
			}
		},
		created() {

			this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_new&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=2').then(function(res) {
				this.inforList = res.body.data;
				console.log(this.inforList);
			}, function(res) {
				console.log(res.status);
			});
		},
		methods: {
			
		},
		components: {
			'v-header': header
		
		}
	};
</script>

<style lang="scss" scoped>
	$percolor: #000;
	$perSize: 12px;
	.person-wrapper {
		color: $percolor;
		font-size: $perSize;
		.personCont{
			position: relative;
			top: 44px;
			.person_top{
				background: url(../../static/img/person_back.png) center no-repeat;
				background-size: cover;
				height: 200px;
				position: relative;
				.person_avatar{
					position: absolute;
					top: 30px;
					left: 50%;
					margin-left: -48px;
					
					img{
						width: 96px;
						height: 96px;
						border-radius: 100%;
					}
				}
				.collect_nav{
					display: flex;
					text-align: center;
					height: 40px;
					line-height: 40px;
					position: absolute;
					bottom: 4px;
					width: 100%;
					a{
						flex: 1;
						font-size: 16px;
						color: #fff;
						
					}
					.active{
						color: #F7E973;
					}
				}
			}
		}
	}
</style>
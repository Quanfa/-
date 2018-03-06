<template>
	<main>
		<v-header></v-header>
		<div class="index-wrapper">
			<div class="wapper-nav">
				<router-link to="/index/infor" title=""><span>资讯</span></router-link>
				<router-link to="/index/race" title=""><span>赛事</span></router-link>
				<router-link to="/index/exhibit" title=""><span>展会</span></router-link>
				<router-link to="/index/product" title=""><span>产品</span></router-link>
				<router-link to="/index/commun" title=""><span>社区</span></router-link>
			</div>
		</div>
		<!--<router-view keep-alive></router-view>-->
		<keep-alive>
			<router-view v-if="!$route.meta.notKeepAlive"></router-view>
		</keep-alive>
		<router-view v-if="$route.meta.notKeepAlive"></router-view>
		<footers></footers>
		<resTop></resTop>
		<!--<p v-if="sign.User">{{sign.User[0].username}}</p>
		<p @userSignIn="userSignIn">{{$route.params.username}}</p>-->

	</main>
</template>

<script>
	import header from "@/components/header/header"
	import footers from "@/components/header/footer"
	import resTop from "@/components/header/returnTop"
	const ERR_OK = 0;

	export default {

		props: {
			
		},
		data() {
			return {
				
			}
		},
		created() {
//			this.$http.get('/api/sign').then((response) => {
//				response = response.body;
//				if(response.errno === ERR_OK) {
//					this.sign = response.data;
//				}
//			});

			
		},
		methods: {

		},
		components: {
			'v-header': header,
			footers,
			resTop
		}
	};
</script>

<style lang="scss" scoped>
	$navcolor: #F7E973;
	$navBack: #262626;
	.index-wrapper {
		height: 44px;
		line-height: 44px;
		background: $navBack;
		padding: 0 10%;
		margin-top: 44px;
		.wapper-nav {
			display: flex;
			text-align: center;
			a {
				flex: 1;
				color: $navcolor;
			}
			.active {
				span {
					border-bottom: 2px solid $navcolor;
					padding: 10px 8px;
				}
			}
		}
	}
</style>
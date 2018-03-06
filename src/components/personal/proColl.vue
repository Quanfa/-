<template>
	<div class="pro-collect" ref="proColl">
		<div v-show="productShow" class="article-wrapper">
			<div class="proItem" v-for="itemList in proList">
				<div class="ds" v-show="dsd == itemList.type">
					<router-link :to="{ path: '/index/proDel/',query: { id: itemList.id }}" :id="itemList.id" >
						<div class="articleImg">
							<img :src="itemList.slide"/>
						</div>
						<div class="article-Infor">
							<h2>{{itemList.name}}</h2>
							<div class="price">
								<p>￥：{{itemList.real_price}} <span>￥：{{itemList.price}}</span></p>
							</div>
						</div>
					</router-link>
				</div>
				
				
			</div>
		</div>
		<div v-show="NoProcoll" class="no_procoll">
			<img src="./No_collect.png"/>
			<p>暂无收藏</p>
		</div>
		
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		props: {
			
		},
		data() {
			return {
			  proList: [],
			  p: 1,
			  NoProcoll: false,
			  productShow: true,
			  dsd: true
			}
		},
		created() {
			this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=productcollect&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=1').then(function(res) {
				this.proList = res.body.data;
				if(this.proList == null){
					this.NoProcoll = true;
				}
				this.$nextTick(() => {
		            this.scroll = new BScroll(this.$refs.proColl, {
		              click: true
		            
		            });
		            
		          });
				console.log(this.proList);
			}, function(res) {
				console.log(res.status);
			});
		},
		methods: {
			
		},
		components: {
			
		
		}
	};
</script>

<style lang="scss">
	$proBack: #EDEFF2;
	$prolist: #000;
	.pro-collect{
		/*position: fixed;
		background: $proBack;
		height: 100%;
		width: 100%;*/
		position: fixed;
	    z-index: 1;
	    top: 244px;
	    left: 0;
	    width: 100%;
	    background: #EDEFF2;
	    bottom: 0;
	    overflow: hidden;
		.article-wrapper{
			.proItem{
				padding: 10px 12px;
				border-bottom: 1px solid #CDCDCD;
				a{
					display: flex;
					.articleImg{
						flex: 0 0 90px;
						img{
							width: 100%;
							height: 64px;
						}
					}
					.article-Infor{
						flex: 1;
						padding-left: 10px;
						position: relative;
						font-size: 12px;
						h2{
							color: $prolist;					
							line-height: 16px;
							overflow: hidden;
						    display: -webkit-box;
						    -webkit-box-orient: vertical;
						    -webkit-line-clamp: 2;
						}
						.price{
							color: #E22C28;
							font-size: 16px;
							position: absolute;
							bottom: 4px;
							text-align: right;
							width: 96%;
							span{
								color: #969696;
								font-size: 14px;
								margin-left: 20px;
								text-decoration: line-through;
							}
							
						}
					}
				}
				
			}
		}
		.no_procoll{
			width: 60%;
			margin: 70px auto;
			text-align: center;
			img{
				width: 100%;
			}
			p{
				color: #B0B0B0;
				font-size: 16px;
				margin-top: 10px;
			}
		}
	}
</style>
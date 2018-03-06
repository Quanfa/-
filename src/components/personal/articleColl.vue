<template>
	<div class="article-collect" ref="articles">
		<div v-show="articleShow" class="article-wrapper">
			<div class="articleItem" v-for="itemList in articleList">
				<div class="bit" v-if="itemList.type == 4">
					<router-link :to="{ path: '/index/details/',query: { id: itemList.id }}" :id="itemList.id" :title="itemList.title">
						<div class="articleImg">
							<img :src="itemList.slide"/>
						</div>
						<div class="article-Infor">
							<h2>{{itemList.name}}{{itemList.type}}</h2>
							<div class="author">
								<p>作者：{{itemList.editor}}</p>
								<p class="time">{{itemList.date}}</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="bit" v-else-if="itemList.type == 3">
					<router-link :to="{ path: '/index/exhibitDel/',query: { id: itemList.id }}" :id="itemList.id" :title="itemList.title">
						<div class="articleImg">
							<img :src="itemList.slide"/>
						</div>
						<div class="article-Infor">
							<h2>{{itemList.name}}{{itemList.type}}</h2>
							<div class="author">
								<p>作者：{{itemList.editor}}</p>
								<p class="time">{{itemList.date}}</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="bit" v-else="itemList.type == 2">
					<router-link :to="{ path: '/index/raceDel/',query: { id: itemList.id }}" :id="itemList.id" :title="itemList.title">
						<div class="articleImg">
							<img :src="itemList.slide"/>
						</div>
						<div class="article-Infor">
							<h2>{{itemList.name}}{{itemList.type}}</h2>
							<div class="author">
								<p>作者：{{itemList.editor}}</p>
								<p class="time">{{itemList.date}}</p>
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
			  articleList: [],
			  p: 1,
			  NoProcoll: false,
			  articleShow: true
			}
		},
		created() {
			this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=collection&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=' + this.p).then(function(res) {
				this.articleList = res.body.data;
				if(this.articleList == null){
					this.NoProcoll = true;
				}
				this.$nextTick(() => {
		            this.scroll = new BScroll(this.$refs.articles, {
		              click: true
		            
		            });
		            
		          });
				console.log(this.articleList);
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
	.article-collect{
		position: fixed;
	    z-index: 1;
	    top: 244px;
	    left: 0;
	    width: 100%;
	    background: #EDEFF2;
	    bottom: 0;
	    overflow: hidden;
		.article-wrapper{
			position: absolute;
			.articleItem{
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
						.author{
							display: flex;
							position: absolute;
							width: 100%;
							bottom: 4px;
							p{
								flex: 1;
								color: #666666;
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
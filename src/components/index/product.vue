<template>
	<div class="product-wrapper">
		<div class="proContent">
			<ul>
				<li v-for="proItem in productList" class="proList">
					<router-link :to="{ path: '/index/proDel/',query: { id: proItem.id }}" :id="proItem.id" :title="proItem.title">
						<div class="prodict_img">
							<img :src="proItem.path"/>
						</div>
						<div class="proInfor">
							<p>{{proItem.name}}</p>
							<div class="price">
								￥{{proItem.real_price}}
								<span>￥{{proItem.price}}</span>
							</div>
							<span>已售{{proItem.transaction_number}}件</span>
						</div>
					</router-link>
				</li>
			</ul>
			<a href="javascript:;" v-on:click="addProTodo"  class="potode-wapper">点击加载更多</a>
		</div>
	</div>
</template>

<script>
	const ERR_OK = 0;
	export default {
		props: {
	      id: {
	        type: Number
	      }
	    },
		data() {
			return {
				productList: [],
				p: 1,
				morePorduct: []
			}
		},
		created() {
	        
	       this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_product&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=' + this.p).then(function(res){
           	this.productList = res.body.data;
	           console.log(this.productList);
	        },function(res){
	            console.log(res.status);
	        });
	  	},
	   	methods:{
	    	addProTodo: function () {
				this.p += 1;
				this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_product&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=' + this.p).then(function(res){
	           		for (let i =0; i<4; i++) {
	           			this.morePorduct = res.body.data[i];
	           			this.productList.push(this.morePorduct)
	           		}
		           return;
		           
		        },function(res){
		            console.log(res.status);
		        });
				
				return;
		  	}
	  	},
		components: {
	      
	    }
	};
</script>

<style lang="scss" scoped>
	$inColor: #808080;
	$proBack: #EDEFF2;
	$contcolor: #000000;
	$listBack: #fff;
	.product-wrapper{
		color: $inColor;
		background: $proBack;
		.proContent{
			padding-bottom: 20px;
			ul{
				font-size: 0;
				li{
					display: inline-block;
					width: 49%;
					margin-right: 2%;
					vertical-align: top;
					margin-bottom: 2%;
					background: $listBack;
					.prodict_img{
						img{
							width: 100%;
							height: 190px;
						}
					}
					.proInfor{
						padding: 8px;
						p{
							color: $contcolor;
							font-size: 14px;
							overflow: hidden;
						    display: -webkit-box;
						    -webkit-box-orient: vertical;
						    -webkit-line-clamp: 2;
						    margin-bottom: 6px;
						    line-height: 16px;
						    height: 32px;
						}
						.price{
							color: #E22C28;
							font-size: 18px;
							margin-bottom: 6px;
							
							span{
								color: #828386;
								font-size: 14px;
								text-decoration: line-through;
								margin-left: 20px;
							}
						}
						span{
							color: #828386;
							font-size: 12px;
						}
					}
				}
				li:nth-child(2n){
					margin-right: 0;
				}
			}
			.potode-wapper{
				width: 96%;
				margin: 0 2%;
				background: #E9E9E9;
			    font-size: 16px;
			    color: #000000;
			    height: 38px;
			    line-height: 38px;
			    display: block;
			    text-align: center;
			    margin-top: 20px;
			}
		}
	}
</style>
<template>
	<div class="infor-wrapper">	
		<div class="banner-wrapper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(banner,keys) in banners" v-if="banners" key="banner.id" class="content">
					<a :href="banner.url" :title="banner.title"  >
						<img :src="banner.banners" />
						<p>{{banner.title}}</p>
					</a>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="inforContent">
			<div class="infor-list" v-for="(list,id) in inforList">
				<keep-alive>
					<router-link :to="{ path: '/index/details/',query: { id: list.id }}" :id="list.id" :title="list.title">
						<div class="listInfor">
							<h2>{{list.name}}</h2>
							<h3>{{list.summary}}</h3>
							<p>{{list.date}}<span>{{list.like}}</span></p>
						</div>
						<div class="listImg">
							<img :src="list.path"/>
						</div>
					</router-link>
				</keep-alive>
			</div>
			<a href="javascript:;" v-on:click="addNewTodo"  class="more-wapper">点击加载更多</a>
		</div>
		
	</div>
</template>

<script>
	import VueAwesomeSwiper from 'vue-awesome-swiper'
 	import { swiper, swiperSlide } from 'vue-awesome-swiper'
 	
	const ERR_OK = 0;
	
	export default {
		props: {
	      
	    },
		data() {
			return {
				inforList: [],
				banners: [],
				listMore: [],
				p: 1,
				swiperOption: {
				     autoplay: 6000,
				     initialSlide: 1,
				     loop: true,
				     pagination: '.swiper-pagination',
				     paginationClickable: true,
				     onSlideChangeEnd: swiper => {
				      	
				     }
			    }
			}
		},
		created() {
	      
	      this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_new&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=' + this.p).then(function(res){
           	this.inforList = res.body.data;
	          
	          
	        },function(res){
	            console.log(res.status);
	        });
	        
	       this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_silde&callback=userapi&key=QUgFYq4L5n89ZG2Ab').then(function(res){
           	this.banners = res.body.data;
	          
	        },function(res){
	            console.log(res.status);
	        });
	       
			
	  	},
	   	methods:{
	    	
	    	addNewTodo: function () {
				this.p += 1;
				this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_new&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=' + this.p).then(function(res){
	           		const more = res.body.data.length;
	           		for (let i =0; i < more; i++) {
	           			this.listMore = res.body.data[i];
	           			this.inforList.push(this.listMore)
	           		}
		        },function(res){
		            console.log(res.status);
		        });
				
				return;
		  	}
	  	},
		components: {
	      swiper,
   		  swiperSlide
	    }
	};
</script>

<style lang="scss" scoped>
	$inColor: #808080;
	$titColor: #000000;
	$bannersize: 14px;
	$moresize: 16px;
	.infor-wrapper{
		color: $inColor;
		.banner-wrapper{
			width: 100%;
			height: 160px;
			overflow: hidden;
			.content{
				position: relative;
				height: 160px;

				img{
					width: 100%;
					height: 160px;
				}
				p{
					width: 100%;
					position: absolute;
					padding: 6px 14px;
					background: rgba(86,85,85,.4);
					bottom: 0;
					font-size: $bannersize;
					color: #fff;
				}
			}
			.swiper-pagination-bullets{
				bottom: 34px;
			}
			.swiper-pagination-bullet{
				background: #fff;
				opacity: 1.0;
			}
			.swiper-pagination-bullet-active{
				background: #9E2E27;
			}
			.swiper-pagination{
				text-align: right;
			}
		}
		.inforContent{
			padding: 10px;
			.infor-list{
				display: flex;
				border-bottom: 1px solid #C9C9C9;
				margin-bottom: 10px;
				padding-bottom: 10px;
				.listInfor{
					flex: 1;
					padding-right: 10px;
					h2{
						color: $titColor;
						font-size: 16px;
						margin-bottom: 6px;
						overflow: hidden;
					    display: -webkit-box;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 1;
					}
					h3{
						color: $inColor;
						font-size: 12px;
						line-height: 16px;
						margin-bottom: 6px;
						overflow: hidden;
					    display: -webkit-box;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 2;
					}
					p{
						color: $titColor;
						font-size: 12px;
						span{
							display: inline-block;
							padding-left: 16px;
							background: url(../../common/img/icon/icon-like.png) left no-repeat;
							background-size: 12px 10px;
							margin-left: 16px;
						}
					}
				}
				a{
					display: flex;
				}
				.listImg{
					img{
						width: 100%;
						height: 72px;
					}
					flex: 0 0 92px;
				}
			}
			.more-wapper{
				background: #E9E9E9;
				font-size: $moresize;
				color: $titColor;
				height: 38px;
				line-height: 38px;
				display: block;
				text-align: center;
				margin-top: 20px;
			}
			.more-wapper:hover{
				background: #F7E973;
			}
		}
	}
</style>
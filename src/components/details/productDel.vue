<template>
	<div class="productDel" :id="id">
		<div class="product">
			<div class="del_proImg">
				<img :src="inforItem.path"/>
			</div>
			<div class="itemInfor">
				<h2>{{inforItem.name}}</h2>
				<p>￥{{inforItem.price}}<span>￥{{inforItem.real_price}}</span></p>
				<div class="was_success">
					交易成功<span>{{inforItem.transaction_number}}</span>
				</div>
				<!--<div class="dis_end">
					距离抢购结束：<span>05</span>天<span>04</span>小时<span>30</span>分<span>10</span>秒
				</div>-->
			</div>
		</div>
		<div class="proParam">
			<h3>
				<span>产品参数</span>
			</h3>
			<img :src="inforItem.p_path"/>
		</div>
		<div class="like-wrapper">
			<div class="border">
				<a href="javasript:void(0)" class="collect-a" @click="collects" :class="{'colled':this.status == 1}"></a>
			</div>
			
		</div>
		<div id="SOHUCS"></div>
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
				inforItem: [],
				relations: [],
				routersId: '',
				contHtml: '',
				type: 1,
				collect: [],
				status: ''
			}
		},
		created() {
	      this.getData();
	      this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=isCollect&callback=userapi&key=QUgFYq4L5n89ZG2Ab&type=' + this.type +'&id=' + this.routersId).then(function(res){
	           	this.status = res.body.code;
	          	console.log(this.status);
		        },function(res){
		        console.log(res.status);
	        });
	  	},
	  	watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'getData'
        },
	   	methods:{
	    	getData() {   //获取数据
	    		var cont = document.getElementsByClassName('contents');
                document.getElementsByTagName('BODY')[0].scrollTop=0;
                if(this.$route.query.id){
                    this.routersId = this.$route.query.id
                }
                this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_product_detail&callback=userapi&key=QUgFYq4L5n89ZG2Ab&gid=' + this.routersId).then(function(res){
		           	this.inforItem = res.body.data;
		           	this.relations = res.body.about;
		           	this.contHtml = this.inforItem.content;
			           
			           
			        },function(res){
			            console.log(res.status);
		        });
            },
            collects: function() {	
				this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=setCollect&callback=userapi&key=QUgFYq4L5n89ZG2Ab&type=' + this.type + '&id=' + this.$route.query.id).then(function(res) {
					this.collect = res.body;
					console.log(this.collect);
					if(this.collect.code == 1) {
						console.log(this.collect.code);
						this.status = 1;
						this.$message({
				          showClose: true,
				          message: this.collect.msg,
				          duration: 1000,
			         	  customClass: ''
				       });	
					}else{
						this.$message({
				          showClose: true,
				          message: this.collect.msg,
				          duration: 1000,
			         	  customClass: ''
				        });
						return;
					}
				}, function(res) {
					console.log(res.status);
				});				
			}
	  	},
		components: {
	      
	    }
	};
</script>

<style lang="scss" scoped>
	$procolor: #000;
	$proBack: #EDEFF2;
	$proInfor: #fff;
	$proSize: 18px;
	$marbott: 10px;
	.productDel{
		background: $proBack;
		padding-bottom: $marbott;
		.product{
			background: $proInfor;
			padding-bottom: $marbott;
			margin: $marbott 0;
			.del_proImg{
				text-align: center;
				background: #fff;
				img{
					width: 60%;
				}
			}
			.itemInfor{
				margin: 10px;
				h2{
					margin-bottom:$marbott;
					font-size: $proSize;
				}
				p{
					color: #E22C28;
					font-size: $proSize;
					margin-bottom: $marbott;
					span{
						color: #969696;
						font-size: 14px;
						margin-left: 20px;
						text-decoration: line-through;
					}
				}
				.was_success{
					margin-bottom: $marbott;
					border-bottom: 1px solid $proBack;
					padding-bottom: 4px;
					color: #969696;
					font-size: 14px;
					span{
						padding: 0 4px;
					}
				}
				.dis_end{
					color: #969696;
					font-size: 14px;
					span{
						color: #E22C28;
					}
				}
			}
		}
		.like-wrapper{
			padding: 20px 0;
			text-align: center;
			background: #f5f5f5;
			.border{
				border: 1px solid #1F2D3D;
				display: inline-block;
				width: 32px;
				height: 32px;
				margin: 0 14px;
				border-radius: 100%;
				text-align: center;
				a{
					
					display: inline-block;
					width: 28px;
					height: 28px;
					background: url(icon-lick.png) no-repeat;
					background-size: 54px 54px;
					
					background-position: -27px 1px;
				}
				.collect-a{
					background-position: 0px 1px;
				}
				.colled{
					background-position: 0px -27px;
				}
				
			}
			
		}
		.proParam{
			padding: 10px 12px;
			background: $proInfor;
			h3{
				border-bottom: 1px solid #C9C9C9;
				padding-bottom: 4px;
				margin-bottom: 10px;
				span{
					color: $procolor;
					font-size: 16px;
					border-left: 2px solid #F7E973;
					padding-left: 4px;
				}
			}
			img{
				width: 100%;
			}
		}		
	}
</style>
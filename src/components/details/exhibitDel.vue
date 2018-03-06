<template>
	<div class="inforDel-wrapper" :id="id">
		<div class="details">
			<h2>{{inforItem.name}}</h2>
			<p>
				{{inforItem.date}}
				<span>评论</span>
				{{inforItem.sort}}
				<span>点赞</span>
				{{inforItem.like}}
			</p>
		</div>
		<div class="summary">
			<span class="icon"></span>
			{{inforItem.summary}}
		</div>
		<div class="contents" v-html="contHtml">
			
		</div>
		<div class="like-wrapper">
			<div class="border">
				<a href="javasript:void(0)" class="like-a" @click="likes" :class="{'liked':this.likesd == 1}"></a>
			</div>
			<div class="border">
				<a href="javasript:void(0)" class="collect-a" @click="collects" :class="{'colled':this.status == 1}"></a>
			</div>
		</div>
		<div class="m_about">
            <h2>相关阅读</h2>
            <ul>
                <li v-for="relation in relations" @click="getData">
                    <router-link :to="{ path: '/index/exhibitDel/',query: { id: relation.id }}" replace>
                        {{relation.name}}
                    </router-link>
                </li>
            </ul>
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
				routerId: '',
				content: '',
				contHtml: '',
				type: 3,
				liketype: 3,
				collect: [],
				perlike: [],
				like: '',
				likesd: '',
				status: ''
			}
		},
		
		created() {
	      this.getData();
	      window.changyan.api.config({
				appid: 'cyt257kVf',
				conf: 'prod_5aed786908f080be58a49a9451824583'
			});
			this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=isCollect&callback=userapi&key=QUgFYq4L5n89ZG2Ab&type=' + this.type +'&id=' + this.routerId).then(function(res){
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
                    this.routerId = this.$route.query.id
                }
                this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=home_exhibition_detail&callback=userapi&key=QUgFYq4L5n89ZG2Ab&gid=' + this.routerId).then(function(res){
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
			},
			likes: function() {	
				this.$http.jsonp('http://51kufei.com/index.php?m=Home&c=Userapi&a=setLike&callback=userapi&key=QUgFYq4L5n89ZG2Ab&type='+this.liketype+'&id='+ this.$route.query.id +'&like=' + this.like).then(function(res) {
					this.perlike = res.body;
					console.log(this.perlike);
					if(this.perlike.code == 1) {
						this.likesd = 1;
						console.log(this.perlike.code);
						this.$message({
				          showClose: true,
				          message: this.perlike.msg,
				          duration: 1000,
			         	  customClass: ''
				       });
						
					}else{
						this.$message({
				          showClose: true,
				          message: this.perlike.msg,
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
	$titcolor: #000;
	$delcolor: #262626;
	$delBack: #EDEFF2;
	$contBack: #fff;
	$bordercolor: #cdcdcd;
	.inforDel-wrapper{
		.details{
			padding: 14px 10px;
			border-bottom: 1px solid $bordercolor;
			background: $contBack;
			h2{
				color: $titcolor;
				font-size: 18px;
				margin-bottom: 10px;
			}
			p{
				color: $delcolor;
				font-size: 14px;
				span{
					color: #969696;
					padding: 0 2px 0 14px;
				}
			}
		}
		.summary{
			margin: 10px;
			padding: 6px;
			border: 1px solid $bordercolor;
			background: $contBack;
			color: #262626;
			font-size: 16px;
			line-height: 22px;
			span{
				display: inline-block;
				width: 38px;
				height: 18px;
				background: url(../../common/img/icon/icon-summary.png) no-repeat;
				background-size: cover;
				vertical-align: middle;
			}
		}
		.contents{
			margin: 10px;
		    line-height: 22px;
		    background: #fff;
		    padding: 6px;
		    border: 1px solid $bordercolor;
			img{
				width: 80%;
				margin: 0 10%;
				padding: 10px 0;
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
					
					/*border: 1px solid #CDCDCD;
					border-radius: 100%;*/
					background-position: -27px 1px;
				}
				.collect-a{
					background-position: 0px 1px;
				}
				.colled{
					background-position: 0px -27px;
				}
				.liked{
					background-position: -27px -27px;
				}
			}
			
		}
		.m_about{
			padding: 10px 20px;
			background: $contBack;
			padding-bottom: 20px;
			border-top: 1px solid $bordercolor;
			border-bottom: 1px solid $bordercolor;
			h2{
				font-size: 16px;
				color: $titcolor;
				border-bottom: 1px solid #C9C9C9;
				padding-bottom: 6px;
				
			}
			ul{
				li{
					color: $delcolor;
					font-size: 16px;
					margin-top: 10px ;
					line-height: 18px;
					a{
						color: $delcolor;
					}
				}
			}
		}
	}
</style>
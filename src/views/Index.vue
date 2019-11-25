<template>
	<div>
		<div class="bl-row main">
			<!-- 回到顶部按钮 -->
			<div class="bl-backtop" style="right: 40px;" :bottom="100">
			   <!-- <div
			      style="{
			        height: 100%;
			        width: 100%;
			        background-color: #f2f5f6;
			        box-shadow: 0 0 6px rgba(0,0,0, .12);
			        text-align: center;
			        line-height: 40px;
			        color: #1989fa;
			      }"
			    >
			      UP
			    </div> -->
			</div>
			<div class="left bl-container bl-col-8 bl-card">
				<!-- 轮播图 -->
				 <div class="carousel-wrap">
					<transition-group tag="ul" class="slide-ul" name="slide">
					<li v-for="(item,index) in avatars" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
						<a :href="item.url">
							<img :src="item">
						</a>
					</li>
					</transition-group>
				<div class="carousel-items">
					<span v-for="(item,index) in avatars" :class="{active:index===currentIndex}"
					@mouseover="change(index)"></span>
				 </div>
				 </div>
				<h2>发现文章</h2>
				<div class="left bl-card-article shadow" v-for="(article, index) in articles" :key="index">
					<div class="bl-card-article-left ">
						<router-link :to="{ path: '/article/' + article.article.id }"><h3>{{article.article.title}}</h3></router-link>
						<ul>{{article.article.summary}}</ul>
						<div class="heat bl-row">
							<ul>{{article.article.nickname}}</ul>
							<ul>赞数:{{article.article.likes}}个</ul>
							<ul>评论数:{{article.article.comments}}个</ul>
						</div>
					</div>
					<div class="bl-card-article-right">
						<img :src="'https://images.weserv.nl/?url='+article.article.thumbnail" alt="" class="bl-card-img">
					</div>
				</div>
			</div>
			<div class="right bl-col-4">
				<div class="jianshu">
					<a target="_blank" href="/mobile/club">
						<img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="Banner s club">
					</a>
					<a target="_blank" href="">
						<img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7">
					</a>
					<a target="_blank" href="">
						<img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 5">
					</a>
					<a target="_blank" href="">
						<img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 6">
					</a>
				</div>
				<div class="writer-tod" >
					<h5>推荐作者</h5>
					<div @click="change">
						<span><i class="iconfont">&#xe655;</i>换一批</span>
					</div>
					
				</div>
				<div class="writer-recommend" v-for="(user,index) in users" :key="index">
					<div class="user-left">
						<img :src="user.avatar">
					</div>
					<div class="user-center">
						<div>
							{{user.nickname}}
						</div>
						<div>
							<span>{{user.comments}}个赞</span>
						</div>
						
					</div>
					<div class="user-right">
						<i class="iconfont" v-if="user.isThumbUp" @click="changeThumbUps1(user)">&#xe7e8;关注</i>
						<i class="iconfont" v-if="!user.isThumbUp" @click="changeThumbUps1(user)" >&#xe60c;已关注</i>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				users:[],
				articles :[],
				topics: [],
				avatars : [
					"https://images4.alphacoders.com/606/thumb-1920-606296.jpg",
				    "https://images.alphacoders.com/851/thumb-1920-851039.jpg",
					"https://images3.alphacoders.com/606/thumb-1920-606291.jpg",
					"https://images4.alphacoders.com/737/thumb-1920-737882.jpg"
				],
				currentIndex: 0,
				timer: null,
			}
		},
		
		created : function(){
			this.axios.get(this.GLOBAL.baseUrl + '/api/article').then(res => {
				// console.log(res.data.data);
				this.articles = res.data.data;
			});
			this.axios.get(this.GLOBAL.baseUrl + '/api/user').then(res => {
				// console.log(res.data.data);
				this.users = res.data.data;
			});
			this.axios.get(this.GLOBAL.baseUrl + '/api/topic').then(res => {
				// console.log(res.data.data);
				this.topics = res.data.data;
			});
			/* 动画自动播放 */
			this.$nextTick(() => {
				this.timer = setInterval(() => {this.autoPlay()}, 3000)
			})
			
		},
		methods:{
			// goToTitle (id) {
			// 	this.$router.push('/Article?id=' + id);
			// },
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 3000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
			 this.currentIndex = index
			 },
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > 3) {
					this.currentIndex = 0
				}
			},
			changeThumbUps1(user) {
				if (user.isThumbUp == true) {
					user.isThumbUp = false
					user.praiseCount++
				} else {
					user.isThumbUp = true
					user.praiseCount--
				}
			},
		}
	}
	
	
</script>

<style scoped>
	.main{
		margin-top: 30px;
	}

	.bl-card-article-left{

		padding-top: 10px;
	}
	.left{
		border-bottom-style: solid;
	}
	.right{
		margin-left: 30px;
		height: auto;
		height: 600px;
	}
	.heat{
		margin-top: 10px;
	}
	.jianshu a img{
		width: 100%;
		height: 60px;
	}
	.writer-tod{
		display: flex;
		flex-direction: row;
		height: 30px;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
		margin-top: 10px;
	 }
	.writer-recommend{
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	 }
	 .writer-recommend.user-left{
		flex: 0 0 25%;
	 }
	 .writer-recommend.user-center{
		flex: 0 0 50%;
	 }
	 .writer-recommend.user-right{
		flex: 0 0 auto;
	 }
	 .writer-recommend .user-left img{
		width: 75px;
		height: 75px;
		border-radius: 50%;
		border: 1px solid #DDD;
		position: relative;
	 }
	 
	 .carousel-wrap {
		position: relative;
		width: 100%;
		height: 300px;
		overflow: hidden;
		margin-bottom: 10px;
	  }
	  .slide-ul {
		width: 100%;
		height: 100%;
	  }
	  .slide-ul li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	  }
	  .slide-ul li img {
		width: 100%;
		height: 100%;
	  }
	  .carousel-items {
		z-index: 100;
		position: relative;
		top: -80px;
		text-align: center;
		font-size: 0;
	  }
	  .carousel-items span {
		display: inline-block;
		width: 50px;
		height: 6px;
		margin: 0 5px;
		background-color: #eee;
		cursor: pointer;
	  }
	  .carousel-items .active {
		background-color: #FFA500;
	  }
	  .bl-backtop {
	      position: fixed;
	      background-color: #fff;
	      width: 40px;
	      height: 40px;
	      border-radius: 50%;
	      color: #409eff;
	      display: flex;
	      align-items: center;
	      justify-content: center;
	      font-size: 20px;
	      box-shadow: 0 0 6px rgba(0,0,0,.12);
	      cursor: pointer;
	      z-index: 5;
		  bottom: 20px;
	 }
</style>
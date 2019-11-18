<template>
	<div>
		<div class="bl-row main">
			<div class="left bl-container bl-col-8 bl-card">
				<h2>发现文章</h2>
				<div class="left card bl-card-article bl-shadow" v-for="(article, index) in articles" :key="index">
					<div class="bl-card-article-left ">
						<router-link to="/article"><h3>{{article.title}}</h3></router-link>
						<ul>{{article.sketch}}</ul>
						<div class="heat bl-row">
							<ul>赞数:{{article.likeAccount}}个</ul>
							<ul>评论数:{{article.commentAccount}}个</ul>
						</div>
					</div>
					<div class="bl-card-article-right">
						<img :src="article.avatar" alt="" class="bl-card-img">
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
<!-- 				<div class="writer-tod" >
					<h5>推荐作者</h5>
					<div @click="change">
						<span><i class="iconfont">&#xe655;</i>换一批</span>
					</div>
				
				</div>
				<div class="writer-recommend" v-for="(user,index) in users" :key="index">
					<div class="left">
						<img :src="user.avatar">
					</div>
					<div class="center">
						<h3>{{user.nikename}}</h3>
						<span>{{user.write}}.{{user.praiseCount}}个赞</span>
					</div>
					<div class="right">
						<i class="iconfont" v-if="user.isThumbUp" @click="changeThumbUps1(user)">&#xe7e8;关注</i>
						<i class="iconfont" v-if="!user.isThumbUp" @click="changeThumbUps1(user)" >&#xe674;已关注</i>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// users:[],
				articles :[]
			}
		},
		created : function(){
			this.axios.get('http://localhost:8080/article').then(response=>{
				// alert(response.data.data.length)
				this.articles = response.data.data;
				console.log(response.data.data);
			})
			// this.axios.get('http://localhost:8080/sign-in').then(response=>{
			// 	this.users = response.data.data;
			// 	console.log(response.data.data);
			// })
		},
		// methods:{
		// 	changeThumbUps1(user) {
		// 		if (user.isThumbUp == true) {
		// 			user.isThumbUp = false
		// 			user.praiseCount++
		// 		} else {
		// 			user.isThumbUp = true
		// 			user.praiseCount--
		// 		}
		// 	 },
		// }
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
	 .writer-recommend.left{
		flex: 0 0 25%;
	 }
	 .writer-recommend.center{
		flex: 0 0 50%;
	 }
	 .writer-recommend.right{
		flex: 0 0 auto;
	 }
	 .writer-recommend .left img{
		width: 75px;
		height: 75px;
		border-radius: 50%;
		border: 1px solid #DDD;
		position: relative;
	 }
</style>
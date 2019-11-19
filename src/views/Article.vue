<template>
	<div>
	<div class="bl-row bl-container">
		<div class="bl-row bl-col-8">
			<div class="user" v-for="(user, index) in users.slice(0,1)" :key="index">
				<div>
					{{user.nickname}}
				</div>
				<div v-html="user.content">
					{{user.content}}
				</div>		
			</div>
<!-- 			<div  v-for="(article, index) in articles" :key="index" v-html="article.content">
				
			</div> -->
		</div>
		
		<div class="bl-col-4">
			<h1>哈哈哈哈哈哈哈哈哈哈哈哈</h1>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				users : [],
				articles :[]
			}
		},
		created : function(){
			var query = window.location.href;
			var i = query.lastIndexOf("=");
			var id = query.substring(i+1);
			this.axios.get('http://localhost:8080/article/' + id).then(response=>{
				// alert(response.data.data.length)
				this.users = response.data.data;
				console.log(response.data.data);
			})
			/* this.axios.get('http://localhost:8080/article').then(response=>{
				this.articles = response.data.data;
				console.log(response.data.data);
			}) */

		}
	}
</script>

<style scoped>
	.bl-col-8{
		
	}
	.bl-col-4{
	
	}
</style>

<template>
	<div class="bl-row bl-container">
		<div class="bl-row bl-col-8" v-for="(article, index) in articles.slice(0,1)" :key="index" v-html="article.content">
			{{article.content}}
		</div>
			
		<div class="bl-col-4">
			<h1>哈哈哈哈哈哈哈哈哈哈哈哈</h1>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				articles :[]
			}
		},
		created : function(){
			this.axios.get('http://localhost:8080/article').then(response=>{
				this.articles = response.data.data;
				console.log(response.data.data);
			})
		}
	}
</script>

<style scoped>
	.bl-col-8{
		
	}
	.bl-col-4{
	
	}
</style>

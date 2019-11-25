<template>
	<div class="bl-row bl-container">
		<div class="bl-row bl-col-8">
			<div class="xiangqing">
				<div>
					<h1>{{articleVo.article.title}}</h1>s
				</div>
				<div>
					<img :src="articleVo.article.avatar" class="bl-avatar" />
					<div>
						<div>
							{{articleVo.article.nickname}}
						</div>
							<div>
								{{articleVo.createTime.date.year}}年
								{{articleVo.createTime.date.month}}月
								{{articleVo.createTime.date.day}}日
								{{articleVo.createTime.time.hour}}:
								{{articleVo.createTime.time.minute}}:
								{{articleVo.createTime.time.second}}
							</div>
					</div>
				</div>
				<div class="AllContent" v-html="articleVo.content">
					{{articleVo.article.content}}
				</div>
			</div>
			<!-- 			<div  v-for="(article, index) in articles" :key="index" v-html="article.content">
				</div> -->
		</div>

		<div class="bl-col-4">
			<h1>哈哈哈哈哈哈哈哈哈哈哈哈</h1>
			{{articleVo.article.title}}
		</div>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					articleVo: {}
				};
		},
		created: function() {
			var id = this.$route.params.id;
			
			this.axios.get(this.GLOBAL.baseUrl + '/api/article/' + id).then(res => {
				
				console.log(res.data.data);
				
				this.articleVo = res.data.data;
				alert(this.articleVo)
				
			});
		},
		computed: {},
		methods: {}
	}
</script>

<style scoped>
	.bl-avatar {
		width: 100px;
		height: 100px;
	}

	.AllContent {
		width: 100%;
	}

	.bl-col-8 {}

	.bl-col-4 {}
</style>

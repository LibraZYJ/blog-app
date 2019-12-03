<template>
	<div class="row">
		<div v-for="(item, index) in articles" :key="index" class="col-12">
			<div class="media-wraaper shadow">
				<div class="media-left">
					<img :src="item.avatar" class="avatar-lg link" />
					<p>{{ item.nickname }}</p>
					<strong>来自</strong>
					<p>{{ item.topicName }}</p>
				</div>
				<div class="media-middle">
					<router-link :to="{ path: '/article/' + item.id }">
						<p>
							<span>{{ item.id }}</span>
							{{ item.title }}
						</p>
					</router-link>
					<p class="sub-title link">{{ item.summary }}</p>
					<p>
						<span class="meta">{{ item.comments }}评论</span>
						<span class="meta">{{ item.likes }}喜欢</span>
					</p>
				</div>
				<div class="media-right"><img :src="item.thumbnail" class="thumnail-xs"/></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles: [],
				keywords: ''
			};
		},
		created() {
			this.keywords = this.$route.query.keywords;
			console.log(this.keywords);
			this.axios
				.get(this.GLOBAL.baseUrl + '/article', {
					params: {
						keywords: this.keywords
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					this.articles = res.data.data;
				});
		},
		methods: {}
	};
</script>

<style>
</style>

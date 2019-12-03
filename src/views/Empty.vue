<template>
	<div></div>
</template>

<script>
	export default {
		data() {
			return{
				keywords:''
			};
		},
		mounted(){
			this.keywords = this.$attrs.query.keywords
			this.$attrs.push({ path:'/search' , query:{ keywords: this.keywords}});
		}
	}
</script>

<style>
</style>

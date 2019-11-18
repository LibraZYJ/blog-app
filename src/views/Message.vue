<template>	
	<div class="wrapper">
		<div class="side">
			<router-link to="/message/from">我收到的消息</router-link>
			<router-link to="/message/to">我收到的消息</router-link>
		</div>
		<router-view class="box"/>
	</div>
	
</template>	

<script>
</script>

<style scoped="">
	.wrapper{
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
	.side{
		
	}
</style>

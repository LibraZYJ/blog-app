<template>	
	<div class="wrapper">
		<div class="bl-container bl-df-center bl-row side">
			<div class="bl-row ">
				<router-link to="/message/from"><h3>我发送的消息</h3></router-link>
				<router-link to="/message/to"><h3>我收到的消息</h3></router-link>
			</div>
			<router-view class="box"/>
		</div>
	</div>
</template>	

<script>
</script>

<style scoped>
	.wrapper{
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: space-around;
	}
	.side{
		flex-direction: column;
		
	}
</style>

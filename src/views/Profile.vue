<template>
	<div class="bl-row bl-container">
		<div class="bl-col-8">
			<div class="bl-row" >
				<div>
					<img :src="this.user.avatar" class="bl-avatar-big" />
				</div>
				<div>
					<h2>{{user.nickname}}</h2>
				</div>
			</div>
			
			
			
		</div>
		<div class="bl-col-4">
			<h2>右边 个人中心</h2>
		</div>
	</div>
		
</template>

<script>
	export default{
		data (){
			return{
				user: JSON.parse(localStorage.getItem('user'))
			}
		}
		
	}
</script>

<style scoped>
	.bl-col-8{
		height: 500px;
		background-color: #eee;
	}
	.bl-col-4{
		height: 500px;
		background-color: #969696;
	}

</style>

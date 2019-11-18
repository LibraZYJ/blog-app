<template>
	<div>
		<div class="bl-df-left header bl-shadow main-color bl-title">
			<div>
				<h2>我的Logo</h2>
			</div>
			<div class="bl-df-left menu">
				<ul class="menu">
					<li>
						<router-link to="/">首页</router-link>
					</li>
					<li>
						<router-link to="/message">消息</router-link>
					</li>
					<li>
						<router-link to="/profile">关注</router-link>
					</li>
					
					</ul>
			</div>
			
			<div class="bl-df-right">	
				<li>
					<router-link to="/login" v-if="!this.user">登录</router-link>
				</li>
				<li class="nav-item" v-if="this.user">
					<router-link to="/profile"><img :src="this.user.avatar" class="bl-avatar" /></router-link>
				</li>
				<li class="nav-item" v-if="this.user" @click="logout" id="logout">退出</li>
			</div>
			
		</div>

		<div>
			<router-view class="bl-container"/>
		</div>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      user: JSON.parse(localStorage.user)
	    }
	  },
	  created: function () {
	    if (this.user) {
	      console.log(this.user)
	    }
	  },
	  methods:{
	    logout () {
	        alert('确定要注销吗')
	        this.user = null
	        localStorage.clear()
	    }
	  }
	}
</script>

<style scoped>
	.header{
		display: flex;
		list-style: none;
		flex-direction: row;
		align-items: center;
		height: 60px;
		width: 100%;
	}
	.menu{
		
	}
	.bl-df-left{
		height: 100%;
		width: 100%;

	}
	.bl-df-left .menu{
		display: flex;
		list-style: none;
		flex-direction: row;
		
		align-items: center;
		height: 100%;
		width: 500px;
		justify-content: space-around;
		
	}
	.bl-df-right{
		display: flex;
		list-style: none;
		flex-direction: row;
		height: 60px;
		width: 500px;
		justify-content: space-around;
		
	}
	a{
		text-decoration: none;
		font: 20px;
		color: #333;
	}
</style>

<template>
	<div>
		<div class="bl-df-left header bl-shadow main-color bl-title">
			<div>
				<h2>我的Logo</h2>
			</div>
			<!-- 导航栏 -->
			<div class="bl-df-left menu">
				<ul class="menu">
					<li>
						<router-link to="/">首页</router-link>
					</li>
					<li>
						<router-link to="/articles">文章</router-link>
					</li>
					<li>
						<router-link to="/topics">专题</router-link>
					</li>
					<li>
						<router-link to="/board">留言板</router-link>
					</li>
					<li>
						<router-link to="/Text9">9宫格</router-link>
					</li>
				</ul>
			</div>
			<!-- 搜索框 -->
			<div class=" ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text ivu-input-group ivu-input-group-default ivu-input-group-with-append ivu-input-with-search" style="margin-top: 6px;"><!----> <!----> 
				<i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate" ></i>
				<input autocomplete="off" spellcheck="false" type="text" placeholder="Enter something..." v-model="keywords" class="ivu-input ivu-input-default"> 
				<div class="ivu-input-group-append ivu-input-search" @click="search">Search</div>
			</div>
			<!-- 登录/注销 -->
			<div class="bl-df-right">	
				<li>
					<router-link to="/login-in" v-if="!this.user">登录</router-link>
				</li>
				<li class="nav-item" v-if="this.user">
					<router-link to="/profile"><img :src="this.user.avatar" class="bl-avatar" /></router-link>
				</li>
				<li class="nav-item" v-if="this.user" @click="logout" id="logout">退出</li>
			</div>
		</div>

		<div>
			<router-view class=""/>
		</div>
	</div>
</template>

<script>
	export default {
		  data() {
			return {
				user: JSON.parse(localStorage.getItem('user')),
				keywords:''
			  
			};
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
			},
			
			search(){
				let cp = this.$route.path;
				alert(cp);
				if(cp != '/searh' || cp != '/search/article' || cp != "/search/topic" || cp != "/search/user"){	
					this.$router.push({ path: '/search',query:{keywords:this.keywords}});
				}else{
					this.$router.push({ path: '/empty',query:{keywords:this.keywords}});
				}
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
		list-style: none;
		flex-direction: row;
		height: 60px;
		width: 200px;
		justify-content: space-around;
		margin-left: 200px;
	}
	a{
		text-decoration: none;
		font: 20px;
		color: #333;
	}
	/* 搜索框*/
	.ivu-input-group {
	    display: table;
	    width: 400px;
	    border-collapse: separate;
	    position: relative;
	    font-size: 14px;
	    top: 1px;
	}
	.ivu-input-group .ivu-input {
	    width: 100%;
	    float: left;
	    margin-bottom: 0;
	    position: relative;
	    z-index: 2;
	}
	.ivu-input-group .ivu-input {
	    width: 100%;
	    float: left;
	    margin-bottom: 0;
	    position: relative;
	    z-index: 2;
	}
	
	.ivu-input-group-with-append .ivu-input, .ivu-input-group-with-append.ivu-input-group-small .ivu-input {
	    border-top-right-radius: 0;
	    border-bottom-right-radius: 0;
	}
	.ivu-input-group-append, .ivu-input-group-prepend, .ivu-input-group>.ivu-input {
	    display: table-cell;
	}
	.ivu-input {
	    display: inline-block;
	    width: 100%;
	    height: 32px;
	    line-height: 1.5;
	    padding: 4px 7px;
	    font-size: 14px;
	    border: 1px solid #dcdee2;
	    border-radius: 4px;
	    color: #515a6e;
	    background-color: #fff;
	    background-image: none;
	    position: relative;
	    cursor: text;
	    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
	}
	button, input, select, textarea {
	    font-family: inherit;
	    font-size: inherit;
	    line-height: inherit;
	}
	.ivu-input-group-append, .ivu-input-group>.ivu-input:last-child {
	    border-bottom-left-radius: 0!important;
	    border-top-left-radius: 0!important;
	}
	.ivu-input-group-append {
	    border-left: 0;
	}
	.ivu-input-group-append, .ivu-input-group-prepend {
	    padding: 4px 7px;
	    font-size: inherit;
	    font-weight: 400;
	    line-height: 1;
	    color: #515a6e;
	    text-align: center;
	    background-color: #f8f8f9;
	    border: 1px solid #dcdee2;
	    border-radius: 4px;
	}
	.ivu-input-group-append, .ivu-input-group-prepend {
	    width: 1px;
	    white-space: nowrap;
	    vertical-align: middle;
	}
	.ivu-input-group-append, .ivu-input-group-prepend, .ivu-input-group>.ivu-input {
	    display: table-cell;
	}
	.ivu-input-search {
	    cursor: pointer;
	    padding: 0 16px!important;
	    background: #2d8cf0!important;
	    color: #fff!important;
	    border-color: #2d8cf0!important;
	    transition: all .2s ease-in-out;
	    position: relative;
	    z-index: 2;
	}
</style>

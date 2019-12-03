<template>
		<div id="bg">
				<router-link to="/"><i class="iconfont" style="font-size:16px">&#xe627;</i></router-link>
				<div class="login-box">
					<form class="login-form">
						<input type="text" v-model="userDto.mobile" id="mobile" />
						<input type="password" v-model="userDto.password" />
						<div class="code-box">
							<input type="text" v-model="userDto.code" />
							<img class="verify" @click.prevent="refresh" ref="codeImg" />
						</div>
						<input type="button" class="btn btn-lg bl-btn-info" value="登录" @click="signIn(userDto)" />
						<router-link to="/login-up">没有账号？去注册</router-link>
					</form>
				</div>
		</div>
</template>

<script>

	export default {
		data() {
				return {
					userDto: {
						mobile: '',
						password: '',
						code: ''
					},
					token:''
					// token: this.GLOBAL.token,
					// user: this.GLOBAL
				};
		},
		created() {
				this.axios.get(this.GLOBAL.baseUrl + '/api/code', { responseType: 'blob' }).then(res => {
					// console.log(res);
					var img = this.$refs.codeImg;
					let url = window.URL.createObjectURL(res.data);
					img.src = url;
					console.log(res.headers);
					//取得后台通过响应头返回的sessionId的值
					this.token = res.headers['access-token'];
					console.log(this.token);
				});
			},
		methods: {
				signIn(userDto) {
					this.axios({
						method: 'post',
						url: this.GLOBAL.baseUrl + '/api/user/sign-in',
						data: JSON.stringify(this.userDto),
						headers: {
							'Access-Token': this.token  //将token放在请求头带到后端
						}
					}).then(res => {
						if (res.data.msg === '成功') {
							alert('登录成功');
							localStorage.setItem('user', JSON.stringify(res.data.data));
							this.$router.push('/');
						} else {
							alert(res.data.msg);
							this.userDto.code = '';
						}
					});
				},
				refresh() {
					this.axios.get(this.GLOBAL.baseUrl + '/api/code', { responseType: 'blob' }).then(res => {
						console.log(res);
						var img = this.$refs.codeImg;
						let url = window.URL.createObjectURL(res.data);
						img.src = url;
					});
				}
		}
	};
</script>

<style scoped>
	.bl-input-box{
		width: 100%;
	}
	.login-form {
		padding-top: 20px;
		width: 60%;
		margin: 0 auto;
		text-align: left;
	}
	.full {
	  width: 100%;
	  height: 700px;
	}
	a {
	  text-decoration: none;
	  color: #fff;
	}
	.login-box {
		position: absolute;
		top: 150px;
		left: 540px;
		border: 2px solid rgb(45, 183, 245);
		background-color: #ddd;
		width: 450px;
		height: 300px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.login-box > input {
	    width: 70%;
	    height: 35px;
	    margin-bottom: 20px;
  	    border-radius: 5px;
	    color: #333;
	}
	.login-form input {
		width: 100%;
		height: 35px;
		outline: none;
		border: none;
		margin-bottom: 10px;
		border-radius: 5px;
	}
	.code-box {
		display: flex;
		margin-top: 10px;
		margin-bottom: 20px;
		justify-content: space-between;
	}
	.code-box input{
		width: 120px;
		background-color: rgb(232, 240, 254);
	}
					
	.verify {
		flex: 0 0 50%;
		height: 40px;
	}
	.verify:hover {
		cursor: pointer;
	}
	.code {
		
		flex: 0 0 40%;
		height: 40px;
	}
</style>

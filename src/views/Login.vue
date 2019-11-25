<template>
	<div class="bl-df-center">
		<div class="login-box bl-shadow ">
			<div class="login-form">
				<input type="text" placeholder="输入手机号" class="bl-input-box" v-model="userDto.mobile" />
				<input type="password" placeholder="输入密码" class="bl-input-box" v-model="userDto.password" show-password/>
				<div class="code-box">
					<input type="text" v-model="userDto.code" class=" code" />
					<img class="verify" @click.prevent="refresh" ref="codeImg" />
					<!-- <img :src="this.codeUrl" class="verify" @click="refresh" /> -->
				</div>
			</div>
			<div>
				<button class="btn bl—btn bl-btn-round bl-btn-info bl-btn-nomal bl-shadow "  @click="signIn(userDto)">登录</button>
			</div>
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
				// var number = Math.ceil(Math.random() * 10);
				// this.codeUrl = this.GLOBAL.baseUrl + '/api/code?num = ' + number;
				this.axios.get(this.GLOBAL.baseUrl + '/api/code', { responseType: 'blob' }).then(res => {
						console.log(res);
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
			// signIn(userDto) {
			// 	this.axios.post('http://localhost:8080/api/user/sign-in', JSON.stringify(this.userDto)).then(response => {
			// 	// alert(response.data.msg);
			// 	if (response.data.msg === '登录成功') {
			// 	  //将后台的用户信息存入本地存储
			// 	  localStorage.user = JSON.stringify(response.data.data);
			// 	  //路由跳转
			// 	  this.$router.push('/');
				  
			// 	}
			// 	});
			// },
			signIn(userDto) {
						this.axios({
							method: 'post',
							url: this.GLOBAL.baseUrl + '/api/user/sign-in',
							data: JSON.stringify(this.userDto),
							headers: {
								'Access-Token': this.token
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
			// refresh() {
			// 	this.codeUrl = '';
			// 	var number = Math.ceil(Math.random() * 10);
			// 	this.codeUrl = this.GLOBAL.baseUrl + '/api/code?num = ' + number;
			// }

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

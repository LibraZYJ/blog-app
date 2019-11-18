<template>
	<div class="bl-df-center">
		<div class="login-box bl-shadow ">
			<div>
				<input type="text" placeholder="输入手机号" class="bl-input-box" v-model="userDto.mobile" />
				<input type="password" placeholder="输入密码" class="bl-input-box" v-model="userDto.password" show-password/>
			</div>
			<div class="form-row">
                <span class="cell-7">
                    <input type="text" name="verifyCode" placeholder="请输入验证码">
                </span>
                <span class="cell-5" style="text-align: center;">
                     <img src="/code"  onclick="my(this)">
                </span>
            </div>
			<div>
				<button class="btn bl—btn bl-btn-round bl-btn-info bl-btn-nomal bl-shadow "  @click="signIn(userDto)">登录</button>
				
			</div>
		</div>
	</div>
</template>

<script>
	function my(e) {
	
	        const source = e.src ; // 获得原来的 src 中的内容
	        //console.log( "source : " + source  ) ;
	
	        var index = source.indexOf( "?" ) ;  // 从 source 中寻找 ? 第一次出现的位置 (如果不存在则返回 -1 )
	        //console.log( "index : " + index  ) ;
	
	        if( index > -1 ) { // 如果找到了 ?  就进入内部
	            var s = source.substring( 0 , index ) ; // 从 source 中截取 index 之前的内容 ( index 以及 index 之后的内容都被舍弃 )
	            //console.log( "s : " + s  ) ;
	
	            var date = new Date(); // 创建一个 Date 对象的 一个 实例
	            var time = date.getTime() ; // 从 新创建的 Date 对象的实例中获得该时间对应毫秒值
	            e.src = s + "?time=" + time ; // 将 加了 尾巴 的 地址 重新放入到 src 上
	
	            //console.log( e.src ) ;
	        } else {
	            var date = new Date();
	            e.src = source + "?time=" + date.getTime();
	        }
	}
	export default {
	  data() {
	    return {
	      userDto: {
	        mobile: '',
	        password: '',
	      },
		  
	    };
	  },
	  methods: {
	    signIn(userDto) {
	      this.axios.post('http://localhost:8080/sign-in', JSON.stringify(this.userDto)).then(response => {
	        alert(response.data.msg);
	        if (response.data.msg === '登录成功') {
	          //将后台的用户信息存入本地存储
	          localStorage.user = JSON.stringify(response.data.data);
			  //路由跳转
	          this.$router.push('/');
			  
	        }
	      });
	    },

		
	  }
	};
</script>

<style>
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
	
</style>

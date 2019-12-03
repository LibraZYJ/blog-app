<template>
	<div class="AllContent">
		<div class="about-cover pd-hearder bl-df-center bl-df-column" style="background-color: #008B8B;">
			<div class="title">个人中心</div>
			<div class="description center-align">
                <span id="jinrishici-sentence">十五泣春风，背面秋千下。</span>
            </div>
		</div>
		<div class="Mycard bl-row bl-container " style="background-color: #2DB7F5;">
			<div class="bl-container">
				<div class="bl-row bl-df-center" >
					<div class=" bl-df-column">
						<div>
							<img :src="this.user.avatar" class="bl-avatar-big" />
						</div>
						<div>
							<h2>{{user.nickname}}</h2>
						</div>
					</div>
					
				</div>
			</div>
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
	
	.bg-cover {
		
		width: 100%;
	    position: relative;
	    display: flex;
	    align-items: center;
	    height: 60vh;
	    padding: 0;
	    border: 0;
	    overflow: hidden;
	    background-position: center center;
	    background-size: cover;
	    transform: translate3d(0px, 0px, 0px);
		
	}
	.title {
	    font-size: 4rem;
	    font-weight: 700;
	    line-height: 1.85em;
	    margin-bottom: 20px;
	    position: relative;
	}
	.description {
	    font-size: 1.25rem;
	    font-weight: 300;
	    line-height: 1.4em;
	    color: #eee;
	}
	.about-cover {
	    height: 75vh;
	}
	.Mycard{
		height: 500px;
		top: -30px;
	}
</style>

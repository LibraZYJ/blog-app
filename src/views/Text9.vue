<template>
	<div class="container">
		<div class="row">
			<div class="box" style="background-color: #008B8B;">
				<!-- 轮播图 -->
				 <div class="carousel-wrap">
					<transition-group tag="ul" class="slide-ul" name="slide">
					<li v-for="(item,index) in avatars" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
						<a :href="item.url">
							<img :src="item">
						</a>
					</li>
					</transition-group>
				 </div>
			</div>
			<div class="box" style="background-color: #008B8B;">
			</div>
			<div class="box" style="background-color: #008B8B;">
			</div>
		</div>
		<div class="row">
			<div class="box" style="background-color: #008B8B;">
			</div>
			<div class="box" style="background-color: #008B8B;">
				
			</div>
			<div class="box" style="background-color: #008B8B;">
			</div>
		</div>
		<div class="row">
			<div class="box" style="background-color: #008B8B;">
			</div>
			<div class="box" style="background-color: #008B8B;">
			</div>
			<div class="box" style="background-color: #008B8B;">
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data(){
			return{

				avatars : [
					"https://images4.alphacoders.com/606/thumb-1920-606296.jpg",
				    "https://images.alphacoders.com/851/thumb-1920-851039.jpg",
					"https://images3.alphacoders.com/606/thumb-1920-606291.jpg",
					"https://images4.alphacoders.com/737/thumb-1920-737882.jpg"
				],
				currentIndex: 0,
				timer: null,
			}
		},
		methods: {
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 3000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
			 this.currentIndex = index
			 },
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > 3) {
					this.currentIndex = 0
				}
			},
			
		},
	}
</script>


<style scoped>
	.main{
		
	}
	.container{
		width: 80%;
		margin: 0 auto;
		display: grid;
		grid-template-column: 1fr 2fr 1fr;
		grid-template-rows: 260px auto 100px ;
		grid-gap:5px 10px;
	}
	#search{
		grid-column-start: 2;
		grid-column-end: 4;
	}
	#bottom{
		grid-column-start: 2;
		grid-column-end: 4;
	}
	.row{
		display: flex;
	}
	.box{
		width: 300px;
		height: 220px;
		margin-left: 10px;
		margin-bottom: 10px;
		padding: 10px 10px 10px 10px;
		border-radius: 10px;
		border: 1px solid #EEEEEE;
	}
	.img-circle{
		border-radius: 10px;
		width: 100%;
		height: 100%; /* 图片自适应外层单元格大小 */
	}/* 图片圆矩形效果 */
	.carousel-wrap{
		width: 100%;
		height: 100%;
	}
</style>

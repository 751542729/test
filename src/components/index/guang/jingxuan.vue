<template>
	<div>
		<div class="jxItem" v-for="item in jxList">
			<p>{{item.title}}</p>
			<div class="img">
				<img v-for="src in item.imgs" :src="src" />
			</div>
			<div class="tips">
				<span>{{item.tips}}</span>
				<span><i class="icon ion-ios-eye"></i>{{item.count}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				jxList: [{
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}, {
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}, {
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}, {
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}, {
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}, {
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}, {
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}, {
					title: "吸引外国人眼球的10个中国小城，你最喜欢哪一个？",
					imgs: ["images/img1.png", 'images/img1.png', "images/img1.png"],
					tips: "出行旅游攻略",
					count: 13.8 + "万"
				}]
			}
		}
	}
</script>

<style>
	.jxItem {
		background: #FFFFFF;
		border-bottom: 1px solid #ddd;
		padding: 15px;
	}
	
	.jxItem p {
		font-size: 18px;
		color: #555;
	}
	
	.jxItem .img {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	
	.jxItem .img img {
		width: 32%;
		height: auto;
	}
	
	.jxItem .tips {
		display: flex;
	}
	
	.jxItem .tips span {
		color: #999;
	}
	
	.jxItem .tips span:nth-of-type(2) {
		display: flex;
	}
	
	.jxItem .tips span i {
		font-size: 22px;
		margin-left: 15px;
		margin-right: 5px;
	}
</style>
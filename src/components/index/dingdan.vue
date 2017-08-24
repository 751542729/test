<template>
	<div class="page">
		<header>
			<span>订单</span>
		</header>
		<scroll class="page-content" :on-refresh="onRefresh">
			<item class="ddTitle item-icon-right" @click.native="toMyList('/mylist/alllist')">
				<span class="text">我的订单</span>
				<i class="icon ion-ios-arrow-right"></i>
				<span class="item-note">全部订单</span>
			</item>
			<div class="dingdan">
				<div class="btn" @click="toMyList('/mylist/daifukuan')">
					<i class="icon ion-ios-videocam positive"></i>
					<p>待付款</p>
				</div>
				<div class="btn" @click="toMyList('/mylist/daishiyong')">
					<i class="icon ion-ios-videocam assertive"></i>
					<p>待使用</p>
				</div>
				<div class="btn" @click="toMyList('/mylist/daipingjia')">
					<i class="icon ion-ios-videocam energized"></i>
					<p>待评价</p>
				</div>
				<div class="btn" @click="toMyList('/mylist/tuikuan')">
					<i class="icon ion-ios-videocam dark"></i>
					<p>退款/售后</p>
				</div>
			</div>
			<div class="zjdd">最近订单</div>
			
			
			<div class="ddItem" v-for="(item, index) in dingdan" v-if="index < more">
				<img :src="item.imgSrc" />
				<div class="right">
					<h1><span>{{item.name}}</span><span class="pj" v-if="item.pingjia.length > 0">已评价</span></h1>
					<h2>数量：{{item.count}}</h2>
					<h3>有效期：{{item.toTime}}</h3>
					<h4><span>总价：￥{{item.count * item.price}}</span><span class="goumai">再次购买</span></h4>
				</div>
			</div>
			<div v-if="more == 2" class="more" @click="getMore">更多<i class="icon ion-ios-arrow-down"></i></div>
		    <div v-if="more == 8" class="more" @click="toAll">查看全部<i class="icon ion-ios-arrow-right"></i></div>
		    
		    
		    
		    
		    <div id="bottom"></div>
		</scroll>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "dingdan",
				more: 2,
				dingdan: [{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017年07月31日",
					pingjia: [{
						text: "不错，好吃"
					}],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017年07月31日",
					pingjia: [{
						text: "不错，好吃"
					}],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017年07月31日",
					pingjia: [{
						text: "不错，好吃"
					}],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				},{
					name:"7天连锁酒店",
					id: "423356926",
					tel: "18639369392",
					payTime: "2017-07-30 17:40",
					count: 1,
					price: 69,
					toTime: "2017-07-31",
					pingjia: [],
					imgSrc: "images/pic.png"
				}]
			}
		},
		methods: {
			onRefresh(done) {
				done()
			},
			toMyList(path) {
				this.$router.push(path)
			},
			getMore(){
				this.more = 8
			},
			toAll(){
				this.$router.push("allDingdan")
			}
		}
	}
</script>
<style scoped>
	
	.page header {
		height: 44px;
		border-bottom: 1px solid #ddd;
		padding: 0 16px;
		background: #f0f0f0;
		line-height: 44px;
		font-size: 16px;
		color: #555;
		position: relative;
		z-index: 10000;
	}
	.item .text {
		font-size: 16px;
	}
	
	.dingdan {
		height: 84px;
		background: #fff;
		display: flex;
		justify-content: space-between;
	}
	
	.dingdan .btn {
		flex: 1;
		text-align: center;
		padding-top: 10px;
	}
	
	.dingdan .btn .icon {
		font-size: 40px;
	}
	
	.dingdan .btn p {
		text-align: center;
		color: #555;
	}
	
	.zjdd {
		padding: 5px 16px;
	}
	
	/**/
	.page-content .ddItem {
		border-bottom: 1px solid #ddd;
		background: #fff;
		display: flex;
		padding: 15px 16px;
	}
	
	.page-content .ddItem img {
		width: 50px;
		height: 50px;
	}
	
	.page-content .ddItem .right {
		width: 100%;
		padding-left: 10px;
	}
	
	.page-content .ddItem .right h1 {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
		font-size: 18px;
		font-weight: bold;
	}
	.page-content .ddItem .right h1 .pj {
		font-weight: normal;
		font-size: 14px;
		color: #08BFAB;
	}
	.page-content .ddItem .right h2 {
		margin-top: 0px;
		margin-bottom: 8px;
		font-size: 15px;
		color: #666;
	}
	
	.page-content .ddItem .right h3 {
		margin-top: 0px;
		margin-bottom: 2px;
		font-size: 15px;
		color: #666;
	}
	
	.page-content .ddItem .right h4 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0px;
		margin-bottom: 0px;
		font-size: 15px;
		color: #666;
	}
	.page-content .ddItem .right h4 .goumai {
		border: 1px solid #ff7900;
		padding: 5px;
		font-size: 14px;
		border-radius: 2px;
		color: #ff7900;
	}
	
	.page-content .ddItem .right hr {
		border: none;
		border-top: 1px solid #ddd;
		margin-top: 25px;
	}
	
	.page-content .ddItem .right h5 {
		margin-top: 5px;
		margin-bottom: 8px;
		font-size: 16px;
		color: #666;
	}
	
	.page-content .ddItem .right h5:nth-last-of-type(1) {
		margin-bottom: 0px;
	}
	
	.more {
		height: 44px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		color: #08BFAB;
	}
	.more .icon {
		font-size: 22px;
		margin-left: 10px;
	}
	#bottom {
		display: block;
		height: 50px;
	}
</style>
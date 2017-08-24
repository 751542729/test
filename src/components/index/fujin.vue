<template>
	<div class="page">
		<header>
			<span>南康东区 <i class="icon ion-ios-arrow-down"></i></span>
			<div><i class="icon ion-ios-search-strong"></i>找附近的吃喝玩乐</div>
		</header>
		<tabs style="border: none!important;" bg-color="ligth" tab-color="assertive" :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>

		<div class="page-content">
			<swiper ref="swiper" :callback="transitionEnd" direction="horizontal" width="100%" height="100%" hide-pager="true">
				<swiper-item>
					<div class="fenlei"></div>
					<div class="msItem" v-for="item in msItems">
						<img :src="item.img" />
						<div class="right ">
							<h1 v-text="item.name"></h1>
							<h2 v-text=" '￥' + item.price + '/人'"></h2>
							<h3 v-text="item.tip"></h3>
							<h4 v-text="item.count + '人消费'"></h4>
							<hr />
							<h5 v-for="text in item.youhui">{{text}}</h5>
						</div>
					</div>
				</swiper-item>
				<swiper-item>2222222222222</swiper-item>
				<swiper-item>33333333333333</swiper-item>
				<swiper-item>44444444444444</swiper-item>
			</swiper>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "fujin ",
				tabs: ["享美食 ", "住酒店 ", "爱玩乐 ", "全部 "],
				tabIndex: 0,
				msItems: [{
					img: "images/pic.png ",
					name: "沪上湘城 ",
					price: 58,
					tip: "湘菜/绿地风尚/宝山万达广场 ",
					count: 2000,
					youhui: ["90代100元 ", "每满100减10（买单立享） "]
				}, {
					img: "images/pic.png ",
					name: "沪上湘城 ",
					price: 58,
					tip: "湘菜/绿地风尚/宝山万达广场 ",
					count: 2000,
					youhui: ["90代100元 ", "每满100减10（买单立享） "]
				}, {
					img: "images/pic.png ",
					name: "沪上湘城 ",
					price: 58,
					tip: "湘菜/绿地风尚/宝山万达广场 ",
					count: 2000,
					youhui: ["90代100元 ", "每满100减10（买单立享） "]
				}]
			}
		},
		methods: {
			onTabClick(index) {
				this.tabIndex = index
				console.log(this.$refs.swiper)
				this.$refs.swiper.go(index)
			},
			transitionEnd(prev, current) {
				this.tabIndex = current
			},
			onRefresh(done) {
				done()
			},
			onInfinite() {

			}
		}
	}
</script>

<style scoped="scoped ">
	.page {}
	
	.page-content {
		padding-bottom: 50px!important;
		padding-top: 88px!important;
	}

	.page header {
		width: 100%;
		height: 44px;
		background: rgba(249, 249, 249, 1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
		position: relative;
		top: 0px;
		left: 0px;
		z-index: 1000!important;
		border-bottom: 1px solid #ddd;
	}
	
	.page header span {
		color: #555;
		width: 34%;
	}
	
	.page header div {
		background: #e0e0e0;
		width: 100%;
		height: 70%;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 10px;
		color: #999;
	}
	
	.page header div .icon {
		font-size: 24px;
		color: #777;
		margin-right: 10px;
	}
	
	.fenlei {
		height: 100px;
	}
	.swiper .swiper-item {
		overflow: auto;
	}
	.swiper .swiper-item .msItem {
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		background: #fff;
		display: flex;
		padding: 15px;
		margin-bottom: 10px;
	}
	
	.swiper .swiper-item .msItem img {
		width: 130px;
		height: 105px;
	}
	
	.swiper .swiper-item .msItem .right {
		width: 100%;
		padding-left: 10px;
	}
	
	.swiper .swiper-item .msItem .right h1 {
		margin-top: 5px;
		margin-bottom: 8px;
		font-size: 20px;
		font-weight: bold;
	}
	
	.swiper .swiper-item .msItem .right h2 {
		margin-top: 5px;
		margin-bottom: 8px;
		font-size: 16px;
		color: #666;
	}
	
	.swiper .swiper-item .msItem .right h3 {
		margin-top: 5px;
		margin-bottom: 8px;
		font-size: 16px;
		color: #666;
	}
	
	.swiper .swiper-item .msItem .right h4 {
		margin-top: 5px;
		margin-bottom: 8px;
		font-size: 16px;
		color: #333;
	}
	
	.swiper .swiper-item .msItem .right hr {
		border: none;
		border-top: 1px solid #ddd;
		margin-top: 25px;
	}
	
	.swiper .swiper-item .msItem .right h5 {
		margin-top: 5px;
		margin-bottom: 8px;
		font-size: 16px;
		color: #666;
	}
	
	.swiper .swiper-item .msItem .right h5:nth-last-of-type(1) {
		margin-bottom: 0px;
	}
</style>
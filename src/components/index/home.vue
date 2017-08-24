<template>
	<div class="page">
		<div class="page-content" v-scroll>
			<header>
				<span>上海 <i class="icon ion-ios-arrow-down"></i></span>
				<div @click="toSearch"><i class="icon ion-ios-search-strong"></i></div>
				<span class="right"><i class="icon ion-ios-barcode-outline"></i>扫码</span>
			</header>
			<swiper ref="swiper1" direction="horizontal" width="100%" height="150" pager-color="#ea5a49" pager-bg-color="#e5e4e3" hide-pager="true">
				<swiper-item>
					<img class="banner" src="images/timg.jpg" alt="" />
				</swiper-item>
				<swiper-item>
					<img class="banner" src="images/timg1.jpg" alt="" />
				</swiper-item>
				<swiper-item>
					<img class="banner" src="images/timg2.jpg" alt="" />
				</swiper-item>
				<swiper-item>
					<img class="banner" src="images/timg3.jpg" alt="" />
				</swiper-item>
			</swiper>

			<swiper ref="swiper2" direction="horizontal" width="100%" height="200" pager-color="#ea5a49" pager-bg-color="#e5e4e3" hide-pager="true">
				<swiper-item>
					<div class="b">
						<div class="items" v-for="item in items" @click="go(item.path)">
							<div :style="{background: item.bg}"><i :class="item.icon"></i></div>
							<span>{{item.text}}</span>
						</div>
					</div>
				</swiper-item>
				<swiper-item>
					<div class="b assertive-bg">
						<div class="items" v-for="item in items">
							<div :style="{background: item.bg}"><i :class="item.icon"></i></div>
							<span>{{item.text}}</span>
						</div>
					</div>
				</swiper-item>
			</swiper>
			<div class="kb"></div>
			
			<div class="tuijian">
				<div class="one">
					<div>
						<h3>劲爆折扣</h3>
						<h4>超值外卖</h4>
						<div class="circle"></div>
					</div>
					<div>
						<h3>周五清仓</h3>
						<h4>暑期跟团特价</h4>
						<div class="circle"></div>
					</div>
					<div>
						<h3>5折按摩</h3>
						<h4>领10元红包</h4>
						<div class="circle"></div>
					</div>
				</div>
				<div class="two">
					<div>
						<h3>5折按摩</h3>
						<h4>领10元红包</h4>
						<div class="circle"></div>
					</div>
					<div>
						<h3>5折按摩</h3>
						<h4>领10元红包</h4>
						<div class="circle"></div>
					</div>
					<div>
						<h3>5折按摩</h3>
						<h4>领10元红包</h4>
						<div class="circle"></div>
					</div>
					<div>
						<h3>5折按摩</h3>
						<h4>领10元红包</h4>
						<div class="circle"></div>
					</div>
				</div>
			</div>
			<div class="kb"></div>
			<img src="images/guanggao.png" style="width: 100%;"/>
			<div class="kb"></div>
			
			<div class="cnxh">-猜你喜欢-</div>
			<div class="kb"></div>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "home",
				items: [{
					icon: "ion-ios-home",
					text: "美食",
					bg: "#FD960E",
					path: "/meishi"
				}, {
					icon: "ion-ios-home",
					text: "电影/演出",
					bg: "#E7201E",
					path: "/dianying"
				}, {
					icon: "ion-ios-home",
					text: "酒店住宿",
					bg: "#7B4CE2",
					path: "/jiudian"
				}, {
					icon: "ion-ios-home",
					text: "休闲娱乐",
					bg: "#23C95B",
					path: "/yule"
				}, {
					icon: "ion-ios-home",
					text: "外卖",
					bg: "#FBC701",
					path: "/waimai"
				}, {
					icon: "ion-ios-home",
					text: "机票/火车票",
					bg: "#1A91E1",
					path: "/huochepiao"
				}, {
					icon: "ion-ios-home",
					text: "KTV",
					bg: "#E246E0",
					path: "/ktv"
				}, {
					icon: "ion-ios-home",
					text: "周边游",
					bg: "#24BAEC",
					path: "/zhoubian"
				}, {
					icon: "ion-ios-home",
					text: "丽人/美发",
					bg: "#F73B86",
					path: "/meifa"
				}, {
					icon: "ion-ios-home",
					text: "旅游出行",
					bg: "#FE524E",
					path: "/lvyou"
				}]
			}
		},
		methods: {
			go(path) {
				this.$router.push(path)
				$tabbar.$emit('hideTabbar')
			},
			toSearch(){
				this.$router.push("search")
				$tabbar.$emit("hideTabbar")
			}
		},
		directives: {
			scroll: {
				inserted: function(el,binding){
					el.onscroll = function(e){
						
						var result = el.scrollTop / 100
						el.children[0].style.background = `rgba(8,191,171,${result})`
					}
				}
			}
		}
	}
</script>
<style scoped="scoped">
	
	.page-content {
		padding-bottom: 50px;
	}
	.page-content header {
		width: 100%;
		height: 44px;
		background: rgba(8, 191, 171, 0);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
		position: fixed;
		z-index: 1000;
	}
	
	.page-content header span {
		color: #fff;
	}
	
	.page-content header .right {
		display: flex;
		align-items: center;
	}
	
	.ion-ios-barcode-outline {
		font-size: 30px;
		margin-right: 5px;
	}
	
	.page-content header div {
		background: #fff;
		width: 62%;
		height: 70%;
		border-radius: 22px;
		display: flex;
		align-items: center;
		padding: 0 10px;
	}
	
	.page-content header div .icon {
		font-size: 24px;
	}
	
	.page-content header div input {
		background: none;
		border: none;
		width: 100%;
		margin: 0 10px;
		font-size: 14px;
		padding: 0px;
	}
	
	.swiper .swiper-item .banner {
		width: 100%;
		height: 100%;
	}
	
	.swiper .swiper-item .b {
		width: 100%;
		height: 100%;
		display: flex;
		align-content: space-around;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding-top: 10px;
		background: #fff;
	}
	
	.swiper .swiper-item .b .items {
		width: 20%;
		height: 80px;
		text-align: center;
		color: #333;
	}
	
	.swiper .swiper-item .b .items div {
		margin: 0 auto;
		width: 50px;
		height: 50px;
		background: red;
		border-radius: 50%;
		font-size: 35px;
		text-align: center;
		line-height: 50px;
		color: #fff;
		margin-bottom: 2px;
	}
	
	.kb {
		height: 10px;
	}
	
	.page-content .tuijian .one {
		display: flex;
		width: 100%;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		background: #fff;
	}
	
	.page-content .tuijian .one>div {
		height: 170px;
		border: 1px solid #fff;
		flex: 1;
	}
	
	.page-content .tuijian .one>div:nth-of-type(2) {
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
	}
	
	.page-content .tuijian .one>div h3 {
		text-align: center;
		margin: 10px 0;
	}
	
	.page-content .tuijian .one>div h4 {
		text-align: center;
	}
	
	.page-content .tuijian .one>div .circle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin: 0 auto;
		margin-top: 18px;
	}
	
	.page-content .tuijian .one>div:nth-of-type(1) .circle {
		background: #FED820;
	}
	
	.page-content .tuijian .one>div:nth-of-type(2) .circle {
		background: #A81B39;
	}
	
	.page-content .tuijian .one>div:nth-of-type(3) .circle {
		background: #149280;
	}
	
	.page-content .tuijian .one>div:nth-of-type(1) h4 {
		color: #E7C263;
		font-size: 16px;
	}
	
	.page-content .tuijian .one>div:nth-of-type(2) h4 {
		color: #F49E43;
		font-size: 16px;
	}
	
	.page-content .tuijian .one>div:nth-of-type(3) h4 {
		color: #E49DA1;
		font-size: 16px;
	}
	.page-content .tuijian .one>div h3 {
		font-size: 22px;
		font-weight: bold;
	}
	
	/**/
	.page-content .tuijian .two {
		display: flex;
		width: 100%;
		border-bottom: 1px solid #ddd;
		background: #fff;
	}
	
	.page-content .tuijian .two>div {
		height: 170px;
		border: 1px solid #fff;
		flex: 1;
	}
	
	.page-content .tuijian .two>div:nth-of-type(2) {
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
	}
	.page-content .tuijian .two>div:nth-of-type(3) {
		
		border-right: 1px solid #ddd;
	}
	
	.page-content .tuijian .two>div h3 {
		text-align: center;
		margin: 10px 0;
	}
	
	.page-content .tuijian .two>div h4 {
		text-align: center;
	}
	
	.page-content .tuijian .two>div .circle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin: 0 auto;
		margin-top: 18px;
	}
	
	.page-content .tuijian .two>div:nth-of-type(1) .circle {
		background: #FED820;
	}
	
	.page-content .tuijian .two>div:nth-of-type(2) .circle {
		background: #A81B39;
	}
	
	.page-content .tuijian .two>div:nth-of-type(3) .circle {
		background: #149280;
	}
	.page-content .tuijian .two>div:nth-of-type(4) .circle {
		background: #149280;
	}
	
	.page-content .tuijian .two>div:nth-of-type(1) h4 {
		color: #E7C263;
		font-size: 16px;
	}
	
	.page-content .tuijian .two>div:nth-of-type(2) h4 {
		color: #F49E43;
		font-size: 16px;
	}
	
	.page-content .tuijian .two>div:nth-of-type(3) h4 {
		color: #E49DA1;
		font-size: 16px;
	}
	.page-content .tuijian .two>div:nth-of-type(4) h4 {
		color: #E49DA1;
		font-size: 16px;
	}
	.page-content .tuijian .two>div h3 {
		font-size: 22px;
		font-weight: bold;
	}
	
	.cnxh {
		height: 46px;
		background: #FFFFFF;
		border-bottom: 1px solid #f0f0f0;
		line-height: 46px;
		text-align: center;
		font-size: 15px;
		color: #777;
		border-top:none ;
	}
</style>
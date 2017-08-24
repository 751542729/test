<template>
	<div class="page">
		<header>
			<i @click="toOther('/theme')" class="icon ion-ios-color-filter-outline"></i>
			<i @click="toOther('/setting')" class="icon ion-ios-gear-outline"></i>
			<i @click="toOther('/message')" class="icon ion-ios-bell-outline"></i>
		</header>
		<scroll class="page-content" :on-refresh="onRefresh">
			<div class="person" @click="toOther('/person')">
				<img src="images/mm.jpg" />
				<div class="username">
					<p class="name">
						<span>侯文涛</span>
						<span>1</span>
					</p>
					<div>
						<span>个人信息</span>
						<i class="icon ion-ios-arrow-right"></i>
					</div>
				</div>
			</div>

			<div class="shoucang">
				<div class="items"  @click="toOther('/shoucang')">
					<i class="icon ion-ios-heart-outline"></i>
					<div>收藏</div>
				</div>
				<div class="items" @click="toOther('/pingjia')">
					<i class="icon ion-ios-chatboxes-outline"></i>
					<div>评价</div>
				</div>
				<div class="items" @click="toOther('/qingdan')">
					<i class="icon ion-ios-list-outline"></i>
					<div>清单</div>
				</div>
			</div>
			
			<div class="kb"></div>
			
			<list class="list-ios" v-borderColor>
				<item class="item-icon-right">
					<i class="ion-card" style="color: #FB9406;"></i>
					我的钱包
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #FB9406;"></i>
					余额
					<span class="item-note">￥{{yue.toFixed(2)}}</span>
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #8994FD;"></i>
					抵用券
					<span class="item-note">{{dyj}}张待使用</span>
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #8994FD;"></i>
					卡包
					<span class="item-note">{{kb}}张</span>
					<i class="icon ion-ios-arrow-right"></i>
				</item>
			</list>
			
			<div class="kb"></div>
			
			<list class="list-ios">
				<item class="item-icon-right">
					<i class="ion-card" style="color: #FB9406;"></i>
					好友去哪
					<span class="item-note">有新好友</span>
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #FB9406;"></i>
					会员中心
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #8994FD;"></i>
					手机充值
					
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #8994FD;"></i>
					发票助手
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				
				<item class="item-icon-right">
					<i class="ion-card" style="color: #FB9406;"></i>
					办信用卡
					<span class="item-note">有新好友</span>
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #FB9406;"></i>
					关于美团
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #8994FD;"></i>
					客服中心
					<i class="icon ion-ios-arrow-right"></i>
				</item>
				<item class="item-icon-right">
					<i class="ion-cash" style="color: #8994FD;"></i>
					我要合作
					<i class="icon ion-ios-arrow-right"></i>
				</item>
			</list>
			<div class="bottom"></div>
		</scroll>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				yue: 100,
				dyj: 10,
				kb: 1
			}
		},
		methods: {
			toOther(path) {
				this.$router.push(path)
			},
			onRefresh(done) {
				done()
			}
		},
		directives: {
			borderColor:{
				inserted(el){
					for(var i = 0; i < el.children.length; i++){
						el.children[i].children[0].classList.add("borderColor")
						console.log(el.children[i].children[0].className)
					}
				}
			}
		}
	}
</script>

<style scoped>
	.page header {
		height: 44px;
		width: 100%;
		background: #05C0AB;
		color: #fff;
		position: relative;
		z-index: 100;
		font-size: 32px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	
	.page header i {
		padding: 0px 10px;
		margin: 0px 5px;
	}
	
	.page .page-content .person {
		height: 100px;
		background: #05C0AB;
		display: flex;
		align-items: center;
		padding-left: 30px;
	}
	
	.page .page-content .person img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 3px solid #4DD2C5;
	}
	
	.page .page-content .person .username {
		margin-left: 15px;
		color: #fff;
	}
	
	.page .page-content .person .username p {
		font-size: 18px;
		display: flex;
	}
	
	.page .page-content .person .username p span:nth-of-type(2) {
		width: 20px;
		height: 20px;
		background: yellow;
		margin-left: 10px;
		border-radius: 4px;
	}
	
	.page .page-content .person .username div {
		display: flex;
	}
	
	.page .page-content .person .username div i {
		font-size: 16px;
		margin-left: 8px;
	}
	
	.page .page-content .shoucang {
		height: 80px;
		background: #fff;
		display: flex;
		padding: 10px 0px;
	}
	
	.page .page-content .shoucang .items {
		flex: 1;
		text-align: center;
		color: #777;
	}
	
	.page .page-content .shoucang .items i {
		font-size: 32px;
	}
	
	.page .page-content .shoucang .items div {
		font-size: 15px;
		margin-top: 5px;
	}
	
	.kb {
		height: 15px;
	}
	
	.list {
		margin-bottom: 0px;
	}
	.list .item {
		display: flex;
		align-items: center;
		padding: 0px;
		min-height: 50px;
		font-size: 16px;
		color: #555;
	}
	.list .item .hairline-top:before {
		background: #ff6900!important;
	}
	.list .item i:nth-of-type(1) {
		font-size: 28px;
		margin-right: 15px;
	}
	
	.list .item .icon {
		height: 50px;
	}
	.list .item .item-note {
		float: none;
		position: absolute;
		right: 50px;
	}
	.bottom {
		height: 70px;
	}

</style>
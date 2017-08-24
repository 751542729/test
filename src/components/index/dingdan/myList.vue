<template>
	<div class="page has-navbar">
		<header>
			<i class="icon ion-ios-arrow-left" @click="back"></i>
			<span>我的订单</span>
			<div class="sanjiao"></div>
		</header>
		<tabs style="border: none!important;" bg-color="light" :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: ["全部", "代付款", "待使用", "待评价", "退款/售后"],
				tabIndex: 0,

			}
		},
		methods: {
			onTabClick(index) {
				this.tabIndex = index
				if(index == 0) {
					this.$router.push("alllist")
				} else if(index == 1) {
					this.$router.push("daifukuan")
				} else if(index == 2) {
					this.$router.push("daishiyong")
				} else if(index == 3) {
					this.$router.push("daipingjia")
				} else {
					this.$router.push("tuikuan")
				}
			},
			back(){
				this.$router.push("/dingdan")
			}
		},
		created(){
			var path = this.$router.history.current.path
			if(path == "/mylist/daifukuan"){
				this.tabIndex = 1
			}else if(path == "/mylist/daishiyong"){
				this.tabIndex = 2
			}else if(path == "/mylist/daipingjia"){
				this.tabIndex = 3
			}else if(path == "/mylist/tuikuan"){
				this.tabIndex = 4
			}
			
		}
	}
</script>

<style scoped>
	.page {
		z-index: 11;
	}
	
	.page header {
		height: 44px;
		background: #f0f0f0;
		border-bottom: 1px solid #ddd;
		display: flex;
		align-items: center;
		line-height: 44px;
		position: relative;
		z-index: 1000;
	}
	
	.page header .icon {
		font-size: 30px;
		color: #777;
		padding: 0 15px;
	}
	
	.page header span {
		font-size: 16px;
		color: #777;
		margin-left: 10px;
	}
	
	.sanjiao {
		border-style: solid;
		border-width: 0px 6px 6px 6px;
		border-color: transparent transparent #555 transparent;
		width: 0px;
		height: 0px;
		transform: rotate(135deg);
		margin-top: 15px;
		margin-left: 5px;
	}
</style>
<template>
	<div class="page has-navbar">
	    <header>
	        逛一逛
	    </header>
	    <scroll class="page-content" :on-refresh="onRefresh">
	        <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
	        <div class="content">
	        	<router-view></router-view>
	        </div>
	    </scroll>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: ["精选", "享美食", "出去浪", "约电影"],
				tabIndex: 0,
			}
		},
		methods: {
			onInfinite(){
				
			},
			onRefresh(done){
				done()
			},
			onTabClick(index){
				this.tabIndex = index
				var path = ""
				if(index == 0){
					path = "/guang/jingxuan"
				}else if(index == 1){
					path = "/guang/xiangmeishi"
				}else if(index == 2){
					path = "/guang/chuqulang"
				}else {
					path = "/guang/yuedianying"
				}
				
				this.$router.push(path)
			}
		},
		watch: {
			'$route'(to,from){
				if(to.path == "/guang/jingxuan"){
					this.tabIndex = 0
				}
			}
		}
	}
</script>

<style scoped>
	.page header {
		height: 44px;
		background: #f9f9f9;
		border-bottom: 1px solid #ddd;
		position: relative;
		z-index: 10000;
		padding: 0 10px;
		line-height: 44px;
		font-size: 15px;
		font-weight: bold;
		color: #555;
	}
	.page.has-navbar .page-content {
		padding-bottom: 50px;
	}

	.page-content .content {
		padding-top: 46px;
	}

</style>
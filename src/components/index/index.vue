<template>
	<div v-tabbar="{'menus': menus, menuColor: '#555', activeMenuColor: '#08BFAB', onMenuClick: menuClicked}">
		<transition name="lunbo">
			<router-view></router-view>
		</transition>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "index",
				menus: [{
					iconOn: 'ion-ios-home',
					iconOff: 'ion-ios-home-outline',
					text: '首页',
					path: '/home'
				},{
					iconOn: 'ion-ios-location',
					iconOff: 'ion-ios-location-outline',
					text: '附近',
					path: '/fujin'
				},{
					iconOn: 'ion-ios-cart',
					iconOff: 'ion-ios-cart-outline',
					text: '逛一逛',
					path: '/guang'
				},{
					iconOn: 'ion-ios-list',
					iconOff: 'ion-ios-list-outline',
					text: '订单',
					path: '/dingdan'
				},{
					iconOn: 'ion-ios-person',
					iconOff: 'ion-ios-person-outline',
					text: '我的',
					path: '/user'
				}]
			}
		},
		methods: {
			menuClicked(){
				
			}
		}
	}
</script>

<style>
    .tabbar {
    	height: 50px;
    }
    .tabbar .tabbar-item .text-wrapper {
    	font-size: 24px;
    	line-height: 24px;
    }
    .tabbar .tabbar-item .icon-wrapper {
    	font-size: 30px;
    }
    
    .lunbo-enter {
    	position: absolute;
    	left: 100%;
    }
    .lunbo-enter-to {
    	position: absolute;
    	left: 0;
    	transition: 0.5s;
    }
    
    .lunbo-leave {
    	position: absolute;
    	left: 0;
    }
    .lunbo-leave-to {
    	position: absolute;
    	left: -100%;
    	transition: 0.5s;
    }
</style>
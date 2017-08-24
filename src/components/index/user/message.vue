<template>
	<div class="page">
		<header>
			<i class="icon ion-ios-arrow-left" @click="back"></i>
			消息
		</header>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.page {
		z-index: 101;
	}
    .page header {
		height: 44px;
		background: #f0f0f0;
		border-bottom: 1px solid #ddd;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 44px;
		position: relative;
		z-index: 1000;
		font-size: 16px;
		color: #777;
	}
	
	.page header .icon {
		font-size: 30px;
		color: #777;
		padding: 0 15px;
		position: absolute;
		top: 0px;
		left: 0px;
	}

</style>
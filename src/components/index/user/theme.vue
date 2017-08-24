<template>
	<div class="page">
		<header>
			<i class="icon ion-ios-arrow-left" @click="back"></i>
			<span>主题换肤</span>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "主题换肤"
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
</style>
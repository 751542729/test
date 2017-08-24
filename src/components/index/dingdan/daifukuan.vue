<template>
	<scroll v-scroll class="page-content" :on-refresh="onRefresh">
		<div>待付款</div>
	</scroll>
</template>

<script>
	export default {
		methods: {
			onRefresh(done){
				done()
			}
		},
		directives: {
			scroll: {
				inserted: function(el){
					el.children[0].style.top = "46px"
				}
			}
		}
		
	}
	
</script>

<style scoped>
	
</style>
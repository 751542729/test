<template>
	<div class="page">
		<div class="page-content">
			<search v-model="keyword" :placeholder="placeholder" :on-search="onSearch" cancel-text="搜索"></search>
			<p class="history">
				<span>历史记录</span>
				<i @click="clearHistory" class="icon ion-ios-trash-outline"></i>
			</p>
			<div v-if="keywords.length > 0" class="keywords">
				<span v-for="item in keywords">{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				keyword: "",
				placeholder: "阿斯顿发就爱",
				keywords: ["牛仔街区", "高丽情","品质优选美食"]
			}
		},
		methods: {
			onSearch() {
				if(this.keyword == "") return
				this.keywords.push(this.keyword)
				this.$router.push("searchList")
				
			},
			clearHistory(){
				this.keywords = []
			}
		}
	}
</script>

<style scoped="scoped">
	.page .page-content {
		background: #fff;
	}
	.page .page-content .history {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 5px 0 15px;
		margin-top: 10px;
	}
	
	.page .page-content .history span {
		font-size: 12px;
		color: #aaa;
	}
	
	.page .page-content .history .icon {
		font-size: 18px;
		color: #aaa;
		padding: 0px 10px;
	}
	.page .page-content .keywords {
		padding: 0px 15px;
	}
	.page .page-content .keywords span {
		padding: 5px 10px;
		background: #f2f2f2;
		margin-right: 10px;
		font-size: 12px;
		color: #333;
		border-radius: 4px;
	}
</style>
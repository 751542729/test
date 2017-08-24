<template>
	<div class="page has-navbar assertive">
		<!--头部-->
		<von-header theme="dark">
			<button slot="left" class="button button-clear">返回</button>
			<span slot="title">哈哈</span>
			<button slot="right" class="button button-clear"><i class="icon ion-navicon-round"></i></button>
		</von-header>
		<!--选项卡-->
		<tabs position="top" :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>

		<scroll class="page-content" :on-refresh="onRefresh">

			<swiper ref="hwt" direction="horizontal" width="100%" height="150" hide-pager="true" :callback="transitionEnd">
				<swiper-item class="dark-bg">111111111</swiper-item>
				<swiper-item class="positive-bg">222222222</swiper-item>
				<swiper-item class="assertive-bg">333333333</swiper-item>
			</swiper>

			<md-button class="button button-full button-positive" @click.native="prev">上一个</md-button>
			<md-button class="button button-full button-positive" @click.native="next">下一个</md-button>

			<accordion>
				<accordion-item title="我的好友" content-height="0">
					<item>adsf</item>
					<item>adsf</item>
					<item>adsf</item>
					<item>adsf</item>
					<item>adsf</item>

				</accordion-item>
			</accordion>

			<datepicker v-model="birthday" label="出生日期" date-format="yyyy/mm/dd" placeholder="请选择日期"></datepicker>
			{{birthday}}

			<md-button class="button button-assertive button-block" @click.native="demo">按钮</md-button>

			<!--阿斯顿发大发大师傅-->
			<!--<i class="ion-navicon-round"></i>
      <h2 class="padding" v-text="msg"></h2>-->
			<!--按钮-->
			<!--<md-button class="button button-positive button-block">
      	<i class="icon ion-home"></i> 按钮
      </md-button>-->

			<!--输入框-->
			<!--<von-input floating-label="true" type="text" v-model="msg" placeholder="请输入用户名" label="用户名"></von-input>-->

			<!--搜索框-->
			<!--<search v-model="msg" :on-search="onSearch" :on-cancel="onSearch" cancel-text="搜索"></search>-->

			<!--单选框-->
			<!--<von-radio :options="['男','女']" v-model="isMale" theme="positive"></von-radio>
      {{isMale}}-->

			<!--复选框-->
			<!--<von-checkbox :options="topics" v-model="chosenTopics" theme="positive"></von-checkbox>
      {{chosenTopics}}-->

			<!--开关-->
			<!--<von-toggle :text="toggleText" v-model="pushNotification" theme="positive"></von-toggle>
      {{pushNotification}}
      <div v-if="pushNotification">asdfasdfafadf</div>-->

			<!--滑块-->
			<!--<von-range v-model="value" :min="0" :max="100"></von-range>
      {{value}}-->

			<!--徽章-->
			<!--<badge num="2" class="positive"></badge>-->

			<!--列表-->
			<!--<item class="item item-divider">1222121212</item>
      
      	
      	<item class="item-icon-left">1222121212<i class="icon ion-navicon-round"></i></item>
      	<item class="item-icon-right">1222121212<i class="icon ion-navicon-round"></i></item>
      	<item class="item-icon-right">1222121212 <span class="item-note">note</span><i class="icon ion-navicon-round"></i></item>
      	<item class="">1222121212</item>
      	<item class="">1222121212</item>
      	<item class="">1222121212</item>-->

			<!--按钮栏-->
			<!--<button-bar 
      	theme="assertive" 
      	:tab-items="tabs" 
      	:tab-index="tabIndex" 
      	:on-tab-click="btnClick"
      >
      </button-bar>-->

			<!--缩放-->
			<!--<scalable width="100%" height="100%" :scale="3">
      	<div>12122112</div>
      </scalable>-->

		</scroll>
	</div>
</template>

<script>
	export default {
		name: "hwt",
		data() {
			return {
				msg: 'Hello! Vonic.',
				isMale: 0,
				topics: ["娱乐", "新闻", "军事", "美女", "美食"],
				chosenTopics: [],
				toggleText: "是否推送",
				pushNotification: "",
				value: 0,
				tabs: ["推荐", "热门", "猜你喜欢"],
				tabIndex: 0,
				birthday: ""
			}
		},
		watch: {
			chosenTopics: function() {
				for(var i = 0; i < this.chosenTopics.length; i++) {
					console.log(this.topics[this.chosenTopics[i]])
				}
			}
		},
		methods: {
			onSearch() {
				console.log("正在搜索...")
			},
			onCancel() {
				console.log("已取消")
			},
			onTabClick(val) {
				this.tabIndex = val
				this.$refs.hwt.go(val)
				console.log(val)
			},
			btnClick(val) {
				this.tabIndex = val
				console.log(this.tabs[val])
			},
			transitionEnd(prev, current) {
				this.tabIndex = current
				console.log(this.$refs.hwt)
			},
			prev() {
				this.$refs.hwt.prev()
			},
			next() {
				this.$refs.hwt.next()
			},
			onRefresh(done) {
				setTimeout(function() {
					done()
				}, 2000)
				//				this.$http.get("/getData",function(res){
				//					done()
				//				})
			},
			demo() {
//				$toast.show('哈哈......', 1000).then(function(){
//					console.log("hide")
//				})
				$loading.show('拼命加载中..')
				setTimeout(function(){
					$loading.hide()
				},2000)
				
				
				
			}
		},
		components: {

		},
		directives: {

		},
		mounted: function() {

		}
	}
</script>

<style>
	h2 {
		font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
		color: #888;
	}
	
	h3 {
		font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
		line-height: 150px;
		color: #fff;
	}
	
	.page.has-navbar .page-content {
		padding-top: 150px;
		/*height: 100%;*/
	}
	
	.scroll-inner {
		padding-top: 60px;
	}
	
	.accordion-content {
		padding: 0px!important;
	}
</style>
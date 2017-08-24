import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Index Components
import Index from './components/index/index.vue'
import Home from './components/index/home.vue'
import Fujin from './components/index/fujin.vue'

//逛一逛
import Guang from './components/index/guang.vue'
import Jingxuan from './components/index/guang/jingxuan.vue'
import Xingmeishi from './components/index/guang/xiangmeishi.vue'
import Chuqulang from './components/index/guang/lang.vue'
import Yuedianying from './components/index/guang/yuedianying.vue'

//订单
import Dingdan from './components/index/dingdan.vue'
import MyList from './components/index/dingdan/myList.vue'
import AllList from './components/index/dingdan/alllist.vue'
import Daifukuan from './components/index/dingdan/daifukuan.vue'
import Daishiyong from './components/index/dingdan/daishiyong.vue'
import Daipingjia from './components/index/dingdan/daipingjia.vue'
import Tuikuan from './components/index/dingdan/tuikuan.vue'

//用户信息
import User from './components/index/user.vue'
import Theme from './components/index/user/theme.vue'
import Setting from './components/index/user/setting.vue'
import Message from './components/index/user/message.vue'
import Person from './components/index/user/person.vue'
import Shoucang from './components/index/user/shoucang.vue'
import Pingjia from './components/index/user/pingjia.vue'
import Qingdan from './components/index/user/qingdan.vue'

//Meishi Components
import Meishi from './components/meishi/meishi.vue'

//Dingying Components
import Dianying from './components/dianying/dianying.vue'

import Search from "./components/search.vue"

// Routes
const routes = [{
	path: '/',
	redirect: "/home",
	components: {
		index: Index
	},
	children: [{
		path: "home",
		component: Home,
		children: [{
			//可以再嵌套子路由
			path:"tuijian"
		}]
	},{
		path: "fujin",
		component: Fujin
	},{
		path: "guang",
		redirect: "guang/jingxuan",
		component: Guang,
		children: [{
			path:"jingxuan",
			component: Jingxuan
		},{
			path:"xiangmeishi",
			component: Xingmeishi
		},{
			path:"chuqulang",
			component: Chuqulang
		},{
			path:"yuedianying",
			component: Yuedianying
		}]
	},{
		path: "dingdan",
		component: Dingdan
	},{
		path: "user",
		component: User
	}]
},{
	path: "/meishi",
	component: Meishi
},{
	path: "/dianying",
	component: Dianying
},{
	path: "/search",
	component: Search
},{
	path:"/mylist",
	redirect: "/mylist/alllist",
	component: MyList,
	children: [{
		path: "alllist",
		component: AllList
	},{
		path: "daifukuan",
		component: Daifukuan
	},{
		path: "daishiyong",
		component: Daishiyong
	},{
		path: "daipingjia",
		component: Daipingjia
	},{
		path: "tuikuan",
		component: Tuikuan
	}]
},{
	path: "/theme",
	component: Theme
},{
	path: "/setting",
	component: Setting
},{
	path: "/message",
	component: Message
},{
	path: "/person",
	component: Person
},{
	path: "/shoucang",
	component: Shoucang
},{
	path: "/pingjia",
	component: Pingjia
},{
	path: "/qingdan",
	component: Qingdan
}]

Vue.use(Vonic.app, {
	routes: routes
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		version: '1.0.0',
		app_id:'market',//测试环境和线上环境
		domain:'https://hzkjapp.sgcctd.cn',
		userinfo: {},
		API:'http://g278828097.picp.vip/share/'
	},
	getters: {
		api:state => {//通过方法访问
			return state.API
		}
	},
	mutations: {
		changeMarketPageName(state, data) {
			state.marketPageName = data;
		}
	}
})

export default store

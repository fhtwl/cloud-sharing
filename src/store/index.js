import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		version: '1.0.0',
		app_id:'market',//测试环境和线上环境
		domain:'https://hzkjapp.sgcctd.cn',
		
	},
	mutations: {
		changeMarketPageName(state, data) {
			state.marketPageName = data;
		}
	}
})

export default store

import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from 'vuex';

import home from '@/pages/home/home.vue'
import login from '@/pages/loginPage/login.vue'
import register from '@/pages/loginPage/register.vue'
import about from '@/pages/about/about.vue'
import user from '@/pages/user/user.vue'

Vue.use(Router)

const routes =  [
	{
		path: '/',
		name: 'home',
		component: home
	},
    {
		path: '/home',
		name: 'home',
		component: home
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/register',
		name: 'register',
		component: register
	},
	{
		path: '/about',
		name: 'about',
		component: about
	},
    {
		path: '/user',
		name: 'user',
		component: user,
	},
	{
		path: '/blog',
		name: 'blog',
		component: ()=> import('@/pages/blog/blog.vue')
	}
    
    
]
var router = new Router({
	// mode: "history",
    routes
})

const whiteList = '/home,/login,/register,/about,/user,/blog'

router.beforeEach(async(to, from, next) => {
    NProgress.start();
    const token = ''
    if (token) {
		// 用户信息不存在
		if (!store.getters.userInfo) {
			// await store.dispatch('GetUser'); // 获取用户信息
			// router.addRoutes(store.getters.addRoutes);
		} else {
			next();
		}
    } else {
		if (whiteList.includes(to.path)) {
			// 在免登录白名单，直接进入
			next();
		} else {
			// window.location.href = store.getters.api.IPORTAL_LOCAL_API;
			NProgress.done();
		}
    }
});
router.afterEach(() => {
	NProgress.done()
})
export default router
<template>
    <div class="body">
        <div class='head'>
            <div class="left">
				<div class="logo"><img src="@/assets/images/logo.png" alt=""></div>
				<el-menu
					:default-active="activeIndex"
					class="el-menu"
					mode="horizontal"
					@select="handleSelect"
					background-color="#fff"
					text-color="#333"
					active-text-color="#409EFF">
					<!-- <el-menu-item class="li" index="1"><router-link to="/home" class="link">首页</router-link></el-menu-item>
					<el-menu-item class="li" index="2"><router-link to="/login" class="link">登录</router-link></el-menu-item>
					<el-menu-item class="li" index="3"><router-link to="/register" class="link">注册</router-link></el-menu-item>
					<el-menu-item class="li" index="4"><a href="https://github.com/fhtwl/cloud-sharing" target="_blank" class="link">联系我们</a></el-menu-item> -->
					<el-menu-item v-for="(item,index) in data" :key="index" class="li" :index="(index - (-1)).toString()">
						<router-link v-if="item.to" :to="item.to" class="link">{{ item.text }}</router-link>
						<a v-else :href="item.href" target="_blank" class="link">{{ item.text }}</a>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="right">
				<el-input
					placeholder="请输入文字/标签/用户"
					v-model="keyword"
					class="search">
					<i slot="suffix" class="el-input__icon el-icon-search search-btn" @click="search"></i>
				</el-input>
				<el-button type="primary" @click="goBlog" class='login-btn'>写文章</el-button>
				<div class="notice">
					<span class="iconfont icon-tishi"></span>
					<el-badge :value="200" :max="99" class="badge"></el-badge>
				</div>
				<div class="avatar"><img src="~@/assets/images/user/touxiang.png" alt=""></div>
				
			</div>
        </div>
       <!-- <div class="pages">
            <div class="page-item">
                
            </div>
        </div> -->
    </div>
</template>

<script>
  export default {
    data() {
		return {
			activeIndex: '1',
			data: [
				{
					to: '/home',
					text: '首页',
					href: '',
					icon: ''
				},
				{
					to: '/login',
					text: '登录',
					href: '',
					icon: ''
				},
				{
					to: '/register',
					text: '注册',
					href: '',
					icon: ''
				},
				{
					to: '/user',
					text: '我的',
					href: '',
					icon: ''
				},
				{
					to: '',
					text: '联系我们',
					href: 'https://github.com/fhtwl/cloud-sharing',
					icon: ''
				}
			],
			keyword: ''
		};
    },
    methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		goBlog() {
			this.$router.push({path:'/blog'})
			
		},
		search() {
			console.log(this.keyword)
		}
    }
  }
</script>
<style scoped lang="scss">
    .body {
		width:100%;
		background:#fff;
		position: sticky;
		box-shadow: 0px 2px 12px 6px rgba(3,5,27,0.06);
		top:0;
		z-index: 80;
        .head {
			margin: auto;
			display: flex;
			width: 1200px;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
            .left {
				display: flex;
				align-items: center;
				.logo {
					width:40px;
					height:40px;
					background:#aaa;
					img {
						width:100%;
						height:100%;
						display: none;
					}
				}
				.el-menu {
					margin-left:60px;
					border-color: transparent;
					.li {
						padding:0;
						
					}
					.link {
						display: flex;
						width: 100%;
						height: 100%;
						padding: 0 20px;
					}
				}
			}
			.right {
				display: flex;
				align-items: center;
				.avatar {
					width: 30px;
					height: 30px;
					img {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.notice {
					position: relative;
					margin-right: 4px;
					.iconfont {
						font-size: 34px;
					}
					.badge {
						position: relative;
						top: -10px;
						left: -8px;
					}
				}
				.login-btn {
					background: #098cc8;
					-webkit-box-shadow: 0px 6px 8px 0px rgba(42, 83, 236, 0.38);
					box-shadow: 0px 6px 8px 0px rgba(42, 83, 236, 0.38);
					border-radius: 4px;
					margin-right: 16px;
				}
				.search {
					width: 200px;
					margin-right: 22px;
					.search-btn {
						color: $color;
						cursor: pointer;
					}
					
				}
			}
        }

		
    }
</style>
<template>
    <div class="body">
        <div class='head'>
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
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped lang="scss">
    .body {
		width:100%;
        .head {
            display: flex;
            background:#fff;
            position: sticky;
            top:0;
            align-items: center;
            width:100%;
            padding:0 30px;
			box-sizing: border-box;
			box-shadow: 0px 2px 12px 6px rgba(3,5,27,0.06);
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

		
    }
</style>
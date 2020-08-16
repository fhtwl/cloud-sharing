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
                <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
                <el-menu-item index="2"><router-link to="/login">登录</router-link></el-menu-item>
                <el-menu-item index="3"><a href="https://github.com/fhtwl" target="_blank">联系我们</a></el-menu-item>
            </el-menu>
        </div>
        <div class="pages">
            <div class="page-item">
                
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
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
            }
        }
        .pages {
            .charging-model-item-list {
                margin-top: 20px;
            }

            .charging-model-item-list ul li {
                height: 48px;
            }

            .charging-model-item-list ul li:nth-child(odd) {
                background: rgba(246, 246, 246, 1);
            }

            .charging-model-item-list ul li:nth-child(even) {
                height: 48px;
            }

            .charging-model-item-list ul li>div {
                height: 100%;
                justify-content: space-between;
                align-items: center;
                padding: 0 30px 0 22px;
            }

            .charging-model-item-list ul li>div>div {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
            }

            .charging-model-item-list ul li>div>div:first-child {
                color: rgba(0, 0, 0, 1);
            }

            .charging-model-item-list ul li>div>div:last-child {
                color: rgba(102, 102, 102, 1);
            }
        }
    }
</style>
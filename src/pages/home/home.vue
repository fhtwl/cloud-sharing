<template>
  <div class="body">
    <div class="left">
        <div class="router"></div>
        <div class="content"></div>
    </div>
    <div class="user">
        <div class="title"><img src="~@/assets/images/icon/yonghu.svg" alt=""> 用户信息</div>
        <div class="user-info">
            <div class="avatar"><img src="~@/assets/images/user/touxiang.png" alt=""></div>
            <div class="text">
                <div class="username">fhtwl</div>
                <div class="capital">
                    <div class="grade"><img src="~@/assets/images/icon/xunzhang.svg" alt="">4</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
	export default {
		data(){
			return {
			};
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

	.body {
		width: 1200px;
		height:100%;
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        margin:0 auto;
		.left {
            width: 940px;
            height: 100%;
            display: flex;
            flex-direction: column;
            .router {
                box-shadow: 0px 2px 12px 6px rgba(3,5,27,0.06);
                border-radius: 6px;
                height: 200px;
                background: #fff;
            }
            .content {
                box-shadow: 0px 2px 12px 6px rgba(3,5,27,0.06);
                border-radius: 6px;
                flex: 1;
                min-height: 600px;
                margin-top: 20px;
                background: #fff;
            }
        }
        .user {
            width: 240px;
            height: 240px;
            background:#fff;
            .title {
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                padding: 0 6px;
                font-weight: 600;
                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }
            }
            .user-info {
                display: flex;
                align-items: center;
                padding: 10px 10px;
                .avatar {
                    width: 45px;
                    height: 45px;
                    font-size: 0;
                    margin-right: 10px;
                    img {
                        width: 100%;
                        height: 100%
                    }
                }
                .username {
                    color: #333;
                }
                .capital {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: #999;
                    img {
                        width: 14px;
                        height: 14px;
                        vertical-align: middle;
                    }
                    .grade {
                        display: flex;
                        vertical-align: middle;
                    }
                }
            }
        }
	}
	
</style>
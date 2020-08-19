<template>
  <div class="body">
    <div class="left">
        <div class="router">
			<div class="user">
				<div class="user-info">
					<div class="avatar"><img src="~@/assets/images/user/touxiang.png" alt=""></div>
					<div class="text">
                        <div class="username">
                            是非观
                            <div class="level bg-yellow">LV 5</div>
                        </div>
                        <div class="post">
                            <span class="iconfont icon-ziliao"></span> 
                            <span>前端工程师</span>
                        </div>
						<div class="introduce">
                            <span class="iconfont icon-faxian"></span>
                            <span>一年太久，只争朝夕</span>
                        </div>
					</div>
				</div>
			</div>
            <!-- <div class="operation">
                <router-link v-for="(item,index) in routerData" :key="index" :to="item.to" class="link">{{ item.label }}</router-link>
            </div> -->
		</div>
        <div class="content"></div>
    </div>
    <div class="right">
        <div class="item-box chengjiu">
            <div class="title">个人成就</div>
            <div class="text">
                <div class="item">
                    <span class="icon iconfont icon-dianzan"></span>
                    <div class="num">获取点赞数 <span class="green">300</span></div>
                </div>
                <div class="item">
                    <span class="icon el-icon-view"></span>
                    <div class="num">文章被阅读 <span class="green">12300</span></div>
                </div>
                <div class="item">
                    <span class="icon iconfont icon-qianbao"></span>
                    <div class="num">获取硬币 <span class="green">8722</span></div>
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
                routerData: [
                    {
                        label: '文章',
                        to: '',
                        icon: ''
                    },
                    {
                        label: '资源',
                        to: '',
                        icon: ''
                    },
                    {
                        label: '问答',
                        to: '',
                        icon: ''
                    },
                    {
                        label: '评论',
                        to: '',
                        icon: ''
                    }
                ]
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
            box-sizing: border-box;
            .router {
                box-shadow: 0px 2px 12px 6px rgba(3,5,27,0.06);
                border-radius: 6px;
                height: 160px;
                background: #fff;
                padding: 0 30px;
				.user {
                    background:#fff;
                    width: 600px;
					.user-info {
						display: flex;
						align-items: center;
						padding: 30px 30px;
						.avatar {
							width: 90px;
							height: 90px;
							font-size: 0;
							margin-right: 30px;
							img {
								width: 100%;
								height: 100%
							}
						}
						.username {
                            color: #333;
                            font-weight: 600;
                            font-size: 28px;
                            line-height: 1;
                            position: relative;
                            .level {
                                position: absolute;
                                right: -4px;
                                top: -4px;
                                font-size: 12px;
                                color: #fff;
                                padding: 1px 2px;
                                border-radius: 1px;
                                font-weight: 400;
                            } 
                        }
                        .post {
                            font-size: 14px;
                            margin-top:14px;
                            display: flex;
                            align-items: center;
                            color: 666;
                            .iconfont {
                                vertical-align: middle;
                                margin-right: 4px;
                                position: relative;
                                top: 1px;
                            }
                        }
						.introduce {
							display: flex;
							align-items: center;
                            font-size: 12px;
                            margin-top: 0px;
                            .iconfont {
                                vertical-align: middle;
                                margin-right: 4px;
                                position: relative;
                                top: 1px;
                            }
						}
					}
                }
                .operation {
                    width: 100%;
                }
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
		.right {
            width: 240px;
            .item-box {
                width: 100%;
                background:#fff;
                box-shadow: 0px 2px 12px 6px rgba(3,5,27,0.06);
                border-radius: 6px;
                .title {
                    width: 100%;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #eee;
                    box-sizing: border-box;
                    padding: 0 6px;
                    font-weight: 600;
                    padding-left: 12px;
                    img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                    }
                }
                .text {
                    .item {
                        display: flex;
                        align-items: center;
                        .icon {
                            font-size: 30px;
                            margin-right: 10px;
                            margin-left:10px;
                            color: $color;
                        }
                        .el-icon-view {
                            font-size: 28px;
                        }
                        .num {
                            font-size: 14px;
                            // color: $color;
                        }
                    }
                }
            }
            .chengjiu {
                width: 100%;
            }
            
		}
        
	}
	
</style>
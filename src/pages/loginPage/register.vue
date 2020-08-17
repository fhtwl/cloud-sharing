<template>
  <div class="body">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="form" size="samll">
		<div class="login-title">欢迎注册{{ subject }}</div>
		<div class="content">
			<el-form-item prop="userName">
                <el-input @blur="checkUserName" v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
			</el-form-item>
            <el-form-item prop="phone">
                <el-input v-model.number="ruleForm.phone" :maxlength='11' placeholder="请输入手机号"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
			</el-form-item>
            <el-form-item prop="password2">
				<el-input type="password" v-model="ruleForm.password2" autocomplete="off" placeholder="确认密码"></el-input>
			</el-form-item>
             <el-form-item prop="code">
                <div class="code">
                    <el-input class='input' v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
                    <bwButton class="code-btn" text="验证码"></bwButton>
                </div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')" class='login-btn'>注册</el-button>
			</el-form-item>
            <div class="agreement">
                <p>点击 “注册” 即表示您同意并愿意遵守 {{ subject }}</p>
                <p><span class="theme-color">用户协议</span> 和 <span class="theme-color">隐私政策</span> 。</p>
            </div>
			<!-- <bw-button @click="submitForm('ruleForm')"></bw-button> -->
		</div>
	</el-form>
  </div>
</template>
<script>
	import bwButton from '@/components/common/bw-button' 
    import register from '@/api/user/register.js';
    import checkUserName from '@/api/user/checkUserName.js';
	export default {
		components: {
			bwButton
		},
		data() {
            var validatePass = (rule, value, callback) => {
                console.log(value)
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
			return {
				ruleForm: {
                    password: '',
                    password2: '',
                    phone: '',
                    userName: '',
                    code: ''
				},
				rules: {
					password: [
						{ required: true, trigger: 'blur',message: '密码必须是大/小写字母、数字和特殊符号中至少3种的组合', pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/ }
                    ],
                    password2: [
						{ validator: validatePass ,required: true, trigger: 'blur', min: 6, max: 24 }
					],
					userName: [
						{ required: true, trigger: 'blur',message:"用户名长度至少为6位，最多为24位", min: 4, max: 32 }
                    ],
                    phone: [
						{ required: true, trigger: 'blur',message:"请输入正确的手机号" ,pattern:/^1[345678]{1}\d{9}$/}
                    ],
                    code: [
						{ required: true, trigger: 'blur',message:"请输入正确的验证码" ,min: 4, max: 8 }
					],
                },
                subject: this.$store.getters.getSubject
			};
		},
		methods: {
            async checkUserName() {
                if(this.ruleForm.userName.length > 4 ) {
                    let userName = this.ruleForm.userName
                    let res = await checkUserName({
                        userName
                    })
                    if(res.success) {
                        this.$notify({
                            title: '提示',
                            message: '该用户名校验通过，可以使用',
                            duration: 0,
                            type: 'success'
                        });
                    }
                    else {
                        this.$notify({
                            title: '提示',
                            message: '该用户名已存在',
                            duration: 0,
                            type: 'error'
                        });
                    }
                }
            },
			async submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
				if (valid) {
                    let userName = this.ruleForm.userName,
                        password = this.ruleForm.password,
                        phone = this.ruleForm.phone,
                        code = this.ruleForm.code
					let res = await register({
                        userName,
                        password,
                        phone,
                        code
                    })
                    if(res.success) {
                        this.$message({
                            showClose: true,
                            message: '注册成功',
                            type: 'success'
                        });
                    }
                    this.$message({
                        showClose: true,
                        message: '注册失败',
                        type: 'error'
                    });
				} else {
					console.log('error submit!!');
					return false;
				}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style lang="scss" scoped>

	.body {
		width: 100%;
		height:100%;
		flex: 1;
		.form {
			margin:110px auto;
			width:1200px;
			height:600px;
			background:#fff;
			border-radius: 6px;
			box-shadow: 0px 2px 12px 6px rgba(3,5,27,0.06);
			.login-title {
                height:90px;
				font-size: 28px;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				text-align: center;
				color: #333;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: 1px;
                border-bottom: 1px solid #eee;
			}
			.content {
				width: 310px;
				margin: 48px auto;
				.login-btn {
					width: 100%;
					background: #098cc8;
					-webkit-box-shadow: 0px 6px 8px 0px rgba(42, 83, 236, 0.38);
					box-shadow: 0px 6px 8px 0px rgba(42, 83, 236, 0.38);
					border-radius: 4px;
				}
                .code {
                    display: flex;
                    justify-content: space-between;
                    .input {
                        width: 220px;

                    }
                    .code-btn {
                        width: 80px;
                    }
                }
                .agreement {
                    font-size: 12px;
                    text-align: center;
                }
			}
		}
	}
	
</style>
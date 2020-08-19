<template>
  <div class="body">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="form" size="samll">
		<div class="login-title">登录</div>
		<div class="content">
			<el-form-item prop="userName">
			<el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button :loading="btn" type="primary" @click="submitForm('ruleForm')" class='login-btn'>提交</el-button>
			</el-form-item>
			<!-- <bw-button @click="submitForm('ruleForm')"></bw-button> -->
		</div>
	</el-form>
  </div>
</template>
<script>
	// import bwButton from '@/components/common/bw-button'
	import login from '@/api/user/login.js';
	export default {
		components: {
			// bwButton
		},
		computed: {
			btn() {
				return this.$store.state.loading;
			}
		},
		data() {
			return {
				ruleForm: {
					password: '',
					email: '',
				},
				rules: {
					password: [
						{ required: true, trigger: 'blur' }
					],
					userName: [
						{ required: true, trigger: 'blur' }
					],
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$store.commit('setLoading');
				this.$refs[formName].validate(async (valid) => {
				if (valid) {
					// alert('submit!');
					console.log(login)
					let res = await login({
						userName:this.ruleForm.userName,
						password:this.ruleForm.password
					})
					if(res.success) {
						//登录成功
						this.$message({
							showClose: true,
							message: '登录成功',
							type: 'success'
						});
					}
					else {
						this.$message({
							showClose: true,
							message: res.errMsg,
							type: 'error'
						});
					}
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
			margin:240px auto;
			width:400px;
			height:280px;
			background:#fff;
			border-radius: 6px;
			box-shadow:0px 2px 12px 6px rgba(3,5,27,0.06);
			.login-title {
				font-size: 2em;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				text-align: center;
				color: #098cc8;
				line-height: 65px;
				letter-spacing: 1px;
			}
			.content {
				width: 310px;
				margin: 24px auto;
				.login-btn {
					width: 100%;
					background: #098cc8;
					-webkit-box-shadow: 0px 6px 8px 0px rgba(42, 83, 236, 0.38);
					box-shadow: 0px 6px 8px 0px rgba(42, 83, 236, 0.38);
					border-radius: 4px;
				}
			}
		}
	}

</style>

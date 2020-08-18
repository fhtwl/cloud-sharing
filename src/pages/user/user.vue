<template>
  <div class="body">
    user
    <!-- <router-link to="/blog">
        <el-button>发博文</el-button>
    </router-link> -->
    <router-view></router-view>
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
		width: 100%;
		height:100%;
		flex: 1;
		
	}
	
</style>
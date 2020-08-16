<template>
    <div id="app">
        <Head></Head>
        <router-view></router-view>
    </div>
</template>

<script>
  import Head from '@/components/common/Head'  
  export default {
    name: 'App',
    components:{
      Head
    }
  }
</script>
<style>
    
</style>
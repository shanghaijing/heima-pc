<template>
  <div id="app">
    <!-- <div id="nav"  默认里 被删除的项目>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      这个对应的就是页面导航链接 那个大的 vue 的 v 页面
    </div> -->
    <router-view />
    <!-- 这个对应的是路由出口   必须保留-->
  </div>
</template>
 <!--  补全script -->
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
</style>

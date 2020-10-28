import Vue from 'vue'
import App from './App.vue'
import router from './router' // 将路由加载进来
// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false
// 创建 vue 根实例对象
// 把 router 配置到根实例中 就可以使用 router的一些功能了
// 通过 render 方法把 app 根组件 渲染到了 #app 的入口节点
// 入口节点在 public 下的 index.html内的 app 节点上 ,最终所有组件都会渲染到这个 app 里面  挂载
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')// 这个等同于原来的挂载写法 el:'#app'


import Vue from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Row, Col, Search } from 'vant'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
  .use(Search)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

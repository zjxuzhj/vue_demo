import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  render: h => h(App)
}).$mount("#app")
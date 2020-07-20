import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'


import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

Vue.use(VueMaterial, VueCarousel)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

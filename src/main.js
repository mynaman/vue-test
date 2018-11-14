import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronLeft, faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false

new Vue({
  el: '#app',  
  render: h => h(App),  
  router
})

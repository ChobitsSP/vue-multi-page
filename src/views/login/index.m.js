import Vue from 'vue'
import App from './Index.vue'
import store from '@/store/Index.ts'

import './assets/app.css'

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  },
})

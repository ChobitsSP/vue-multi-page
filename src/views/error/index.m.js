// import "ant-design-pro/dist/ant-design-pro.css"; // Import whole style
// import './Index.tsx'
import "./assets/app.css"; // Import whole style

import Vue from 'vue'
import App from './Index.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
})

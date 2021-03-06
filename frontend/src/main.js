// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './styles/mystyle.scss'
import store from './store/store.js'
Vue.use(VueMaterial)
Vue.config.productionTip = false
import 'iview/dist/styles/iview.css';
import iView from 'iview';
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

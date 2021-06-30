import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './routes/router.js'
import VueQuillEditor from 'vue-quill-editor'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

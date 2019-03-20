import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import BContainer from 'bootstrap-vue/es/components/layout/container'
import BForm from 'bootstrap-vue/es/components/form/form'
import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import BButton from 'bootstrap-vue/es/components/button/button'
import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.component('b-container', BContainer)
Vue.component('b-form', BForm)
Vue.component('b-form-input', BFormInput)
Vue.component('b-button', BButton)
Vue.component('b-form-select', BFormSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

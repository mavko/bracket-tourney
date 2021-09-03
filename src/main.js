import Vue from 'vue'
import app from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
	vuetify,
	render: (h) => h(app),
}).$mount('#app')

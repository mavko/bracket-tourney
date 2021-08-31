import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		dark: true,
		themes: {
			light: {
				primary: '#5E5CE6', // ##1372BA
				error: '#FF3B30',
				success: '#34C759',
				info: '#007AFF',
				warning: '#FF9500',
			},
			dark: {
				primary: '#10baa8', // ##1372BA
				error: '#FF453A',
				success: '#30D158',
				info: '#007AFF',
				warning: '#FF9F0A',
			},
		},
	},
	icons: {
		iconfont: 'mdi',
	},
})

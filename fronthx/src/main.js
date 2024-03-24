import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// TalwindCss
import './assets/css/index.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
    .use(store)
    .use(vuetify)
    .use(router)
    .mount('#app')

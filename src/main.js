import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import GlobalComponentAlpha from './components/global/GlobalComponentAlpha.vue'
import GlobalComponentBeta from './components/global/GlobalComponentBeta.vue'
import GlobalComponentGamma from './components/global/GlobalComponentGamma.vue'

const app = createApp(App)

app.component("GlobalComponentAlpha", GlobalComponentAlpha)
    .component("GlobalComponentBeta", GlobalComponentBeta)
    .component("GlobalComponentGamma", GlobalComponentGamma)

app.mount('#app')

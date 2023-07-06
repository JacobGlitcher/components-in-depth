import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import GlobalComponentAlpha from './components/registration/global-components/GlobalComponentAlpha.vue'
import GlobalComponentBeta from './components/registration/global-components/GlobalComponentBeta.vue'
import GlobalComponentGamma from './components/registration/global-components/GlobalComponentGamma.vue'

const app = createApp(App)

app.component("GlobalComponentAlpha", GlobalComponentAlpha)
    .component("GlobalComponentBeta", GlobalComponentBeta)
    .component("GlobalComponentGamma", GlobalComponentGamma)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // Bootstrap的CSS
import { BootstrapVue3, BVToastPlugin } from 'bootstrap-vue-3' // 引入BootstrapVue3
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css' // BootstrapVue的CSS

const app = createApp(App)

app.use(store)
app.use(router)
app.use(BootstrapVue3)
app.use(BVToastPlugin) // 如果您需要Toast插件，其他插件也类似使用

app.mount('#app')

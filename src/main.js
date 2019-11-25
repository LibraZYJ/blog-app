import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import axios from 'axios'
import VueAxios from 'vue-axios'
//引用全局数据文件
import global_ from '@/util/Global'
//挂载到Vue实例上面
Vue.prototype.GLOBAL = global_


/*引入对话框组件*/
import VuejsDialog from 'vuejs-dialog';
/*引入对话框组件样式*/
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
/*通知Vue安装使用这个组件*/
Vue.use(VuejsDialog);
Vue.use(VueAxios, axios)

Vue.use(Vuetify)
Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from "echarts";

// import axios from 'axios'

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

Vue.config.productionTip = false
// Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')

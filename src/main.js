import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index'
Vue.prototype.$http=axios;
Vue.config.productionTip = false
axios.defaults.withCredentials=true; //全局配置携带跨源凭证
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    console.log(this.$root.$data)
  },
}).$mount('#app')
Vue.filter('currency',(data,currency,digit)=>{
  // console.log('过滤器调用了',data,arg);
  
  currency=currency||'$';
  digit=digit||2;
  
  return currency + data.toFixed(digit)
  })
  

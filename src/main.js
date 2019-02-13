import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root="http://127.0.0.1:3000/"
Vue.http.options.emulateJSON=true;
Vue.http.options.withCredentials=true;
import {Header,Swipe,SwipeItem,Search} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Search.name,Search)
Vue.filter('brandClassify',function(val){
  if(val==1){
    return '鞋靴品牌大全'
  }else if(val==2){
    return '运动品牌大全'
  }else if(val==3){
    return '户外品牌大全'
  }else{
    return '儿童品牌大全'
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

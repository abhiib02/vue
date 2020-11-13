import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from 'vuex';
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
  });
  
  let app ='';
Vue.config.productionTip = false
Vue.prototype.$http = axios
fb.auth().onAuthStateChanged(function() {
    if(!app){
     new Vue({
       router,
       store,
       render: h => h(App)
     }).$mount('#app')
     
    }
   });
   
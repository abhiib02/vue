<template>

  <div id="app" @mousemove="cursorfollow($event)" v-bind:class="{nightmode:nightmode}">
  
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.0/css/mdb.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
   <div class="cursor" :style="{top : y+'px',left: x+'px',width: zIn+'px',height: zIn+'px',}"></div>
   <div id="nightmode">
      <label class="switch">
  <input v-model="nightmode" @click="nightmode = !nightmode" class="switch__input" type="checkbox">
  <span class="switch__background">
    <span class="switch__toggle">
      <span class="switch__moon"></span>
    </span>
    <span class="switch__stars"></span>
    <span class="switch__clouds"></span>
  </span>
</label>
    </div>
    <Navigation/>
    <transition name="page" mode="out-in">
    <router-view  class="animated " transition="slideInUp" />
    
    </transition>      
    
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components:{
    Navigation
  },
  methods:{
      cursorfollow(event){
        this.x=event.clientX;
        this.y=event.clientY;
      },
  },
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
.cursor{
  border:#0ff 1px solid;
  width:40px;
  height:40px;
  margin:10px;
  position: fixed;
  z-index:10000;
  transform: translate(-50%,-50%);
  border-radius:50%;
  transition:.3s all ease;
  pointer-events: none;
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

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#222;
  
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
.fullvh{
  padding-top:10vh;
  min-height: 100vh;
  height: auto;
  padding: 0;
  margin:0;
  background:transparent;
  position: relative;
  z-index: 2;
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
.text-dark-cyan {
    color: #0aa;
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
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
.nightmode{
.fullvh{
  background-color: #ddd;
  *{
    color:#000 !important;
  }
  .work-card{
    background-color: white !important;
    .box-shadow {
    box-shadow: 0px 0px 3px #555;
    ;
}
}
.logo-main{
  filter: brightness(0);
}
.box-shadow {
    box-shadow: 0px 0px 3px #555;
    ;
}
.page{
.box{
  background: #ddd;
}
}

}

}

///night mode button
#nightmode{
  position: fixed;
  top:-15%;
  right: -7%;
  z-index:1000;
  transform: scale(.2);
}
@media only screen and (max-width: 860px) {
#nightmode{
  position: fixed;
  top:-5%;
  right: -10%;
  z-index:1000;
  transform: scale(.2);
}}

.switch__background,
.switch__background:before,
.switch__background:after {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.switch {
  width: 300px;
  height: 140px;
  display: block;
  position: relative;
  margin: 50px auto;
}
.switch__background {
  border-radius: 70px;
  -webkit-box-shadow: 0 35px 70px -16px rgba(32,15,55,0.3);
  box-shadow: 0 35px 70px -16px rgba(32,15,55,0.3);
  -webkit-transition: box-shadow 0.8s;
  -moz-transition: box-shadow 0.8s;
  -o-transition: box-shadow 0.8s;
  -ms-transition: box-shadow 0.8s;
  transition: box-shadow 0.8s;
  overflow: hidden;
}
.switch__background:before {
  content: '';
  background: -webkit-linear-gradient(#200f37, #272065);
  background: -moz-linear-gradient(#200f37, #272065);
  background: -o-linear-gradient(#200f37, #272065);
  background: -ms-linear-gradient(#200f37, #272065);
  background: linear-gradient(#200f37, #272065);
  border-radius: 70px;
  -webkit-transition: opacity 0.8s;
  -moz-transition: opacity 0.8s;
  -o-transition: opacity 0.8s;
  -ms-transition: opacity 0.8s;
  transition: opacity 0.8s;
  overflow: hidden;
  z-index: -2;
}
.switch__background:after {
  content: '';
  opacity: 0;
  background: -webkit-linear-gradient(left, #21d2f2, #b0fff8);
  background: -moz-linear-gradient(left, #21d2f2, #b0fff8);
  background: -o-linear-gradient(left, #21d2f2, #b0fff8);
  background: -ms-linear-gradient(left, #21d2f2, #b0fff8);
  background: linear-gradient(to right, #21d2f2, #b0fff8);
  border-radius: 70px;
  -webkit-transition: opacity 0.8s;
  -moz-transition: opacity 0.8s;
  -o-transition: opacity 0.8s;
  -ms-transition: opacity 0.8s;
  transition: opacity 0.8s;
  z-index: -2;
}
.switch__toggle {
  content: '';
  height: 124px;
  width: 124px;
  position: relative;
  display: block;
  top: 8px;
  left: 8px;
  background: #fff;
  border-radius: 100%;
  -webkit-box-shadow: inset 8px -8px 0 #f8e3ef, 0 0 93.33333333333333px rgba(255,255,255,0.65);
  box-shadow: inset 8px -8px 0 #f8e3ef, 0 0 93.33333333333333px rgba(255,255,255,0.65);
  -webkit-transition: left 0.8s, box-shadow 0.8s;
  -moz-transition: left 0.8s, box-shadow 0.8s;
  -o-transition: left 0.8s, box-shadow 0.8s;
  -ms-transition: left 0.8s, box-shadow 0.8s;
  transition: left 0.8s, box-shadow 0.8s;
  overflow: hidden;
  cursor: pointer;
}
.switch__toggle:before,
.switch__toggle:after {
  content: '';
  height: 90%;
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  opacity: 0;
  -webkit-transition: transition 0.8s, opacity 0.8s;
  -moz-transition: transition 0.8s, opacity 0.8s;
  -o-transition: transition 0.8s, opacity 0.8s;
  -ms-transition: transition 0.8s, opacity 0.8s;
  transition: transition 0.8s, opacity 0.8s;
  background: rgba(255,255,255,0.65);
  filter: blur(8px);
}
.switch__toggle:before {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  -moz-transform: translate(-50%, -50%) rotate(45deg);
  -o-transform: translate(-50%, -50%) rotate(45deg);
  -ms-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
.switch__toggle:after {
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.switch__moon {
  width: 28px;
  height: 28px;
  display: block;
  position: absolute;
  left: 40%;
  top: 35%;
  background: -webkit-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -moz-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -o-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -ms-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: linear-gradient(to bottom left, #f8e3ef, rgba(248,227,239,0));
  -webkit-box-shadow: 28px -28px 0 -8px rgba(248,227,239,0.5);
  box-shadow: 28px -28px 0 -8px rgba(248,227,239,0.5);
  border-radius: 100%;
  -webkit-transition: -webkit-transform 0.8s, opacity 0.8s;
  -moz-transition: -moz-transform 0.8s, opacity 0.8s;
  -o-transition: -o-transform 0.8s, opacity 0.8s;
  -ms-transition: -ms-transform 0.8s, opacity 0.8s;
  transition: transform 0.8s, opacity 0.8s;
}
.switch__moon:before {
  content: '';
  width: 23px;
  height: 23px;
  display: block;
  position: absolute;
  left: -70%;
  top: 195%;
  background: -webkit-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -moz-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -o-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -ms-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: linear-gradient(to bottom left, #f8e3ef, rgba(248,227,239,0));
  -webkit-box-shadow: 23px -23px 0 -8px rgba(248,227,239,0.5);
  box-shadow: 23px -23px 0 -8px rgba(248,227,239,0.5);
  border-radius: 100%;
  -webkit-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -o-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  transform: rotate(-60deg);
}
.switch__moon:after {
  content: '';
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  left: 190%;
  top: 55%;
  background: -webkit-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -moz-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -o-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: -ms-linear-gradient(top right, #f8e3ef, rgba(248,227,239,0));
  background: linear-gradient(to bottom left, #f8e3ef, rgba(248,227,239,0));
  -webkit-box-shadow: 35px -35px 0 -8px rgba(248,227,239,0.5);
  box-shadow: 35px -35px 0 -8px rgba(248,227,239,0.5);
  border-radius: 100%;
}
.switch__stars {
  width: 8px;
  height: 8px;
  display: block;
  position: absolute;
  left: 60%;
  top: 35%;
  background: #fff;
  -webkit-box-shadow: 24px -24px 0 -3px #fff;
  box-shadow: 24px -24px 0 -3px #fff;
  filter: blur(0.5px);
  border-radius: 100%;
  -webkit-transition: -webkit-transform 0.8s, opacity 0.8s;
  -moz-transition: -moz-transform 0.8s, opacity 0.8s;
  -o-transition: -o-transform 0.8s, opacity 0.8s;
  -ms-transition: -ms-transform 0.8s, opacity 0.8s;
  transition: transform 0.8s, opacity 0.8s;
}
.switch__stars:before {
  content: '';
  width: 7px;
  height: 7px;
  display: block;
  position: absolute;
  left: 700%;
  top: 560%;
  background: #fff;
  -webkit-box-shadow: 21px -21px 0 -3px #fff;
  box-shadow: 21px -21px 0 -3px #fff;
  filter: blur(0.5px);
  border-radius: 100%;
  -webkit-transform: rotate(-75deg);
  -moz-transform: rotate(-75deg);
  -o-transform: rotate(-75deg);
  -ms-transform: rotate(-75deg);
  transform: rotate(-75deg);
  -webkit-transition: -webkit-transform 0.8s, opacity 0.8s;
  -moz-transition: -moz-transform 0.8s, opacity 0.8s;
  -o-transition: -o-transform 0.8s, opacity 0.8s;
  -ms-transition: -ms-transform 0.8s, opacity 0.8s;
  transition: transform 0.8s, opacity 0.8s;
}
.switch__stars:after {
  content: '';
  height: 5px;
  width: 5px;
  position: absolute;
  left: 200%;
  top: 260%;
  opacity: 0;
  background: -webkit-linear-gradient(left, #fff, rgba(255,255,255,0));
  background: -moz-linear-gradient(left, #fff, rgba(255,255,255,0));
  background: -o-linear-gradient(left, #fff, rgba(255,255,255,0));
  background: -ms-linear-gradient(left, #fff, rgba(255,255,255,0));
  background: linear-gradient(to right, #fff, rgba(255,255,255,0));
  filter: blur(0.5px);
  border-radius: 100%;
  -webkit-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  -moz-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  -o-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  -ms-animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation: falling-stars 6.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  -webkit-animation-delay: 3.2s;
  -moz-animation-delay: 3.2s;
  -o-animation-delay: 3.2s;
  -ms-animation-delay: 3.2s;
  animation-delay: 3.2s;
}
.switch__clouds {
  height: 28px;
  width: 28px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: -84px;
  display: block;
  -webkit-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -ms-transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 50% 50% 0 50%;
}
.switch__clouds:before,
.switch__clouds:after {
  content: '';
  height: 23px;
  width: 23px;
  background: #fff;
  position: absolute;
  border-radius: 50% 50% 0 50%;
  left: -33%;
  bottom: 0;
  -webkit-box-shadow: inset 4px -2px 0 #f6f8f8;
  box-shadow: inset 4px -2px 0 #f6f8f8;
}
.switch__clouds:after {
  height: 21px;
  width: 21px;
  left: auto;
  right: -30%;
  border-radius: 100%;
}
.switch__input {
  display: none;
}
.switch__input:checked + .switch__background {
  -webkit-box-shadow: 0 35px 70px -16px rgba(33,210,242,0.3);
  box-shadow: 0 35px 70px -16px rgba(33,210,242,0.3);
}
.switch__input:checked + .switch__background:before {
  opacity: 0;
}
.switch__input:checked + .switch__background:after {
  opacity: 1;
}
.switch__input:checked + .switch__background .switch__toggle {
  left: 168px;
  -webkit-box-shadow: inset 0 0 0.1px #fff, 0 0 32px #fff;
  box-shadow: inset 0 0 0.1px #fff, 0 0 32px #fff;
  -webkit-animation: overlay 0s forwards;
  -moz-animation: overlay 0s forwards;
  -o-animation: overlay 0s forwards;
  -ms-animation: overlay 0s forwards;
  animation: overlay 0s forwards;
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  -o-animation-delay: 0.4s;
  -ms-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.switch__input:checked + .switch__background .switch__toggle:before,
.switch__input:checked + .switch__background .switch__toggle:after {
  opacity: 1;
  -webkit-transition-delay: 0.4s;
  -moz-transition-delay: 0.4s;
  -o-transition-delay: 0.4s;
  -ms-transition-delay: 0.4s;
  transition-delay: 0.4s;
}
.switch__input:checked + .switch__background .switch__toggle:before {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  -moz-transform: translate(-50%, -50%) rotate(45deg);
  -o-transform: translate(-50%, -50%) rotate(45deg);
  -ms-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
  -webkit-animation: spin-before 12.8s linear infinite;
  -moz-animation: spin-before 12.8s linear infinite;
  -o-animation: spin-before 12.8s linear infinite;
  -ms-animation: spin-before 12.8s linear infinite;
  animation: spin-before 12.8s linear infinite;
}
.switch__input:checked + .switch__background .switch__toggle:after {
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-animation: spin-after 12.8s linear infinite;
  -moz-animation: spin-after 12.8s linear infinite;
  -o-animation: spin-after 12.8s linear infinite;
  -ms-animation: spin-after 12.8s linear infinite;
  animation: spin-after 12.8s linear infinite;
}
.switch__input:checked + .switch__background .switch__moon {
  opacity: 0;
  -webkit-transform: translate(-50%, 100%) rotate(30deg);
  -moz-transform: translate(-50%, 100%) rotate(30deg);
  -o-transform: translate(-50%, 100%) rotate(30deg);
  -ms-transform: translate(-50%, 100%) rotate(30deg);
  transform: translate(-50%, 100%) rotate(30deg);
}
.switch__input:checked + .switch__background .switch__stars {
  opacity: 0;
  -webkit-transform: translateX(-47px);
  -moz-transform: translateX(-47px);
  -o-transform: translateX(-47px);
  -ms-transform: translateX(-47px);
  transform: translateX(-47px);
}
.switch__input:checked + .switch__background .switch__stars:before {
  opacity: 0;
  -webkit-transform: translateX(-35px);
  -moz-transform: translateX(-35px);
  -o-transform: translateX(-35px);
  -ms-transform: translateX(-35px);
  transform: translateX(-35px);
}
.switch__input:checked + .switch__background .switch__stars:after {
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  -ms-animation: none;
  animation: none;
}
.switch__input:checked + .switch__background .switch__clouds {
  -webkit-transform: translateX(150px);
  -moz-transform: translateX(150px);
  -o-transform: translateX(150px);
  -ms-transform: translateX(150px);
  transform: translateX(150px);
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  -ms-transition-delay: 0.2s;
  transition-delay: 0.2s;
  -webkit-animation: cloud-move 8s linear infinite;
  -moz-animation: cloud-move 8s linear infinite;
  -o-animation: cloud-move 8s linear infinite;
  -ms-animation: cloud-move 8s linear infinite;
  animation: cloud-move 8s linear infinite;
  -webkit-animation-delay: 1.6s;
  -moz-animation-delay: 1.6s;
  -o-animation-delay: 1.6s;
  -ms-animation-delay: 1.6s;
  animation-delay: 1.6s;
}
.switch__input:checked + .switch__background .switch__clouds:before,
.switch__input:checked + .switch__background .switch__clouds:after {
  -webkit-animation: cloud-move 8s linear infinite;
  -moz-animation: cloud-move 8s linear infinite;
  -o-animation: cloud-move 8s linear infinite;
  -ms-animation: cloud-move 8s linear infinite;
  animation: cloud-move 8s linear infinite;
  -webkit-animation-delay: 1.6s;
  -moz-animation-delay: 1.6s;
  -o-animation-delay: 1.6s;
  -ms-animation-delay: 1.6s;
  animation-delay: 1.6s;
}
@-moz-keyframes overlay {
  0% {
    overflow: hidden;
  }
  100% {
    overflow: visible;
  }
}
@-webkit-keyframes overlay {
  0% {
    overflow: hidden;
  }
  100% {
    overflow: visible;
  }
}
@-o-keyframes overlay {
  0% {
    overflow: hidden;
  }
  100% {
    overflow: visible;
  }
}
@keyframes overlay {
  0% {
    overflow: hidden;
  }
  100% {
    overflow: visible;
  }
}
@-moz-keyframes spin-before {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -o-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(405deg);
    -moz-transform: translate(-50%, -50%) rotate(405deg);
    -o-transform: translate(-50%, -50%) rotate(405deg);
    -ms-transform: translate(-50%, -50%) rotate(405deg);
    transform: translate(-50%, -50%) rotate(405deg);
  }
}
@-webkit-keyframes spin-before {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -o-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(405deg);
    -moz-transform: translate(-50%, -50%) rotate(405deg);
    -o-transform: translate(-50%, -50%) rotate(405deg);
    -ms-transform: translate(-50%, -50%) rotate(405deg);
    transform: translate(-50%, -50%) rotate(405deg);
  }
}
@-o-keyframes spin-before {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -o-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(405deg);
    -moz-transform: translate(-50%, -50%) rotate(405deg);
    -o-transform: translate(-50%, -50%) rotate(405deg);
    -ms-transform: translate(-50%, -50%) rotate(405deg);
    transform: translate(-50%, -50%) rotate(405deg);
  }
}
@keyframes spin-before {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -o-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(405deg);
    -moz-transform: translate(-50%, -50%) rotate(405deg);
    -o-transform: translate(-50%, -50%) rotate(405deg);
    -ms-transform: translate(-50%, -50%) rotate(405deg);
    transform: translate(-50%, -50%) rotate(405deg);
  }
}
@-moz-keyframes spin-after {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    -moz-transform: translate(-50%, -50%) rotate(0);
    -o-transform: translate(-50%, -50%) rotate(0);
    -ms-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -moz-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    -ms-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-webkit-keyframes spin-after {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    -moz-transform: translate(-50%, -50%) rotate(0);
    -o-transform: translate(-50%, -50%) rotate(0);
    -ms-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -moz-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    -ms-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-o-keyframes spin-after {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    -moz-transform: translate(-50%, -50%) rotate(0);
    -o-transform: translate(-50%, -50%) rotate(0);
    -ms-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -moz-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    -ms-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes spin-after {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    -moz-transform: translate(-50%, -50%) rotate(0);
    -o-transform: translate(-50%, -50%) rotate(0);
    -ms-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -moz-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    -ms-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-moz-keyframes falling-stars {
  0% {
    width: 50%;
    opacity: 1;
    -webkit-transform: translate(70px, -70px) rotate(-45deg);
    -moz-transform: translate(70px, -70px) rotate(-45deg);
    -o-transform: translate(70px, -70px) rotate(-45deg);
    -ms-transform: translate(70px, -70px) rotate(-45deg);
    transform: translate(70px, -70px) rotate(-45deg);
  }
  5% {
    width: 400%;
    opacity: 1;
  }
  15% {
    -webkit-box-shadow: -100px -30px 0 -3px #fff;
    box-shadow: -100px -30px 0 -3px #fff;
  }
  25%, 100% {
    -webkit-box-shadow: -100px -30px 0 -6px #fff;
    box-shadow: -100px -30px 0 -6px #fff;
    width: 400%;
    opacity: 0;
    -webkit-transform: translate(-70px, 70px) rotate(-45deg);
    -moz-transform: translate(-70px, 70px) rotate(-45deg);
    -o-transform: translate(-70px, 70px) rotate(-45deg);
    -ms-transform: translate(-70px, 70px) rotate(-45deg);
    transform: translate(-70px, 70px) rotate(-45deg);
  }
}
@-webkit-keyframes falling-stars {
  0% {
    width: 50%;
    opacity: 1;
    -webkit-transform: translate(70px, -70px) rotate(-45deg);
    -moz-transform: translate(70px, -70px) rotate(-45deg);
    -o-transform: translate(70px, -70px) rotate(-45deg);
    -ms-transform: translate(70px, -70px) rotate(-45deg);
    transform: translate(70px, -70px) rotate(-45deg);
  }
  5% {
    width: 400%;
    opacity: 1;
  }
  15% {
    -webkit-box-shadow: -100px -30px 0 -3px #fff;
    box-shadow: -100px -30px 0 -3px #fff;
  }
  25%, 100% {
    -webkit-box-shadow: -100px -30px 0 -6px #fff;
    box-shadow: -100px -30px 0 -6px #fff;
    width: 400%;
    opacity: 0;
    -webkit-transform: translate(-70px, 70px) rotate(-45deg);
    -moz-transform: translate(-70px, 70px) rotate(-45deg);
    -o-transform: translate(-70px, 70px) rotate(-45deg);
    -ms-transform: translate(-70px, 70px) rotate(-45deg);
    transform: translate(-70px, 70px) rotate(-45deg);
  }
}
@-o-keyframes falling-stars {
  0% {
    width: 50%;
    opacity: 1;
    -webkit-transform: translate(70px, -70px) rotate(-45deg);
    -moz-transform: translate(70px, -70px) rotate(-45deg);
    -o-transform: translate(70px, -70px) rotate(-45deg);
    -ms-transform: translate(70px, -70px) rotate(-45deg);
    transform: translate(70px, -70px) rotate(-45deg);
  }
  5% {
    width: 400%;
    opacity: 1;
  }
  15% {
    -webkit-box-shadow: -100px -30px 0 -3px #fff;
    box-shadow: -100px -30px 0 -3px #fff;
  }
  25%, 100% {
    -webkit-box-shadow: -100px -30px 0 -6px #fff;
    box-shadow: -100px -30px 0 -6px #fff;
    width: 400%;
    opacity: 0;
    -webkit-transform: translate(-70px, 70px) rotate(-45deg);
    -moz-transform: translate(-70px, 70px) rotate(-45deg);
    -o-transform: translate(-70px, 70px) rotate(-45deg);
    -ms-transform: translate(-70px, 70px) rotate(-45deg);
    transform: translate(-70px, 70px) rotate(-45deg);
  }
}
@keyframes falling-stars {
  0% {
    width: 50%;
    opacity: 1;
    -webkit-transform: translate(70px, -70px) rotate(-45deg);
    -moz-transform: translate(70px, -70px) rotate(-45deg);
    -o-transform: translate(70px, -70px) rotate(-45deg);
    -ms-transform: translate(70px, -70px) rotate(-45deg);
    transform: translate(70px, -70px) rotate(-45deg);
  }
  5% {
    width: 400%;
    opacity: 1;
  }
  15% {
    -webkit-box-shadow: -100px -30px 0 -3px #fff;
    box-shadow: -100px -30px 0 -3px #fff;
  }
  25%, 100% {
    -webkit-box-shadow: -100px -30px 0 -6px #fff;
    box-shadow: -100px -30px 0 -6px #fff;
    width: 400%;
    opacity: 0;
    -webkit-transform: translate(-70px, 70px) rotate(-45deg);
    -moz-transform: translate(-70px, 70px) rotate(-45deg);
    -o-transform: translate(-70px, 70px) rotate(-45deg);
    -ms-transform: translate(-70px, 70px) rotate(-45deg);
    transform: translate(-70px, 70px) rotate(-45deg);
  }
}
@-moz-keyframes cloud-move {
  0% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
  }
  50% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
    box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
  }
  90%, 100% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
  }
}
@-webkit-keyframes cloud-move {
  0% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
  }
  50% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
    box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
  }
  90%, 100% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
  }
}
@-o-keyframes cloud-move {
  0% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
  }
  50% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
    box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
  }
  90%, 100% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
  }
}
@keyframes cloud-move {
  0% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -100px -47px 5px -2px rgba(33,210,242,0);
  }
  50% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
    box-shadow: inset 4px -2px 0 #f6f8f8, -30px -47px 6px -2px #90e8f8;
  }
  90%, 100% {
    -webkit-box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
    box-shadow: inset 4px -2px 0 #f6f8f8, -3px -47px 15px 2px rgba(33,210,242,0);
  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



</style>

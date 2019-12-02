<template>

  <div id="app">
   <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.0/css/mdb.min.css" rel="stylesheet">
    <Navigation/>
    <router-view/>
    
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components:{
    Navigation
  }
}
</script>
<style lang="scss">
*{
  margin:0px;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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



.cube {
  position: fixed;
  
  z-index: 3;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  mix-blend-mode: difference;
  border: solid 1px darken(#0ff, 8%);
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
  
  &:nth-child(2n) {
    border-color: lighten(#0ff, 10%);
  }
  
  &:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  
  &:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  
  &:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  
  &:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  
  &:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(0%, 0%);   
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(100%, 100%); 
    opacity: 0;
  }
}
</style>

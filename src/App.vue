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
import Navigation from '@/components/Navigation.vue'
import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
export default {
  components:{
    Navigation
  },
  methods:{
      
  },
  mounted(){
      // 参考 https://threejs.org/examples/?q=particle#webgl_points_billboards

let camera
let scene
let renderer
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2

init()
animate()

function init () {
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
  camera.position.z = 500

  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x00ffff, 0.001)

  const geometry = new THREE.BufferGeometry()
  const vertices = []
  const size = 2000

  for ( let i = 0; i < 1000; i ++ ) {
    const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
    const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
    const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

    vertices.push(x, y, z)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  material = new THREE.PointsMaterial({
    size: 2,
    color: 0xffffff,
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.querySelector('.background').appendChild(renderer.domElement)

  document.querySelector('.background').style.touchAction = 'none'
  document.querySelector('.background').addEventListener('pointermove', onPointerMove)
  window.addEventListener('resize', onWindowResize)
}

function onWindowResize () {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onPointerMove (event) {
  mouseX = event.clientX - windowHalfX 
  mouseY = event.clientY - windowHalfY
}

function animate () {
  requestAnimationFrame(animate)
  render()
}

function render () {
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
  camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
  scene.rotation.x += 0.001
  scene.rotation.y += 0.002
}

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

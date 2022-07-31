<template>
  <div class="home fullvh center ">
   <div class="container">
            <div class="row">
                <div class="col-sm-6 text-left center text-dark-cyan">
                   
                    <div class="center">
                         
                        <span class="text-light ">
                        <h1 class="">Hi, I am</h1>
                        <h1 class="text-dark-cyan">Abhishek Bhardwaj</h1>
                        <h1>Web Developer</h1>
                        </span>
                        
                        <div class="center-hor m-auto">
                       <router-link to="/contact" class="btn text-white btn-sm waves-effect cyan">Contact Me</router-link>
                       <router-link to="/work" class="btn btn-outline-cyan text-white btn-sm waves-effect cyan">Projects</router-link>
                       <a target=__blank class="btn btn-outline-cyan text-white btn-sm waves-effect cyan" href="https://bhardwaj.netlify.app/resume.pdf"> <i class="fas fa-download"></i> Download Resume</a>
                    </div>
                    </div>
               
                   
                    

                </div>
                <div class="col-sm-6 center hide-on-mobile" @mousemove="mouseinvert($event)">
                    <img class="logo-main"  v-bind:style="dropshades" src="../assets/logo.svg" alt="">
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            x:'',
            y:''
        }
    },
    methods:{
        mouseinvert(event){
            var x3d,y3d;
            x3d = event.clientX-(window.innerWidth * 0.5);
            y3d = event.clientY-(window.innerHeight * 0.5);
            x3d = x3d * 0.1;
            y3d = y3d * 0.1;
            this.x = x3d;
            this.y = y3d;
        }
    },
    computed:{
        dropshades(){
            return 
          'drop-shadow('+this.x+'px '+this.y+'px 1px rgba('+this.x * 2','+this.y * 2+','+this.x * this.y * 2'))'
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 4','+this.y * 3+','+this.x * this.y * 3'))'
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 6','+this.y * 4+','+this.x * this.y * 4'))'
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 8','+this.y * 5+','+this.x * this.y * 5'))'
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 10','+this.y * 6+','+this.x * this.y * 6'))'
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 12','+this.y * 7+','+this.x * this.y * 7'))'
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 14','+this.y * 8+','+this.x * this.y * 8'))'
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 16','+this.y * 9+','+this.x * this.y * 9'))';
        }
    }
}
</script>
<style scoped>
h1{
    font-weight: bold;
}
</style>

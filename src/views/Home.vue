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
                <div class="col-sm-6 center hide-on-mobile" @mouseleave="{this.active=false;}"  @mousemove="mouseinvert($event)" >
                    <img class="logo-main" ref="logo"  v-bind:style="[this.active ? {dropshades} : {resetdropshades}] " style="filter:none;" src="../assets/logo.svg" alt="">
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
            y:'',
            w:'',
            h:'',
            active:false
        }
    },
    mounted() {
        this.w = this.$refs.logo.clientWidth;
        this.h =this.$refs.logo.clientHeight;
    },
    methods:{
        mouseinvert(event){
            var x3d,y3d;
            var w ,h;
            x3d = event.clientX-(w * 0.5);
            y3d = event.clientY-(h * 0.5);
            x3d = x3d * 0.1;
            y3d = y3d * 0.1;
            this.x = -x3d;
            this.y = -y3d;
            this.active=true;
        },
        
    },
    computed:{
        dropshades(){
        
    return ('filter:drop-shadow('+this.x+'px '+this.y+'px 1px rgba('+this.x * 2+','+this.y * 2+','+this.x * this.y * 2+'))'+
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 4+','+this.y * 3+','+this.x * this.y * 3+'))'+
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 6+','+this.y * 4+','+this.x * this.y * 4+'))'+
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 8+','+this.y * 5+','+this.x * this.y * 5+'))'+
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 10+','+this.y * 6+','+this.x * this.y * 6+'))'+
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 12+','+this.y * 7+','+this.x * this.y * 7+'))'+
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 14+','+this.y * 8+','+this.x * this.y * 8+'))'+
          'drop-shadow('+this.x+'px '+this.y+'px 0px rgba('+this.x * 16+','+this.y * 9+','+this.x * this.y * 9+'))');
        },
        resetdropshades(){
        
    return ('filter:drop-shadow('+0+'px '+0+'px 1px rgba('+0 * 2+','+0 * 2+','+0 * 0 * 2+'))'+
          'drop-shadow('+0+'px '+0+'px 0px rgba('+0 * 4+','+0 * 3+','+0 * 0 * 3+'))'+
          'drop-shadow('+0+'px '+0+'px 0px rgba('+0 * 6+','+0 * 4+','+0 * 0 * 4+'))'+
          'drop-shadow('+0+'px '+0+'px 0px rgba('+0 * 8+','+0 * 5+','+0 * 0 * 5+'))'+
          'drop-shadow('+0+'px '+0+'px 0px rgba('+0 * 10+','+0 * 6+','+0 * 0 * 6+'))'+
          'drop-shadow('+0+'px '+0+'px 0px rgba('+0 * 12+','+0 * 7+','+0 * 0 * 7+'))'+
          'drop-shadow('+0+'px '+0+'px 0px rgba('+0 * 14+','+0 * 8+','+0 * 0 * 8+'))'+
          'drop-shadow('+0+'px '+0+'px 0px rgba('+0 * 16+','+0 * 9+','+0 * 0 * 9+'))');
        }
    }
}
</script>
<style scoped>
h1{
    font-weight: bold;
}
.logo-main{
    
}
</style>

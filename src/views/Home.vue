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
                       <a  class="btn text-white btn-sm waves-effect cyan" href="../assets/logo.svg"> <i class="fas fa-download"></i> Download Resume</a>
                    </div>
                    </div>
               
                   
                    

                </div>
                <div class="col-sm-6 center hide-on-mobile">
                    <img class="logo-main" src="../assets/logo.svg" alt="">
                </div>
            </div>
        </div>
  </div>
</template>
<style scoped>
h1{
    font-weight: bold;
}
</style>

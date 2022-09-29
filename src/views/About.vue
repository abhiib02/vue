<template>
  <div class="about fullvh center">
   <div class="container">
            <div class="row">
                <div class="col-md-6 center">
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="abhishek-bhardwaj-191b9784" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/abhishek-bhardwaj-191b9784?trk=profile-badge"></a></div>
              
              
                </div>
                <div class="col-md-6 text-left center-ver text-dark-cyan ">
                    
                    <div class="">
                        
                        <h1 class="text-dark-cyan">About Me</h1>
                            
                            <span class='text-white '>My name is Abhishek Bhardwaj and I am a
                            <br><b class="text-dark-cyan">Website Designer and Developer,</b>
                            I have made several websites and  
                            <router-link to="/work">projects</router-link> for myself and for my company in which I worked and as a freelancer too.
                            <br> I also have a polytechnic diploma in 
                            <br><b class="text-dark-cyan">Electronics and Communication Engineering</b> 
                            which was completed in the year 2017, I also have a Degree of 
                            <br><b class="text-dark-cyan">Bachelors of Computer Application</b>
                            from IGNOU in the year 2018, I am a tech enthusiast who wants to know about new technologies but is more interested in website development As a hobby, I like to play video games and listening songs, I will reply to you soon
                            </span>
                    </div>
                   
                </div>
                
            </div>

        </div>
  </div>
</template>
<script>
//import Axios from 'axios'
export default {
    data(){
        return {
            imageUrl:'me.jpg'
        }
    },
    mounted(){
       /* Axios.get('https://www.instagram.com/abhiib02/?__a=1',{
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then((response)=>{
            this.imageUrl = response.data.graphql.user.profile_pic_url;
        });*/
         const plugin = document.createElement("script");
            plugin.setAttribute(
            "src",
            "https://platform.linkedin.com/badges/js/profile.js"
            );
            plugin.async = true;
            document.head.appendChild(plugin);
  }

    }

</script>
<style lang="scss" scoped>
  .icon-o {
    width: 20px;
    height: 20px;
}
.box-shadow {
    box-shadow: 0px 0px 30px #0ff;
}
h1{
    font-weight: bold;
}
</style>
<template>
  <div class="about fullvh center">
   <div class="container">
            <div class="row">
                <div class="col-md-6 center">
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="abhishek-bhardwaj-191b9784" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/abhishek-bhardwaj-191b9784?trk=profile-badge"></div>
              
                </div>
                <div class="col-md-6 text-left center-ver text-dark-cyan ">
                    
                    <div class="">
                        
                        <h1 class="text-dark-cyan">About Me</h1>
                            
                            <span class='text-white '>My name is Abhishek Bhardwaj and i am 
                                {{ new Date().getFullYear()-1995 }} Years old, i have a polytechnic diploma in <b>electronics and communication engineering</b> which was completed in the year of 2017, i also have a Degree of <b>Bachelors of
                            computer application</b> from IGNOU in the year of 2018, i am a tech enthusiast who want to know about new technologies but more interested in <b>website designing and development</b>,i also maintain a facebook page with around thousand
                            likes i also manage tech blog mention inside projects, i like to play video game and listening songs,to Know More About me there are navigation links.</span>
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
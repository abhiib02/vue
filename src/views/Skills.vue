<template>
    <div class="fullvh center" @mousemove="mouseinvert($event)">
        <div class="container" >
            <div class="row">
                <div class="col-md-12 text-left center-ver ">
                    
                    <div class="">
                      
                        <h1 class="text-dark-cyan ">Skills &amp; Experience</h1>
                        
                     <span class='text-white '>
                            These are the technologies i have worked with.
                            <br>
                            All these technologies consist of frontend technologies like (HTML,CSS,JAVASCRIPT)
                            Backend technologies like (PHP,ASP.NET) and Database technology(MySQL).<br>
                            I am familiar with some useful framework like FrontEnd Framework
                            (Bootstrap,Bulma,MaterializeCSS),
                            and BackEnd Framework (Codeigniter,Laravel).
                        </span>
                    </div>
                    

                </div>

<!-- end of /.coloumn -->

                    <!--<div id="tagcloud">
                        <ul>
                            <li><img class="icons-2 box-shadow" src="https://img.icons8.com/color/2x/c-programming.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://img.icons8.com/color/2x/c-plus-plus-logo.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://img.icons8.com/color/2x/c-sharp-logo-2.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://img.icons8.com/color/2x/java-coffee-cup-logo.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://img.icons8.com/color/2x/html-5.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://img.icons8.com/color/2x/css3.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1150px-MySQL.svg.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://www.prchecker.info/free-icons/128x128/php_128_px.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://img.icons8.com/color/2x/javascript.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://cdn1.iconfinder.com/data/icons/logos-3/304/codeigniter-icon-512.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://formvalidation.io/branches/bulma.svg" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://www.consolebit.com/media/technologies/logo-materialize.png" alt=""></li>
                            <li><img class="icons-2 box-shadow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/220px-Laravel.svg.png" alt=""></li>
                        </ul>
                    </div>-->
                
            </div>
        </div>
        
        <div class="container" >
            <hr width="100%" height="2px">
<div class="page" v-bind:style="invertranslate">
    <div v-for="(skill,index) in skills" v-bind:key="index"  class="box"  >
        <img :src="skill.techlogo" width="50px" height="50px"  alt="">
        <p style="font-size:.7em" >{{skill.tech}}</p>
    </div>
    
  </div>
  </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            skills:[
                {   
                    techlogo:'https://img.icons8.com/color/2x/html-5.png',
                    tech:'HTML',
                },
                {   
                    techlogo:'https://img.icons8.com/color/2x/css3.png',
                    tech:'CSS3',
                },
                {   
                    techlogo:'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
                    tech:'Sass (SCSS)',
                },
                {   
                    techlogo:'https://img.icons8.com/color/2x/javascript.png',
                    tech:'Javascript',
                },
                {   
                    techlogo:'https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png',
                    tech:'Jquery',
                },
                {   
                    techlogo:'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
                    tech:'Vue JS',
                },
                {   
                    techlogo:'https://www.php.net/images/logos/new-php-logo.svg',
                    tech:'PHP',
                },
                {   
                    techlogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/220px-Laravel.svg.png',
                    tech:'Laravel',
                },
                {   
                    techlogo:'https://cdn1.iconfinder.com/data/icons/logos-3/304/codeigniter-icon-512.png',
                    tech:'CodeIgniter',
                },
                {   
                    techlogo:'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
                    tech:'MySQL',
                },
                {   
                    techlogo:'http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png',
                    tech:'Bootstrap',
                },
                {   
                    techlogo:'https://bulma.io/assets/Bulma%20Icon.png',
                    tech:'Bulma.io',
                },
                {   
                    techlogo:'https://www.consolebit.com/media/technologies/logo-materialize.png',
                    tech:'Materialize CSS',
                },
                
                {   
                    techlogo:'https://uploads-ssl.webflow.com/613513981b0efaf850830620/630278a964d1f18269a94cd2_figma.svg',
                    tech:'Figma',
                },
                
                {   
                    techlogo:'https://img.icons8.com/color/2x/c-programming.png',
                    tech:'C',
                },
                {   
                    techlogo:'https://img.icons8.com/color/2x/java-coffee-cup-logo.png',
                    tech:'Java',
                },
                
            ],
            x:'',
            y:''
        }
    },
    methods:{
        mouseinvert(event){
        
            var x3d,y3d;
            x3d = event.clientX-(window.innerWidth * 0.5);
            y3d = event.clientY-(window.innerHeight * 0.5);
            x3d = x3d * 0.2;
            y3d = y3d * 0.2;
            this.x = x3d;
            this.y = y3d;
        }
    },
    computed:{
        invertranslate(){
            return 'transform:translate('+-this.x+'px,'+-this.y+'px);';
        }
    }
}
</script>
<style lang="scss" scoped>
h1{
    font-weight: bold;
}
.page{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
  transform-origin:preserve-3d;
  perspective:500px;

}
.box{
  transition:width .5s ease,height .5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:#0ff;
}
.box{
  width:100px;
  height:100px;
  background:#111;
  transition: all .2s ease;
  &:hover{
     transform:scale(1.2);
     background:#0ff8;
    color:#fff;
    
  }
}

    .icons-2 {
        width: 70px;
        height: 70px;
        padding: 10px;
        border-radius: 50%;
        background-image: linear-gradient(to top, #0ff, transparent);
        transition: all 1s ease;
        transform-origin: center;

        &:hover {
            transform: scale(2);
        }
    }

    .skills {
        text-align: right;
        margin-bottom: 5px;
         box-shadow: 0px 0px 10px #0ff;
        padding:3px;
        color: white;
    }
    p{
        margin:0;
        
    }
    @keyframes slideInLeft {
        0% {
            transform: scaleX(0);
            transform-origin: left;
        }

        100% {
            transform: scaleX(1);
            transform-origin: left;
        }
    }

    .html {
        width: 90%;
        border-radius: 10px;
        background-color: #E44D26;
        animation: slideInLeft 1s ease;
    }

    .css {
        width: 80%;
        border-radius: 10px;
        background-color: #379AD6;
        animation: slideInLeft 1s ease;
    }

    .js {
        width: 65%;
        border-radius: 10px;
        background-color: #F0DB4F;
        animation: slideInLeft 1s ease;
    }
    .Vue{
        width: 65%;
        border-radius: 10px;
        background-image: linear-gradient(to left,#34495E,#41B883);
        animation: slideInLeft 1s ease;
    }
    .ci{
        width: 65%;
        border-radius: 10px;
        background-color: #EE4323;
        animation: slideInLeft 1s ease;
    }
    .lara{
        width: 65%;
        border-radius: 10px;
        background-color: #F35045;
        animation: slideInLeft 1s ease;
    }
    .php {
        width: 60%;
        border-radius: 10px;
        background-color: #8993BE;
        animation: slideInLeft 1s ease;
    }
</style>
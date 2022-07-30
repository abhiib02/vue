<template>

  <div class="work fullvh ">
    <div class="container">
      <Carousel :projects="projects"></Carousel>
      
    </div>
    
  </div>







</template>
<script>
import Carousel from "@/components/Carousel.vue"
  export default {
    components:{
    Carousel
  },
    data() {
      return {
        projects: [
          {
            Name: 'Exhaustbaba.com',
            Type: 'Bike Exhaust and Silencer Trader',
            Tech: ['vuejs', 'css3', 'js'],
            Image: 'eb.png',
            Link: 'https://exhaustbaba.com/',
            Status: 'Online',
            Published : "Jun 2022"
          },
        {
            Name: 'voyagersbeat.com',
            Type: 'Travel Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'vb.png',
            Link: 'https://voyagersbeat.com',
            Status: 'Online',
            Published : "Mar 2019 Redesigned 2022"
          },
          {
              Name: 'Ultra Lite Slider',
              Type: 'Javacript Practice (Personal Side Project)',
              Tech: ['html5', 'css3', 'js'],
              Image: 'uls.jpg',
              Link: 'https://abhiib02.github.io/Ultra_Lite_Slider/',
              Status: 'Online',
              Published : "Feb 2022"
            },
           {
            Name: 'Elliot Waves Calculator',
            Type: 'Investment and Trading Tool',
            Tech: ['html5', 'css3', 'js'],
            Image: 'ewc.png',
            Link: 'https://abhiib02.github.io/elliot_wave_calc/',
            Status: 'Online',
            Published : "Dec 2021"
          },
          {
            Name: 'V3 Plus Switches',
            Type: 'Electrical Accessories Manufacturing Company',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'v3.png',
            Link: 'http://v3plusswitches.com/',
            Status: 'Offline',
            Published : "Jun 2021"
          },
          {
            Name: 'Daikichi consulting Service',
            Type: 'Consultancy for india and japan',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'daikichi.png',
            Link: 'https://daikichiconsulting.com/',
            Status: 'Online',
            Published : "Jan 2021"
          },
           {
            Name: 'Laxmicart.com',
            Type: 'Online Book Seller E-Commerce',
            Tech: ['html5', 'css3', 'js','wordpress'],
            Image: 'laxmi.png',
            Link: 'https://laxmicart.com/',
            Status: 'Online',
            Published : "Jan 2021"
          },
          {
            Name: 'Simplest Carousel',
            Type: 'Javacript Practice (Personal Side Project)',
            Tech: ['html5', 'css3', 'js','vuejs'],
            Image: 'carousal.jpg',
            Link: 'https://abhiib02.github.io/Simplest-Carousal/',
            Status: 'Online',
            Published : "Dec 2020"
          },
          {
            Name: 'Woolman Agencies',
            Type: 'Textile Machinery Distributor Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'woolman.jpg',
            Link: 'https://woolman.in',
            Status: 'Offline',
            Published : "Nov 2020"
          },
          {
            Name: 'Tic Tac Toe',
            Type: 'Vue Web App (Personal Side Project)',
            Tech: ['html5', 'css3', 'vuejs'],
            Image: 'tictactoe.png',
            Link: 'https://yw5rd.csb.app/',
            Status: 'Online',
            Published : "Nov 2020"
          },
          {
            Name: 'Polar Auto and Engineering Industries',
            Type: 'Seating manufacturing company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'polarauto.png',
            Link: 'https://polarauto.in',
            Status: 'Offline',
            Published : "Oct 2020"
          },
          {
            Name: 'Sachin Packaging',
            Type: 'Android App',
            Tech: ['html5', 'css3', 'js', 'vuejs'],
            Image: 'splogo.png',
            Link: '',
            Status: 'Offline',
            Published : "May 2020"
          },
          {
            Name: 'gangmy.design',
            Type: 'Graphic Designer Portfolio Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'gang.jpg',
            Link: 'http://gangmy.design/',
            Status: 'Offline',
            Published : "Oct 2020"
          },
          {
            Name: 'unitedchemical.in',
            Type: 'Chemicle Business Company Website',
            Tech: ['html5', 'css3', 'js'],
            Image: 'uci.jpg',
            Link: 'http://unitedchemical.in/',
            Status: 'Online',
            Published : "Oct 2019"
          },
          {
            Name: 'madanfashion.in',
            Type: 'A Clothing Company Website',
            Tech: ['html5', 'css3', 'js', 'php','wordpress'],
            Image: 'mf.jpg',
            Link: 'http://madanfashion.in/',
            Status: 'Offline',
            Published : "Sep 2019"
          },
          {
            Name: 'Victory World Tourism',
            Type: 'Travel Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'vwt.jpg',
            Link: 'http://vwt.infinityfreeapp.com/',
            Status: 'Online',
            Published : "Sep 2019"
          },
          
          {
            Name: 'woodcraftint.com',
            Type: 'Interior Designing Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'wci.jpg',
            Link: 'https://www.woodcraftint.com/',
            Status: 'Online',
            Published : "May 2019"
          },
          {
            Name: 'gybindia.in',
            Type: 'Business Consultation Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'gyb.jpg',
            Link: 'https://sitesdemo.netlify.app/gyb/',
            Status: 'Online',
            Published : "May 2019"
          },
          {
            Name: 'backstagemumbai.in',
            Type: 'Modeling and photography Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'bsm.jpg',
            Link: 'https://sitesdemo.netlify.app/backstage/',
            Status: 'Online',
            Published : "April 2019"
          },
          {
            Name: 'dexo.media',
            Type: 'Digital Marketing Agency Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'dexo.jpg',
            Link: 'http://www.dexo.media/',
            Status: 'Offline',
            Published : "April 2019"
          },
          
          {
            Name: 'petitepebble.com',
            Type: 'Business Consultation Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'pp.jpg',
            Link: 'http://www.petitepebble.com/',
            Status: 'Offline',
            Published : "Dec 2018"
          },
          {
            Name: 'scc-education.com',
            Type: 'A Tutor Company Website',
            Tech: ['html5', 'css3', 'blogger'],
            Image: 'scc.jpg',
            Link: 'https://www.scc-education.com/',
            Status: 'Online',
            Published : "Jun 2015"
          },
          {
            Name: 'dynamohack.blogspot.com',
            Type: 'My Old Tips and Tricks Blog',
            Tech: ['html5', 'css3', 'blogger'],
            Image: 'dynamo.jpg',
            Link: 'https://dynamohack.blogspot.com/',
            Status: 'Online',
            Published : "Aug 2013"
          }
        ]
      }
    }
    ,
    methods:{
      fullPath(image){
        return "../assets/"+image ;
      }, 
    }
  }
</script>
<style lang="scss" scoped>
.badge{
  border-radius:50%;
  width:10px;
  height:10px;
  animation: blink-1 3s linear infinite both;
}
.badge:empty {
    display: block;
}
h1{
  font-weight: bold;
  color:#0ee !important;
}
  .relative{
    position: relative;
  }
  .sticky{
   position: sticky;
  top: 50%;
  transform: translateY(-50%);
  }

  .Project_card {
    width: 70%;
    position: relative;
  }
  .pos-lb{
    position:absolute;
    left:2%;bottom:2%;
    font-size: 12px;

  }
  .pos-rb{
    position:absolute;
    right:2%;bottom:2%;
    font-size: 12px;

  }
  hr{
    background:#0ff;
  }

  .card-dark{
     background-color: #111;
     padding: 10px;
  }
  .card-online{
     border-top:3px solid #00c851;
  }
  .card-offline{
     border-top:3px solid #ff3547;
     
  }
  .tl_list {
    display: grid;
    place-items: center;
    list-style: none;
    margin: 0;
    padding:10px;
    .tl_item:nth-child(odd) {
      transform: translateX(-49.3%);
      border-right:#0ff 5px solid;
      padding: 0 15px;
    }
    

    .tl_item:nth-child(even) {
      transform: translateX(49.3%);
    border-left:#0ff 5px solid;
    padding: 0 15px;
    }
  }
    .tech_list{
      display:flex;
      padding:0;
      justify-content: center;
      flex-direction: row;
      .tech_item{
        text-align: left;
        list-style:none;
      }
    }

  .timeline {

    .container {

      width: 50%;

    }

    .left {
      display: flex;
      justify-content: flex-start;
      text-align: left;
      margin-left: 50%;
      border-left: #0ff 5px solid;

    }

    .right {
      display: flex;
      justify-content: flex-end;
      text-align: right;
      margin-right: 50%;
      border-right: #0ff 5px solid;
    }
  }

  @media only screen and (max-width: 860px) {
.Project_card {
    width: 100%;
  }

       .tl_list {
    display: grid;
    place-items: center;
    list-style: none;

    .tl_item:nth-child(odd) {
      transform: translateX(0%);
       border-right:#0ff 0px solid;
       padding: 5px 0;
    }

    .tl_item:nth-child(even) {
      transform: translateX(0%);
       border-left:#0ff 0px solid;
      padding: 5px 0;
    }
  }

    .timeline {

      .container {

        width: 100%;

      }

      .left,
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-left: #0ff 5px solid;
        border-right: #0ff 0px solid;
        flex-direction: column;
      }
    }
  }

  * {
    color: #fff !important;
  }

  .work-card {
    width: 354px;
    background-color: #333 !important;
    color: #fff;
    text-shadow: 0px 0px 10px #0ff !important;
    height: auto;
    margin: 5px;
    box-shadow: 0px 0px 10px #0ff !important;

    hr {
      width: 100%;
      height: 2px;
      background: white;

    }
  }
  @keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
</style>

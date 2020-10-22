<template>

  <div class="work fullvh ">
    <div class="container">
      <div class="row ">

        <div class="col-lg-5 relative text-left  text-dark-cyan">
            <div class="sticky">
          <h1 class="title text-white ">Work</h1>
          



             <span class='text-white  '>
              These are some projects that i have made using the technologies i am familier with,
              the most common is HTML, CSS, BOOTSTRAP, JAVASCRIPT, PHP, CODEIGNITER, LARAVEL
            </span>
          
  </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6">
            <div class="container">
      
      <ul class="tl_list">
        <li class="tl_item Project_card" v-for="(project,index) in projects" :key= index >
          <!-- Card -->
          <div class="card card-dark">

            <!-- Card image -->
            <img class="card-img-top" :src="require('../assets/'+project.Image)" alt="Card image cap">

            <!-- Card content -->
            <div class="card-body">

              <!-- Title -->
              <h5 class="card-title"><a>{{project.Name}}</a>
              <hr>
              </h5>
              <!-- Text -->
              <p class="card-text">{{project.Type}}</p>
              <hr>
              <ul class="tech_list">
                <li class="tech_item" v-for="(tech,index) in project.Tech" :key="index">
                  <i :class="'icon-o fab fa-'+tech"></i>
                  
                </li>
              </ul>
              <div class="pos-lb">
                
                <span v-if="project.Status == 'Online'" class="badge badge-success">
                  {{project.Status}}
                </span>

                <span  v-if="project.Status == 'Offline'" class="badge badge-danger">
                  {{project.Status}}
                </span>
                
              </div>
              <!-- Button -->
              <a :href="project.Link" target="_blank" class="btn btn-outline-cyan text-white btn-sm waves-effect cyan">Visit</a>

            </div>

          </div>
        </li>
      </ul>
    </div>
        </div>
      </div>
    </div>
    
  </div>







</template>
<script>

  export default {
    data() {
      return {
        projects: [
          {
            Name: 'Polar Auto and Engineering Industries',
            Type: 'Seating manufacturing company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'polarauto.png',
            Link: 'https://polarauto.in',
            Status: 'Online'
          },{
            Name: 'Sachin Packaging',
            Type: 'Android App',
            Tech: ['html5', 'css3', 'js', 'vuejs'],
            Image: 'splogo.png',
            Link: '',
            Status: 'Online'
          },
          {
            Name: 'victoryworldtourism.com',
            Type: 'Travel Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'vwt.jpg',
            Link: 'http://victoryworldtourism.com/',
            Status: 'Online'
          },
          {
            Name: 'voyagersbeat.com',
            Type: 'Travel Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'vb.jpg',
            Link: 'https://voyagersbeat.com',
            Status: 'Online'
          },
          {
            Name: 'woodcraftint.com',
            Type: 'Interior Designing Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'wci.jpg',
            Link: 'https://www.woodcraftint.com/',
            Status: 'Online'
          },
          {
            Name: 'backstagemumbai.in',
            Type: 'Interior Designing Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'bsm.jpg',
            Link: 'http://www.backstagemumbai.in/',
            Status: 'Offline'
          },
          {
            Name: 'dexo.media',
            Type: 'Digital Marketing Agency Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'dexo.jpg',
            Link: 'http://www.dexo.media/',
            Status: 'Offline'
          },
          {
            Name: 'gangmy.design',
            Type: 'Designer Portfolio Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'gang.jpg',
            Link: 'http://gangmy.design/',
            Status: 'Online'
          },
          {
            Name: 'gybindia.in',
            Type: 'Business Consultation Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'gyb.jpg',
            Link: 'http://gybindia.in/home',
            Status: 'Offline'
          },
          {
            Name: 'unitedchemical.in',
            Type: 'Chemicle Business Company Website',
            Tech: ['html5', 'css3', 'js'],
            Image: 'uci.jpg',
            Link: 'http://unitedchemical.in/',
            Status: 'Online'
          },
          {
            Name: 'madanfashion.in',
            Type: 'A Clothing Company Website',
            Tech: ['html5', 'css3', 'js', 'php','wordpress'],
            Image: 'mf.jpg',
            Link: 'http://madanfashion.in/',
            Status: 'Offline'
          },
          {
            Name: 'petitepebble.com',
            Type: 'Business Consultation Company Website',
            Tech: ['html5', 'css3', 'js', 'php'],
            Image: 'pp.jpg',
            Link: 'http://www.petitepebble.com/',
            Status: 'Offline'
          },
          {
            Name: 'scc-education.com',
            Type: 'A Tutor Company Website',
            Tech: ['html5', 'css3', 'blogger'],
            Image: 'scc.jpg',
            Link: 'https://www.scc-education.com/',
            Status: 'Online'
          },
          {
            Name: 'dynamohack.blogspot.com',
            Type: 'My Old Tips and Tricks Blog',
            Tech: ['html5', 'css3', 'blogger'],
            Image: 'dynamo.jpg',
            Link: 'https://dynamohack.blogspot.com/',
            Status: 'Online'
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
  }
  hr{
    background:#0ff;
  }
  .card-dark{
     background-color: #111;
     padding: 10px;
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
</style>
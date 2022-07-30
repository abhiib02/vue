<template>
  <div>
    <button @click="prevBtn" class="btn prevBtn">◄</button>
    <button @click="nextBtn" class="btn nextBtn">►</button>
    <div class="carousalContainer">
      <img
        :class="{
          image: true,
          animate__animated: true,
          animate__zoomInDown: active,
          animate__zoomOutDown: active2,
        }"
        :src="this.projects[this.count].Image"
        alt=""
      />
      <div>
        <h1
          :class="{
            heading: true,
            animate__animated: true,
            animate__lightSpeedInRight: active,
            animate__lightSpeedOutLeft: active2,
          }"
        >
          {{ projects[this.count].Name }}
        </h1>
        <span>{{ projects[this.count].Type }}</span>
        <ul style="list-style-type: none; display: flex; flex-direction: row">
          <li v-for="(item, index) in projects[this.count].Tech" :key="index">
            <i :class="'icon-o fab fa-' + item"></i>
          </li>
        </ul>
        <span>{{ this.count }}</span>
        <span>{{ projects[this.count].Status }}</span>
        <span>{{ projects[this.count].Published }}</span>
        <p
          :class="{
            animate__animated: true,

            animate__fadeIn: active,
            animate__fadeOut: active2,
          }"
        >
          {{ projects[this.count].Link }}
        </p>
      </div>
      <ul class="horz_thumb_list">
        <li
          v-for="(item, index) in projects"
          v-bind:key="index"
          class="thumbnail"
        >
          <img :src="item.Image" @click="changeCount(index)" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projects: Array,
    autoplay: Boolean,
  },

  data() {
    return {
      count: 0,
      active: false,
      active2: false,
      animation_duration: 1000,
      Imagestay_duration: 1000,
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
    };
  },
  mounted() {
    this.auto();
  },
  methods: {
    changeCount(index) {
      this.active2 = true;
      setTimeout(() => {
        this.active2 = false;
        this.count = index;
      }, this.animation_duration);
      this.active = true;
    },
    auto() {
      if (this.autoplay) {
        this.active2 = !this.active2;
        setTimeout(() => {
          if (this.count > this.projects.length - 2) {
            this.count = 0;
          } else {
            this.count += 1;
          }

          this.auto();
        }, this.animation_duration * 2);
      }
    },
    prevBtn() {
      this.active2 = true;
      setTimeout(() => {
        this.active2 = false;
        if (this.count < 1) {
          this.count = this.projects.length - 1;
        } else {
          this.count--;
        }
      }, this.animation_duration);
      this.active = true;
      //this.activeNext = false;
    },
    nextBtn() {
      this.active2 = true;
      setTimeout(() => {
        this.active2 = false;
        if (this.count > 23 - 2) {
          this.count = 0;
        } else {
          this.count++;
        }
      }, this.animation_duration);
      this.active = true;
      //this.activeNext = false;
    },
  },
};
</script>
<style lang="scss" scoped>
body {
  overflow: hidden;
  background: black;
}
.image {
  filter: brightness(0.5);
}
.horz_thumb_list {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  .thumbnail {
    width: 50px;
    height: 50px;
    border: 2px solid grey;
  }
}
.heading {
  font-size: 2em;
}
.dots {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;

    border: 2px solid black;
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.carousalContainer {
  width: 100%;

  //border: 5px solid black;
  position: relative;
}

.carousalContainer {
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  div {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    //transform: translate(-50%, -50%);
  }
}

.no-show {
  display: none;
}
.prevBtn {
  left: 10%;
}
.nextBtn {
  right: 10%;
}
.btn {
  position: absolute;
  top: 80%;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  z-index: 100;
  background: white;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    filter: invert(1);
  }
}
</style>

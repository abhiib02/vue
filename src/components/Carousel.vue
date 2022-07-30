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
        <span>{{projects[this.count].Type}}</span>
        <ul style="list-style-type:none;display:flex; flex-direction:row;">
            <li v-for="item in projects[this.count].Tech">
            <i :class="'icon-o fab fa-'+item"></i>
            </li>
            </ul>
        <span>{{projects[this.count].Status}}</span>
        <span>{{projects[this.count].Published}}</span>
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
        if (this.count > this.projects.length - 2) {
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
    width: 70px;
    height: 70px;
    margin: 1px;
    border: 2px solid grey;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.heading {
  font-size: 3em;
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
    width: auto;
    height: 100%;
    object-fit: cover;
  }
  div {
    color: #fff;
    position: absolute;
    top: 30%;
    left: 40%;
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
  background: white;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    filter: invert(1);
  }
}
</style>

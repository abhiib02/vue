<template>
  <div>
    <button @click="prevBtn" class="btn-c prevBtn">◄</button>
    <button @click="nextBtn" class="btn-c nextBtn">►</button>
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
            <li v-for="item,index in projects[this.count].Tech :key=index">
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

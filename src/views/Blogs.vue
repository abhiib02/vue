<template>
  <div class="Blog fullvh center">
   
   <ul v-if="posts && posts.length">
    <li class="card" v-for="(post, index) of posts" :key="index">
      <img width="100%" height="60%" v-bind:src="post.thumbnail" alt="">
      <h5><strong>{{post.title}}</strong></h5>
       <router-link class="btn" v-bind:to="'/blog/'+ index">
          Read this article
        </router-link>
    </li>
  </ul>
  </div>
</template>
<style scoped>
ul{
  display:flex;
  flex-direction :row;
  flex-wrap :wrap;
  justify-content: center;
  align-items: center;
}
li{
  width:300px;
  height :300px;
  margin:30px;
padding:10px;
}
</style>
<script>
//import Blogform from '@/components/Blogform.vue'
import axios from 'axios';
export default {
    
    components:{
  
  },
   data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fblogspot%2FNUvkB`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data.items
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>
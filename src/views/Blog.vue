<template>
  <div class="Blog fullvh center">
   <div >
     <div class="container-fluid text-light" >
        <h2 class="text-light text-left">{{index}}</h2>
        
          <h1>{{posts.title}}</h1>
          <br>
          <p class="text-left" v-html="posts.content"></p>

     </div>
   </div>
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
  margin:5px;
padding:10px;
}
</style>
<script>
import axios from 'axios';
export default {
    
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
      this.posts = response.data.items[this.$route.params.id]
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
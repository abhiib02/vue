<template>
  <div class="Blog fullvh center">
    
   <button v-if="loggedIn != true " @click="active = !active" class="btn text-white btn-sm waves-effect cyan corner">Sign in </button>
   <button v-else @click="active = !active" class="btn text-white btn-sm waves-effect cyan corner">Sign out </button>
   <ul v-if="posts && posts.length">
    <li class="card" v-for="(post, index) of posts" :key="index">
      <img width="100%" height="60%" v-bind:src="post.thumbnail" alt="">
      <h5><strong>{{post.title}}</strong></h5>
       <router-link class="btn" v-bind:to="'/blog/'+ index">
          Read this article
        </router-link>
    </li>
  </ul>
  <div :class="[{'show' : active,'hide' : !active },'cntr backdrop']" id="signIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Log in</h5>
        <button type="button"  @click="active = !active" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       
        <label for="email">Email</label>
        <input type="text" v-model="email" id="email" class="form-control" required>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" required>
        
        
      
      </div>
      <div class="modal-footer">
        <button type="button" @click="active = !active" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" @click="login()" class="btn btn-primary">Sign In</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<style lang="scss" scoped>
ul{
  display:flex;
  flex-direction :row;
  flex-wrap :wrap;
  justify-content: center;
  align-items: center;
}
.corner{
  position: fixed;
  top:5%;
  right:5%;
  
}
.backdrop{
  background:#0008;
  width:100%;
  height: 100vh;
  overflow: hidden;
}

.cntr{
  position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}

.show{
   display: block;
}
.hide{
  display: none;
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
import {fb} from '../firebase.js'
import axios from 'axios';
export default {
    
    components:{
  
  },
   data() {
    return {
      posts: [],
      errors: [],
      active:false,
      email:null,
      password:null,
      loggedIn:null
    }
  },
  methods:{
    login(){
          fb.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(()=>{
              this.$router.replace('/');
              this.loggedIn=true;
          })
          .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                  alert('Wrong password.');
              } else {
                  alert(errorMessage);
              }
              
          })
      },
      
    }
,
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
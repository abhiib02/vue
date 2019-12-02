<template>
    <form action="https://jsonplaceholder.typicode.com/posts" method="post">
        <div class="form-group">
    <label for="exampleInputEmail1">Post Title</label>
    <input type="text" required class="form-control" id="exampleInputEmail1">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Post</label>
    <textarea required class="form-control"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
     name: 'Blogfrom',
sendpost(){
  axios({
  method: 'post',
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: {
    title: 'Fred',
    body: 'Flintstone'
  }
})}
     }
</script>
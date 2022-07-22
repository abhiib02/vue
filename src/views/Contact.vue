<template>
  <div class="contact  fullvh center">
    <div id="footer" class="footer text-white">
      <div class="row">
            <div class="col-lg-6 center">
            <h1 id="h1" class="text-dark-cyan">Let's get in touch</h1>
            <h6>I'm always open to make new friends.</h6>
              

            <div class="icons">
                <a class="text-white" href="https://www.linkedin.com/in/abhishek-bhardwaj-191b9784/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a class="text-white" href="https://dynamohack.blogspot.com/" target="_blank"><i class="fab fa-blogger"></i></a>
                <a class="text-white" href="https://www.instagram.com/abhiib02/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a class="text-white" href="https://codepen.io/abhishek-bhardwaj/" target="_blank"><i class="fab fa-codepen"></i></a>
            </div>
            <p>© {{ new Date().getFullYear() }} - Copyright Abhishek Bhardwaj, All Rights Reserved.</p>
            
            <p>Made With ❤ using <i class="icon-o fab fa-vuejs"></i></p>
            </div>

            <div class="col-lg-6 center">
             <form action="https://formsubmit.co/abhiib02@gmail.com" method="POST">

    

    <!-- Name -->
    <input type="hidden" name="_subject" value="Query From Portfolio">
    <input type="text" name="_honey" style="display:none">
    <input type="text" id="Name" name="name" class=" bg-transparent text-light  brdr-btm" placeholder="Name" style="width:100%;">
    <input type="hidden" name="_next" value="https://bhardwaj.netlify.app/#/thanks">
    <!-- Email -->
    <input type="email" id="Email" name="email" class=" bg-transparent  text-light mt-4 brdr-btm" placeholder="E-mail" style="width:100%;">

    <!-- Message -->
    <div class="form-group">
        <textarea name="message" class=" rounded-0  bg-transparent text-light mt-4 brdr-btm" id="Message" rows="3" placeholder="Message" style="width:100%;"></textarea>
    </div>
    <!-- Send button -->
    <button class="btn btn-info btn-block" type="submit">Send</button>

</form>
            </div>
            </div>
            
        </div>
  </div>
</template>
<style lang="scss">
#h1{
    font-weight: bold;
}
.fab{
  margin:10px;
}

</style>
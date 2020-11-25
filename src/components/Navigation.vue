<template>
  <nav>
    <a href="/" class="hide-on-mobile"><img class="logo" alt="Vue logo" src="../assets/logonav.svg"></a>
    <ul>
      <li>
        <router-link to="/">
          <i class="fas fa-home"></i>Home
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <i class="fas fa-user"></i>About
        </router-link>
      </li>
      <li>
        <router-link to="/skills">
          <i class="fas fa-keyboard"></i>Skills
        </router-link>
      </li>
      <li>
        <router-link to="/work">
          <i class="fas fa-pencil-ruler"></i>Work</router-link>
      </li>
      <!--<li>
        <router-link to="/blogs">
          <i class="fas fa-blog"></i>Blog</router-link>
      </li>-->

      <li>
        <router-link to="/contact">
          <i class="far fa-envelope"></i>Contact</router-link>
      </li>
      
    </ul>
   
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    position: fixed;
    background-color: #111;
    height: 100vh;
    width: 7%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 1000;
  }

  
  
  ul {
    display: block;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;

    margin:0px;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff !important;
      font-size: 100%;
      text-decoration: none;
      transition: all .4s ease;
      padding: 10px 10px;
    }

    &:hover {
      a {
        font-size: 130%;
      }
    }
  }

  .logo {
    width: 70%;
  }
i {
    color: #0ff;
}
#social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    

    li {
    list-style: none;

    margin:0px;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-decoration: none;
      transition: all .4s ease;
      padding: 0px;
    }

    &:hover {
      a {
        font-size: 1em;
      }
    }
  }

}

  @media only screen and (min-width: 1980px) and (max-width: 8192px) {
    li {
    list-style: none;

    margin:0px;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 200%;
      text-decoration: none;
      transition: all .4s ease;
      padding: 10px 10px;
    }

    &:hover {
      a {
        font-size: 230%;
      }
    }
  }

  }


  @media only screen and (max-width: 830px) {
    nav {
      position: fixed;
      background-color: #111;
      height: 8vh;
      width: 100%;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
.hide-on-mobile{
    display:none;
  }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
    margin: auto;
    }

    li {
      list-style: none;
      width:auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        
        text-decoration: none;
        transition: all .4s ease;
      }

     
    }

    .logo {
      height: 100%;
    }
    #social{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      display: none;
    }
  }

</style>

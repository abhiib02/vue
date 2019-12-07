<template>
  <nav>
    <a href="/"><img class="logo" alt="Vue logo" src="../assets/logo.svg"></a>
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
      <li>
        <router-link to="/blogs">
          <i class="fas fa-blog"></i>Blog</router-link>
      </li>
      <li>
        <router-link to="/hobbies">
          <i class="fas fa-walking"></i>Hobbies</router-link>
      </li>

      <li>
        <router-link to="/contact">
          <i class="far fa-envelope"></i>Contact</router-link>
      </li>
    </ul>
    <ul id="social" class="">
            <li><a href="https://www.linkedin.com/in/abhishek-bhardwaj-191b9784/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://dynamohack.blogspot.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-blogger"></i></a></li>
            <li><a href="https://www.instagram.com/abhiib02/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://codepen.io/abhishek-bhardwaj/" target="_blank" rel="noopener noreferrer"><i class="fab fa-codepen"></i></a></li>
        </ul>
  </nav>
</template>
<style lang="scss" scoped>
  nav {
    position: fixed;
    background-color: #111;
    height: 100vh;
    width: 5%;
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
      color: #fff;
      font-size: .6em;
      text-decoration: none;
      transition: all .4s ease;
      padding: 10px 10px;
    }

    &:hover {
      a {
        font-size: 1em;
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

  @media only screen and (max-width: 860px) {
    nav {
      position: fixed;
      background-color: #111;
      height: 8vh;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;

    }

    li {
      list-style: none;



      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-decoration: none;
        transition: all .4s ease;
      }

      &:hover {
        a {
          font-size: 1.2em;
        }
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
    }
  }
</style>
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
    <ul>
      <li><a href="http://facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
      </li>
      <li><a href="http://instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
      </li>
      <li><a href="http://codepen.io/" target="_blank" rel="noopener noreferrer"><i class="fab fa-codepen"></i></a></li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
  nav {
    position: fixed;
    background-color: #444;
    height: 100vh;
    width: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 100;
  }

  ul {
    display: block;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;

    margin: 5px;

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
    width: 90%;
  }

  @media only screen and (max-width: 860px) {
    nav {
      position: fixed;
      background-color: #444;
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
  }
</style>
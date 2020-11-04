<template>
<div>
  <h1>Bravo! You made it! Protected Page</h1>
  <button @click="triggerNetlifyIdentityAction('logout')">Log Out</button>
  </div>
</template>

<script>
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init({
      APIUrl: "https://bhardwaj.netlify.app/.netlify/identity",
      logo: true // you can try false and see what happens
    });
  export default {
    name: "Protected",
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        if (vm.$store.state.user.user) {
          return next();
        } else {
          return next({ name: "Home" });
        }
      });
    },
    methods:{
            triggerNetlifyIdentityAction(action) {
          if (action == "login" || action == "signup") {
            netlifyIdentity.open(action);
            netlifyIdentity.on(action, user => {
              this.currentUser = {
                username: user.user_metadata.full_name,
                email: user.email,
                access_token: user.token.access_token,
                expires_at: user.token.expires_at,
                refresh_token: user.token.refresh_token,
                token_type: user.token.token_type
              };
              this.updateUser({
                currentUser: this.currentUser
              });
              netlifyIdentity.close();
              this.$router.push('protected');
            });
          } else if (action == "logout") {
            this.currentUser = null;
            this.updateUser({
              currentUser: this.currentUser
            });
            netlifyIdentity.logout();
            this.$router.push({ name: "Home" });
          }
        }
    }
  };
</script>
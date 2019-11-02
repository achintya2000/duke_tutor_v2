<template>
  <div>
    <v-toolbar app color="blue darken-4" dark height="75px">
      <router-link to="/">
        <v-toolbar-title @click="toHome" class="headline text-uppercase">
          <span>Duke</span>
          <span class="font-weight-light">Tutor</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="toAbout">About</v-btn>
        <v-btn v-if="!isAuthenticated" text @click="toSignUp">Sign Up</v-btn>
        <v-btn v-if="!isAuthenticated" text @click="toLogin">
          Login
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn text v-if="isAuthenticated" @click="logout">
          Logout
          <v-icon right>mdi-arrow-left</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toSignUp() {
      this.$router.push("/signup");
    },
    toAbout() {
      this.$router.push("/about");
    },
    toLogin() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.dispatch("userSignOut");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style scoped>
a {
  color: #fff !important;
  text-decoration: none;
}
</style>
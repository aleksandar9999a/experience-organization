<template>
  <md-toolbar class="material-blue">
    <md-button class="logo" to='/'><img src="./../../assets/logo.png" class="logo" /> Experience Organizer</md-button>
    <div class="center">
      <md-button class="md-accent" to="/organizer">My Organizer</md-button>
      <md-button class="md-accent" to="/search">Search</md-button>
      <md-button class="md-accent" to="/profile">My profile</md-button>
    </div>
    <div class="right">
      <md-button class="md-accent" v-on:click="signOut()">Log Out</md-button>
    </div>
  </md-toolbar>
</template>

<script>
import { logOut } from './../../services/auth.service'

export default {
  name: "Navbar",
  data: () => {
    return {
      menuVisible: false
    };
  },
  methods: {
    signOut(){
      logOut();
    }
  }
};
</script>

<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
.right {
  margin-left: auto;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.md-button {
  font-size: 12px;
}

.logo {
  width: auto;
  height: 50px;
  font-size: 15px;
  color: white !important;
}

.material-blue {
  background-color: rgb(84, 59, 226) !important;
}

.md-accent {
  color: white !important;
}
</style>
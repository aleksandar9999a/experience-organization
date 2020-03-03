<template>
  <md-list>
    <md-avatar class="md-large">
      <img src="/assets/examples/avatar-2.jpg" alt="People" />
    </md-avatar>

    <md-list-item to="/home">
      <md-icon>dashboard</md-icon>
      <span class="md-list-item-text">Dashboard</span>
    </md-list-item>

    <md-list-item to="/my_projects">
      <md-icon>folder</md-icon>
      <span class="md-list-item-text">My Projects</span>
    </md-list-item>

    <md-list-item to="/search">
      <md-icon>search</md-icon>
      <span class="md-list-item-text">Search</span>
    </md-list-item>

    <md-list-item  @click="signOut">
      <md-icon>exit_to_app</md-icon>
      <span class="md-list-item-text">Log Out</span>
    </md-list-item>
  </md-list>
</template>

<script>
import { logOut } from "./../../services/auth.service";

export default {
  name: "Menu",
  methods: {
    signOut() {
      logOut();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

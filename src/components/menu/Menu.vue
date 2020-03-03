<template>
  <md-list class="menu">
    <ProfileInformation />

    <md-list-item v-if="!edit" class="create">
      <md-button class="md-raised md-accent">Create Project</md-button>
    </md-list-item>

    <md-list-item to="/">
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

    <md-list-item @click="signOut">
      <md-icon>exit_to_app</md-icon>
      <span class="md-list-item-text">Log Out</span>
    </md-list-item>
  </md-list>
</template>

<script>
import { logOut } from "./../../services/auth.service";
import ProfileInformation from "./ProfileInformation";

export default {
  name: "Menu",
  components: { ProfileInformation },
  data: function() {
    return {
      user: null,
      edit: false,
      firstName: null,
      lastName: null
    };
  },
  methods: {
    signOut() {
      logOut();
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  background: linear-gradient(to top, #626772, #3f89ff);
}

.md-list-item-text{
    color: black;
}

.create {
  margin-bottom: 40px;
}

.md-button {
  margin-left: auto;
  margin-right: auto;
}
</style>

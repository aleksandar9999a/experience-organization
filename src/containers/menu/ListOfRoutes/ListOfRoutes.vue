<template>
  <div>
    <md-list-item class="create" @click="openDialog">
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
  </div>
</template>

<script>
import { logOut } from "./../../../services/auth.service";
import { changeShowDialog } from "./../../../services/project-dialog.service";

export default {
  name: "ListOfRoutes",
  methods: {
    signOut() {
      logOut();
    },
    openDialog() {
      changeShowDialog();
    }
  }
};
</script>

<style lang="scss" scoped>
.md-list-item-text {
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

<template>
  <div>
    <md-list-item class="create" @click="openDialog">
      <md-button class="md-raised md-accent">Create Project</md-button>
    </md-list-item>

    <md-list-item v-for="(route, index) of routes" :key="index" :to="route.route">
      <md-icon>{{route.icon}}</md-icon>
      <span class="md-list-item-text">{{route.text}}</span>
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
  data: function() {
    return {
      routes: [
        { route: "/", icon: "dashboard", text: "Dashboard" },
        { route: "/my_projects", icon: "folder", text: "My Projects" },
        { route: "/search", icon: "search", text: "Search" }
      ]
    };
  },
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

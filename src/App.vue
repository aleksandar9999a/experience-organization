<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-transparent" md-mode="reveal" md-elevation="0" v-if="menuVisible">
        <md-button class="md-icon-button" @click="changeMenuState">
          <md-icon>menu</md-icon>
        </md-button>
        <md-button class="logo" to="/">
          <img src="./assets/logo.png" class="logo" /> Experience Organizer
        </md-button>
        <md-button class="md-icon-button" @click="signOut">
          <md-icon>exit_to_app</md-icon>
        </md-button>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="isVisible" v-if="menuVisible">
        <Menu />
      </md-app-drawer>
      <md-app-content>
        <router-view></router-view>
        <ProjectDialog></ProjectDialog>
        <Notifications></Notifications>
        <Loader></Loader>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Menu from "./components/menu/Menu";
import Notifications from "./components/notifications/Notifications";
import Loader from "./components/loader/Loader";
import { auth } from "./firebase";
import { addNotification } from "./services/notifications";
import ProjectDialog from './components/project-dialog/ProjectDialog';
import { logOut } from "./services/auth.service";

export default {
  name: "App",
  components: { Menu, Notifications, Loader, ProjectDialog },
  data: () => {
    return {
      menuVisible: false,
      isVisible: false
    };
  },
  methods: {
    setMenuVisible(state) {
      this.menuVisible = state;
    },
    changeMenuState() {
      this.isVisible = !this.isVisible;
    },
    signOut() {
      logOut();
    },
  },
  errorCaptured: function(err) {
    addNotification(err.message);
  },
  created: function() {
    auth.onAuthStateChanged(u => this.setMenuVisible(!!u));
  }
};
</script>

<style>
.md-app-content{
   padding: 0;
   overflow: hidden;
   background: linear-gradient(to right, #ffefba, #ffffff) !important;
}

.md-app {
  min-height: 1000px;
  border: 1px solid rgba(#000, 0.12);
  background: linear-gradient(to right, #ffefba, #ffffff) !important;
}

.md-drawer {
  width: 300px;
  max-width: calc(100vw - 125px);
}

.logo {
  width: auto;
  height: 60px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>

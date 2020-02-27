<template>
  <div class="app">
    <Navbar v-if="menuVisible" />
    <router-view></router-view>
    <Notifications></Notifications>
    <Loader></Loader>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import Notifications from "./components/notifications/Notifications";
import Loader from './components/loader/Loader';
import { auth } from './firebase';
import { addNotification } from './services/notifications';

export default {
  name: "App",
  components: {Navbar, Notifications, Loader},
  data: () => {
    return {
      menuVisible: false
    };
  },
  methods: {
    setMenuVisible(state) {
      this.menuVisible = state;
    }
  },
  errorCaptured: function (err) {
    addNotification(err.message);
  },
  created: function() {
    auth.onAuthStateChanged(u => {
      if (u) {
        this.setMenuVisible(true);
      } else{
        this.setMenuVisible(false);
      }
    })
  }
};
</script>

<style>
.app {
  background: linear-gradient(to top, #2c3868, #fad7e1);
  min-height: 1000px;
}
</style>

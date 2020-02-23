<template>
  <div>
    <Navbar v-if="menuVisible" />
    <router-view></router-view>
    <Notifications></Notifications>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import Notifications from "./components/notifications/Notifications";
import { auth } from './firebase';


export default {
  name: "App",
  components: {Navbar, Notifications},
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
    this.$emit('show:notification', err.message);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

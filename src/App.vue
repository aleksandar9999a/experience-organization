<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Notifications></Notifications>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import Notifications from "./components/notifications/Notifications";

export default {
  name: "App",
  components: {Navbar, Notifications},
  errorCaptured: function (err) {
    this.$emit('show:notification', err.message);
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

<template>
  <md-toolbar class="md-accent">
    <img src="./../../assets/logo.png" class="logo" />
    <router-link class="md-title" to="/">Experience Organization</router-link>
    <div v-if="menuVisible" class="center">
      <md-button class="md-primary">My Organizations</md-button>
      <md-button class="md-primary">Search</md-button>
      <md-button class="md-primary">My profile</md-button>
    </div>
    <div v-else class="right">
      <md-button class="md-primary" to="/auth">Sign In / Sign Up</md-button>
    </div>
    <div v-if="menuVisible" class="right">
      <md-button class="md-primary">Log Out</md-button>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      menuVisible: false
    };
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
  height: 40px;
}
</style>
<template>
  <md-list class="menu">
    <md-list-item class="profile" v-if="user">
      <div class="info">
        <md-avatar class="md-large">
          <img :src="user.image" alt="People" />
        </md-avatar>
        <p class="md-subheading">{{user.firstName}} {{user.lastName}}</p>
      </div>
    </md-list-item>

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

    <md-list-item @click="signOut">
      <md-icon>exit_to_app</md-icon>
      <span class="md-list-item-text">Log Out</span>
    </md-list-item>
  </md-list>
</template>

<script>
import { logOut } from "./../../services/auth.service";
import { getMyData } from "./../../services/firestore.service";

export default {
  name: "Menu",
  data: function() {
    return {
      user: null
    };
  },
  methods: {
    signOut() {
      logOut();
    }
  },
  created: function() {
    this.$bind("user", getMyData());
  }
};
</script>

<style lang="scss" scoped>
.menu{
    height: 100%;
    background: linear-gradient(to top, #626772, #3f89ff); 
}

.profile {
  display: flex;
  margin-bottom: 50px;
}

.info{
    margin: auto;
}

.md-avatar{
    width: 100%;
    height: 120px;
}

.md-subheading{
    text-align: center;
}
</style>

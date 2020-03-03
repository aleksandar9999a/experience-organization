<template>
  <md-list class="menu">
    <md-list-item class="profile" v-if="user">
      <div class="info">
        <md-avatar class="md-large">
          <label class="custom-file-upload">
            <img :src="user.image" alt="People" />
            <input type="file" @change="handleImage($event)" />
          </label>
        </md-avatar>
        <div>
          <p v-if="!edit" class="md-subheading" @click="changeForm">
            {{user.firstName}} {{user.lastName}}
            <md-icon class="edit" >edit</md-icon>
          </p>
          <form v-else @submit="handleSumbit">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstName"></md-input>
            </md-field>
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastName"></md-input>
            </md-field>
            <div class="edit-form-btn">
                <md-button type="submit" class="md-raised md-accent">Edit</md-button>
            </div>
          </form>
        </div>
      </div>
    </md-list-item>

    <md-list-item v-if="!edit" class="create">
      <md-button class="md-raised md-accent">Create Project</md-button>
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
import {
  getMyProfile,
  updateProfileImage,
  updateNames
} from "./../../services/firestore.service";

export default {
  name: "Menu",
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
    },
    handleImage(e) {
      if (e.target.files[0]) {
        updateProfileImage(e.target.files[0]);
      }
    },
    changeForm(){
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.edit = !this.edit;
    },
    handleSumbit(){
        updateNames(this.firstName, this.lastName);
        this.edit = !this.edit;
    }
  },
  created: function() {
    this.$bind("user", getMyProfile());
  }
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  background: linear-gradient(to top, #626772, #3f89ff);
}

.md-field.md-focused label{
    color: black;
}

.edit-form-btn{
    display: flex;
}

.edit {
  margin-left: 10px;
}

input[type="file"] {
  display: none;
}

.profile {
  display: flex;
}

.info {
  margin: auto;
}

.md-avatar {
  width: 100%;
  height: 140px;
}

.md-avatar img {
  width: auto;
  height: 120px;
}

.custom-file-upload :hover {
  opacity: 70%;
}

.md-subheading {
  text-align: center;
}

.create {
  margin-bottom: 40px;
}

.md-button {
  margin-left: auto;
  margin-right: auto;
}
</style>

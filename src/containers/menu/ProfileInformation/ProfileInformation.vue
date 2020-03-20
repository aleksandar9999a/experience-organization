<template>
  <md-list-item class="profile" v-if="user">
    <div class="info">
      <md-avatar class="md-large">
        <label class="custom-file-upload">
          <img :src="user.image" alt="People" />
          <input type="file" @change="handleImage" />
        </label>
      </md-avatar>
      <div>
        <p v-if="!edit" class="md-subheading" @click="changeForm">
          {{user.firstName}} {{user.lastName}}
          <md-icon class="edit">edit</md-icon>
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
            <md-button class="md-raised md-accent" @click="changeForm">Back</md-button>
          </div>
        </form>
      </div>
    </div>
  </md-list-item>
</template>

<script>
import {
  getMyProfile,
  updateProfileImage,
  updateNames
} from "./../../../services/firestore.service";

export default {
  name: "ProfileInformation",
  data: function() {
    return {
      user: null,
      edit: false,
      firstName: null,
      lastName: null
    };
  },
  methods: {
    handleImage(e) {
      if (e.target.files[0]) {
        updateProfileImage(e.target.files[0]);
      }
    },
    changeForm() {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.edit = !this.edit;
    },
    handleSumbit() {
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
.md-field.md-focused label {
  color: black;
}

.edit-form-btn {
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

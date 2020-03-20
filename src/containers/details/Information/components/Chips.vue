<template>
  <div class="members">
    <md-chip v-for="member of users" :key="member.uid" class="md-primary">
      <md-avatar class="chips-img">
        <img :src="member.image" class="chips-avatar" alt="member" />
      </md-avatar>
      {{ member.firstName }} {{member.lastName}}
    </md-chip>

    <md-autocomplete v-model="searchTerm" @md-selected="selectUser" :md-options="newUsers">
      <label>Requests</label>
      <template slot="md-autocomplete-item" slot-scope="{ item }">
        <md-avatar>
          <img :src="item.image" alt="user" />
        </md-avatar>
        <span class="md-list-item-text">{{ item.firstName }} {{item.lastName}}</span>
      </template>
    </md-autocomplete>
  </div>
</template>

<script>
import {
  getUser,
  updateMembersFromProject
} from "./../../../../services/firestore.service";

export default {
  name: "Chips",
  props: {
    id: String,
    members: Array,
    requests: Array
  },
  data: function() {
    return {
      users: [],
      newUsers: [],
      searchTerm: null
    };
  },
  methods: {
    getMembers() {
      this.users = [];
      this.members
        .filter(uid => uid !== "")
        .forEach(uid => {
          getUser(uid).onSnapshot(userdata => {
            this.users.push(userdata.data());
          });
        });
    },
    getRequests() {
      this.newUsers = [];
      this.requests
        .filter(uid => uid !== "")
        .forEach(uid => {
          getUser(uid).onSnapshot(userdata => {
            this.newUsers.push(userdata.data());
          });
        });
    },
    selectUser(user) {
      this.searchTerm = user.firstName;
      updateMembersFromProject(this.id, user.uid).finally(() => {
        this.getMembers();
        this.getRequests();
      });
    }
  },
  created: function() {
    this.getMembers();
    this.getRequests();
  }
};
</script>

<style lang="scss" scoped>
.members {
  margin: auto;
}
.chips-img {
  height: 25px;
  width: auto;
  min-width: 20px;
  margin-right: 7px;
}
.chips-avatar {
  height: inherit;
  width: inherit;
}

.md-chip {
  margin: 10px;
}
</style>
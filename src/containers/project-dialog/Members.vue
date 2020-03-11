<template>
  <div class="members">
    <md-autocomplete
      v-model="searchTerm"
      @md-selected="selectUser"
      :md-options="options"
      @md-changed="getNewMembers"
    >
      <label>Members</label>
      <template slot="md-autocomplete-item" slot-scope="{ item }">
        <md-avatar>
          <img :src="item.image" alt="user" />
        </md-avatar>
        <span class="md-list-item-text">{{ item.firstName }} {{item.lastName}}</span>
      </template>
    </md-autocomplete>
    <div>
      <md-chip
        v-for="(member, index) of members"
        :key="member.uid"
        class="md-primary"
        :md-deletable="true"
        @click="removeChip(index)"
      >
        <md-avatar class="chips-img">
          <img :src="member.image" class="chips-avatar" alt="member" />
        </md-avatar>
        {{ member.firstName }} {{member.lastName}}
      </md-chip>
    </div>
  </div>
</template>

<script>
import { getMembers, removeMember } from "./../../services/project-dialog.service";
import { searchUserByName } from "./../../services/firestore.service";
import { addNotification } from "./../../services/notifications";

export default {
  name: "Members",
  data: function() {
    return {
      searchTerm: null,
      options: []
    };
  },
  methods: {
    getNewMembers() {
      searchUserByName(this.searchTerm).onSnapshot(data => {
        this.options = [];
        data.forEach(doc => {
          this.options.push(doc.data());
        });
      });
    },
    selectUser(user) {
      if (!this.members.find(x => x.uid === user.uid)) {
        this.searchTerm = user.firstName;
        this.members = user;
      } else {
        this.searchTerm = "";
        addNotification("Sorry, User is already added!");
      }
    },
    removeChip(i) {
      removeMember(i);
    }
  },
  computed: {
    members: {
      get() {
        return getMembers();
      },
      set(newMembers) {
        return this.members.push(newMembers);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
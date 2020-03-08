<template>
  <div class="members">
    <md-chip v-for="member of users" :key="member.uid" class="md-primary">
      <md-avatar class="chips-img">
        <img :src="member.image" class="chips-avatar" alt="member" />
      </md-avatar>
      {{ member.firstName }} {{member.lastName}}
    </md-chip>
  </div>
</template>

<script>
import { getUser } from "./../../../services/firestore.service";

export default {
  name: "Chips",
  props: ["members"],
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    this.members.forEach(member => {
      getUser(member).onSnapshot(userdata => {
        this.users.push(userdata.data());
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.members{
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

.md-chip{
    margin: 10px;
}
</style>
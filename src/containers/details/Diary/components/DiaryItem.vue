<template>
  <md-list-item v-if="user">
    <md-avatar>
      <img :src="user.image" alt="People" />
    </md-avatar>

    <div class="md-list-item-text">
      <span>{{user.firstName}} {{user.lastName}}</span>
      <span>{{item.text}}</span>
    </div>

    <div>
      <span>{{item.timestamp | date}}</span>
    </div>
  </md-list-item>
</template>

<script>
import { getUser } from "./../../../../services/firestore.service";

export default {
  name: "DiaryItem",
  props: {
    item: Object
  },
  data: function() {
    return {
      user: null
    };
  },
  created: function() {
    this.$bind("user", getUser(this.item.user));
  }
};
</script>

<style lang="scss" scoped>
</style>
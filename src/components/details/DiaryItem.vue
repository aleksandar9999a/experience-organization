<template>
  <md-list-item v-if="user">
    <md-avatar>
      <img :src="user.image" alt="People" />
    </md-avatar>

    <div class="md-list-item-text">
      <span>{{user.firstName}} {{user.lastName}}</span>
      <span>{{text}}</span>
    </div>
  </md-list-item>
</template>

<script>
import { getUser } from "./../../services/firestore.service";

export default {
  name: "DiaryItem",
  props: ["item"],
  data: function() {
    return {
      user: null,
      text: null
    };
  },
  created: function(){
      this.$bind('user', getUser(this.item.user));
      this.text = this.item.text;
  }
};
</script>

<style lang="scss" scoped>
</style>
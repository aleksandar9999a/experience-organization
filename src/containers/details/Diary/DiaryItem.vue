<template>
  <md-list-item v-if="user">
    <md-avatar>
      <img :src="user.image" alt="People" />
    </md-avatar>

    <div class="md-list-item-text">
      <span>{{user.firstName}} {{user.lastName}}</span>
      <span>{{text}}</span>
    </div>

    <div>
      <span>{{timestamp}}</span>
    </div>
  </md-list-item>
</template>

<script>
import { getUser } from "./../../../services/firestore.service";
import timestampConverter from "./../timestamp-converter";

export default {
  name: "DiaryItem",
  props: ["item"],
  data: function() {
    return {
      user: null,
      text: null,
      timestamp: null
    };
  },
  created: function() {
    this.$bind("user", getUser(this.item.user));
    this.text = this.item.text;
    this.timestamp = timestampConverter(this.item.timestamp);
  }
};
</script>

<style lang="scss" scoped>
</style>
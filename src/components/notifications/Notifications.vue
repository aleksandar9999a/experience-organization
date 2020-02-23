<template>
  <div class="notifications">
    <Notification
      v-for="(message, index) of list"
      :key="index"
      :msg="message"
      :id="index"
      v-bind:style="{ bottom: (6 + (index * 7)) + '%' }"
    ></Notification>
  </div>
</template>

<script>
import { listOfNotifications } from "./../../services/notifications";
import Notification from "./Notification";

export default {
  name: "Notifications",
  components: { Notification },
  data: () => ({
    position: "left",
    list: []
  }),
  created: function() {
    this.list = listOfNotifications;
  }
};
</script>

<style lang="scss" scoped>
</style>
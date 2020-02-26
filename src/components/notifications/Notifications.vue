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
import { notifications } from "./../../services/notifications";
import Notification from "./Notification";

export default {
  name: "Notifications",
  components: { Notification },
  computed: {
    list: function() {
      return notifications.list;
    }
  },
  data: () => ({
    position: "left"
  })
};
</script>

<style lang="scss" scoped>
</style>
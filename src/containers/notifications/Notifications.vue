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
import { getNotificationsList } from "./../../services/notifications";
import Notification from "./components/Notification";

export default {
  name: "Notifications",
  components: { Notification },
  computed: {
    list: function() {
      return getNotificationsList();
    }
  },
  data: () => ({
    position: "left"
  })
};
</script>

<style lang="scss" scoped>
</style>
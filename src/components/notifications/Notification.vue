<template>
  <md-card class="md-primary notification" md-with-hover>
    <md-card-header>{{msg}}</md-card-header>
    <md-button @click="removeNotification">Close</md-button>
  </md-card>
</template>

<script>
import { removeNotificationByIndex } from "./../../services/notifications";
export default {
  name: "Notification",
  props: ["msg", "id"],
  methods: {
      removeNotification(){
          removeNotificationByIndex(this.id);
      }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  z-index: 100;
  cursor: pointer;
  position: absolute;
  display: inline-flex;
  right: 0;
  margin-right: 2%;
  margin-left: 2%;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-radius: 0.2rem;
  min-width: 200px;
  box-shadow: 15px 10px 30px grey;
}

.md-button{
  margin-bottom: auto;
  margin-top: auto;
}

</style>
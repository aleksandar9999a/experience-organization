<template>
  <div class="notification">
    <span class="message">{{msg}}</span>
    <md-button class="md-accent" @click="removeNotification">X</md-button>
  </div>
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
  display: flex;
  right: 20px;
  background-color: rgb(84, 59, 226);
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-radius: 0.2rem;
  min-width: 300px;
  height: 7%;
  box-shadow: 15px 10px 30px grey;
}

.message {
  padding-left: 20px;
  padding-top: 5%;
  color: white;
}

.md-button {
  padding-top: 5%;
  margin-left: auto;
}
</style>
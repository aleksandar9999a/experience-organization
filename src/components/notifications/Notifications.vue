<template>
    <md-snackbar md-position="left" :md-active="notifications" md-persistent>
      <span>{{notificationMessage}}</span>
    </md-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Notifications',
    data: () => ({
    position: 'left'
  }),
  computed: mapState(["notifications", "notificationMessage"])
}
</script>

<style lang="sass" scoped>

</style>
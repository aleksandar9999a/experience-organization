<template>
    <md-snackbar md-position="left" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{messages}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">X</md-button>
    </md-snackbar>
</template>

<script>
export default {
    name: 'Notifications',
    data: () => ({
    showSnackbar: false,
    position: 'left',
    duration: 3000,
    isInfinity: false,
    messages: ''
  }),
  methods: {
    show: function(mess) {
      this.messages = mess;
      this.showSnackbar = true;
    }
  },
  created: function() {
    this.$parent.$on('show:notification', this.show);
  }
}
</script>

<style lang="sass" scoped>

</style>
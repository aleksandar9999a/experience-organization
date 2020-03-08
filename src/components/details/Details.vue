<template>
  <div>{{data}}</div>
</template>

<script>
import { getProject } from './../../services/firestore.service';

export default {
  name: "Details",
  data: function() {
    return {
        data: null
    };
  },
  created: function() {
    this.$bind("data", getProject(this.$route.params.id));
  }
};
</script>

<style lang="scss" scoped>
</style>
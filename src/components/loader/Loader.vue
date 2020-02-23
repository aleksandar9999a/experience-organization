<template>
  <div class="loading-overlay" v-if="loading">
    <md-progress-spinner md-mode="indeterminate" :md-diameter="100" :md-stroke="2"></md-progress-spinner>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Loader",
  computed: mapState(["loading"])
};
</script>

<style lang="scss" scoped>
.loading-overlay {
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.541);
}
</style>
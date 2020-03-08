<template>
  <div class="details">
    <div v-if="data" class="wrapper">
      {{data}}
      <h3 class="md-display-2">{{data.name}}</h3>
      <h4 class="md-display-1">{{data.description}}</h4>
      <md-steppers md-vertical>
        <md-step
          v-for="(step, index) of data.steps"
          :key="index"
          :id="step.id"
          :md-label="step.name"
        >
          {{step.description}}
          <div v-if="step.start">{{step.start}}</div>
          <div v-if="step.end">{{step.end}}</div>
        </md-step>
      </md-steppers>
    </div>
  </div>
</template>

<script>
import { getProject } from "./../../services/firestore.service";

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
.details {
  display: flex;
}
.wrapper {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.md-display-2,
.md-display-1 {
  text-align: center;
}
</style>
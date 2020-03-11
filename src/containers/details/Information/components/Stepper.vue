<template>
  <md-steppers md-vertical>
    <md-step v-for="(step, index) of steps" :key="index" :id="step.id" :md-label="step.name">
      {{step.description}}

      <hr />

      <div class="time">
        <div v-if="step.start">Start at: {{generateDate(step.start)}}</div>
        <div v-if="step.end">End at: {{generateDate(step.end)}}</div>
      </div>
    </md-step>
  </md-steppers>
</template>

<script>
import timestampConverter from "./../../timestamp-converter";

export default {
  name: "Steppers",
  props: ["steps"],
  methods: {
    generateDate(stamp) {
      return timestampConverter(stamp);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
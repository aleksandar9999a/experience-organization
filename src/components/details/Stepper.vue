<template>
  <md-steppers md-vertical>
    <md-step v-for="(step, index) of steps" :key="index" :id="step.id" :md-label="step.name">
      {{step.description}}
      <div v-if="step.start">{{step.start}}</div>
      <div v-if="step.end">{{step.end}}</div>
    </md-step>
  </md-steppers>
</template>

<script>
export default {
  name: "Steppers",
  props: ["steps"]
};
</script>

<style lang="scss" scoped>
</style>
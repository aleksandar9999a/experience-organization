<template>
  <md-steppers md-vertical>
    <md-step v-for="(step, index) of steps" :key="index" :id="step.id" :md-label="step.name">
      {{step.description}}

      <hr />

      <div>
        <div v-if="step.start">Start at: {{step.start | date}}</div>
        <div v-if="step.end">End at: {{step.end | date}}</div>
      </div>
    </md-step>
  </md-steppers>
</template>

<script>
export default {
  name: "Steppers",
  props: {
    steps: Array
    }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <md-steppers md-vertical>
    <md-step v-for="step of steps" :key="step.id" :id="step.id" :md-label="step.name">
      <md-field>
        <label>Step Name</label>
        <md-input v-model="step.name" required></md-input>
      </md-field>
      <md-field>
        <label>Step Description</label>
        <md-textarea v-model="step.description" required></md-textarea>
      </md-field>
      <div class="date">
        <div class="block">
          <md-datepicker v-model="step.start">
            <label>Start Date</label>
          </md-datepicker>
        </div>
        <div class="block">
          <md-datepicker v-model="step.end">
            <label>End Date</label>
          </md-datepicker>
        </div>
      </div>
    </md-step>
    <div class="icon">
      <md-button class="md-icon-button md-primary" @click="addStep">
        <md-icon class="md-size-2x">add</md-icon>
      </md-button>
    </div>
  </md-steppers>
</template>

<script>
import {
  getSteps,
  addEmptyStep
} from "./../../../services/project-dialog.service";

export default {
  name: "Steps",
  methods: {
    addStep() {
      addEmptyStep();
    }
  },
  computed: {
    steps: {
      get() {
        return getSteps();
      },
      set(newSteps) {
        return newSteps;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
}

.md-icon-button {
  margin-left: auto;
  margin-right: auto;
}

.md-field {
  width: 80%;
}

.date {
  display: flex;
}

.block + .block {
  padding-left: 50px;
}
</style>
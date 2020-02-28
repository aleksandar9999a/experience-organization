<template>
  <div class="steps">
    <div class="title">
      <h1 class="md-display-1">Add Steps</h1>
    </div>
    <div class="generated-steps">
      <div v-for="step of steps" :key="step.id" class="circle">
         <md-field>
          <label>Step Name</label>
          <md-input></md-input>
        </md-field>
      </div>
    </div>
    <div @click="addStep()" class="circle">
      <md-icon>add</md-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSteps",
  data: function() {
    return {
      steps: [{step_name: 'Create Form', id: "1"}]
    }
  },
  methods: {
    addStep: function() {
      const id = this.steps[this.steps.length-1].id + 1;
      this.steps.push({step_name: '', id});
    }
  }
};
</script>

<style lang="scss" scoped>
.steps {
  min-height: 500px;
}

.generated-steps{
  margin: 40px;
}

.title{
  text-align: center;
}

.circle {
  height: 300px;
  width: 300px;
  background-color: rgb(255, 194, 52);
  box-shadow: 3px 7px 5px #0000003d;
  border-radius: 50%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.md-field{
  margin: auto;
  width: 250px;
}

.md-field.md-focused label {
  font-size: 17px;
  top: -7px;
}

.md-field.md-has-value label {
  font-size: 19px;
  top: -8px;
}

label {
  font-size: 15px;
  display: block;
  width: 100%;
  white-space:nowrap;
  text-align: center;
}

.md-field.md-theme-default:after,
.md-field.md-theme-default:before {
  background-color: transparent;
}

.md-input {
  background-color: white !important;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 2rem;
  padding-left: 20px !important;
  border-bottom: none;
  min-width: 7rem;
}

</style>
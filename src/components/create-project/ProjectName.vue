<template>
  <div class="project-name">
    <div class="project">
      <div class="center">
        <h1 class="md-display-1">Choose Project Name</h1>
      </div>
      <md-field>
        <label>Project Name</label>
        <md-input v-model="name" v-model.trim="$v.name.$model"></md-input>
      </md-field>
      <div v-if="$v.name.$dirty" class="error">
          <span v-if="!$v.name.required">Project Name is required!</span>
          <span v-else-if="!$v.name.minLength || !$v.name.maxLength">Minimum length is 8 chars, max - 20!</span>
      </div>
      <div class="center">
        <p class="md-caption">Write it in field.</p>
      </div>
      <div class="center">
        <md-button class="md-raised md-primary" @click="setDone" :disabled="$v.name.$invalid">Continue</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { goToNextStep } from './../../services/create-project.service';


export default {
  name: "ProjectName",
  mixins: [validationMixin],
  data: function() {
    return {
      name: ''
    }
  },
  validations: {
    name: { required, minLength: minLength(4), maxLength: maxLength(20)}
  },
  methods: {
    setDone() {
      goToNextStep('second', 'third');
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  border: 2px;
  border-color: red;
  color: red;
  margin: 0 0 0 15px;
  padding-bottom: 15px;
}

.project-name {
  height: 400px;
  display: flex;
}

.project{
  margin: auto;
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
  white-space: nowrap;
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
  min-width: 10rem;
}

.center {
  text-align: center;
}
</style>
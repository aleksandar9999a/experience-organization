<template>
  <div class="container">
    <div class="center">
      <div class="form">
        <h2 class="title">SIGN UP</h2>
        <md-field>
          <label>E-mail</label>
          <md-input v-model="email" v-model.trim="$v.email.$model"></md-input>
        </md-field>
        <div v-if="$v.email.$dirty" class="error">
          <span v-if="!$v.email.required">Email is required!</span>
          <span v-else-if="!$v.email.email">Invalid email!</span>
        </div>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="password" type="password" v-model.trim="$v.password.$model"></md-input>
        </md-field>
        <div v-if="$v.password.$dirty" class="error">
          <span v-if="!$v.password.required">Password is required!</span>
          <span
            v-else-if="!$v.password.minLength || !$v.password.maxLength"
          >Minimum length is 8 chars, max - 20!</span>
        </div>

        <md-field md-has-password>
          <label>Confirm Password</label>
          <md-input v-model="confPassword" type="password" v-model.trim="$v.confPassword.$model"></md-input>
        </md-field>
        <div v-if="$v.confPassword.$dirty" class="error">
          <span v-if="!$v.confPassword.required">Confirm Password is required!</span>
          <span
            v-else-if="!$v.confPassword.minLength || !$v.confPassword.maxLength"
          >Minimum length is 8 chars, max - 20!</span>
          <span
            v-else-if="!$v.confPassword.sameAs"
          >Confirm password and password must match!</span>
        </div>

        <md-field>
          <label>First Name</label>
          <md-input v-model="firstName" v-model.trim="$v.firstName.$model"></md-input>
        </md-field>
        <div v-if="$v.firstName.$dirty" class="error">
          <span v-if="!$v.firstName.required">First name is required!</span>
          <span
            v-else-if="!$v.firstName.minLength || !$v.firstName.maxLength"
          >Minimum length is 4 chars, max - 15!</span>
        </div>

        <md-field>
          <label>Last Name</label>
          <md-input v-model="lastName" v-model.trim="$v.lastName.$model"></md-input>
        </md-field>
        <div v-if="$v.lastName.$dirty" class="error">
          <span v-if="!$v.lastName.required">Last name is required!</span>
          <span
            v-else-if="!$v.lastName.minLength || !$v.lastName.maxLength"
          >Minimum length is 4 chars, max - 15!</span>
        </div>

        <md-field>
          <label>Gender</label>
          <md-select v-model="gender" md-dense v-model.trim="$v.gender.$model">
            <md-option value="M">M</md-option>
            <md-option value="F">F</md-option>
          </md-select>
        </md-field>
        <div v-if="$v.gender.$dirty" class="error">
          <span v-if="!$v.gender.required">Gender is required!</span>
        </div>

        <md-field>
          <label>Age</label>
          <md-input v-model="age" v-model.trim="$v.age.$model"></md-input>
        </md-field>
        <div v-if="$v.age.$dirty" class="error">
          <span
            class="error"
            v-if="!$v.age.ageValidatior"
          >Age is required and must be a number between 18 - 60</span>
        </div>
      </div>

      <div class="actions md-layout md-alignment-center">
        <md-button
          class="md-raised md-primary"
          @click="registered"
          :disabled="this.$v.$invalid"
        >Registered</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { signUp } from "./../../../services/auth.service";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";
import { addNotification } from "./../../../services/notifications";

const ageValidatior = value => value >= 18 && value <= 60;

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      confPassword: "",
      firstName: "",
      lastName: "",
      gender: "",
      age: ""
    };
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8), maxLength: maxLength(20) },
    confPassword: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20),
      sameAs: sameAs(function() {
        return this.password;
      })
    },
    firstName: { required, minLength: minLength(4), maxLength: maxLength(15) },
    lastName: { required, minLength: minLength(4), maxLength: maxLength(15) },
    gender: { required },
    age: { required, ageValidatior }
  },
  methods: {
    async registered() {
      if (!this.$v.$invalid) {
        const data = {
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          age: this.age
        };
        await signUp(data);
      } else {
        addNotification("Form is invalid!");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  padding: 20px;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.error {
  border: 2px;
  border-color: red;
  color: red;
  margin: 0 0 0 15px;
  padding-bottom: 15px;
}

.md-field.md-focused label {
  font-size: 17px;
  top: -10px;
}

.md-field.md-has-value label {
  font-size: 13px;
  top: -10px;
}

.md-button {
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 2rem;
  min-width: 150px;
}

.container {
  display: flex;
  align-items: center;
}

.md-input,
.md-select {
  background-color: white !important;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 2rem;
  padding-left: 20px !important;
  border-bottom: none;
  min-width: 23rem;
}

.md-field.md-theme-default:after,
.md-field.md-theme-default:before {
  background-color: transparent;
}

label {
  padding-left: 10px !important;
}
</style>
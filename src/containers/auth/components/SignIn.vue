<template>
  <div class="container">
    <div class="center">
      <div class="form">
        <h2 class="title">SIGN IN</h2>
        <md-field>
          <label>E-mail</label>
          <md-input v-model="email" v-model.trim="$v.email.$model" autofocus></md-input>
        </md-field>

        <div v-if="$v.email.$dirty" class="error">
          <span v-if="!$v.email.required">Email is required!</span>
          <span v-else-if="!$v.email.email">Invalid email!</span>
        </div>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="password" v-model.trim="$v.password.$model" type="password"></md-input>
        </md-field>

        <div v-if="$v.password.$dirty" class="error">
          <span v-if="!$v.password.required">Password is required!</span>
          <span v-else-if="!$v.password.minLength || !$v.password.maxLength">Minimum length is 8 chars, max - 20!</span>
        </div>
      </div>

      <div class="actions md-layout md-alignment-center">
        <md-button class="md-raised md-primary" @click="auth" :disabled="this.$v.$invalid">Log in</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { signIn } from "./../../../services/auth.service";
import { addNotification } from "./../../../services/notifications";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "SignIn",
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8), maxLength: maxLength(20)}
  },
  methods: {
    async auth() {
      if (!this.$v.$invalid) {
        await signIn(this.email, this.password);
      } else {
        addNotification('Form is invalid!');
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

.error {
  border: 2px;
  border-color: red;
  color: red;
  margin: 0 0 0 15px;
  padding-bottom: 15px;
}

.center {
  margin-left: auto;
  margin-right: auto;
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

.md-input {
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
<template>
  <div class="left-container">
    <div class="form">
      <h2 class="title">SIGN IN</h2>
      <md-field>
        <label>E-mail</label>
        <md-input v-model="login.email" autofocus></md-input>
      </md-field>

      <md-field md-has-password>
        <label>Password</label>
        <md-input v-model="login.password" type="password"></md-input>
      </md-field>
    </div>

    <div class="actions md-layout md-alignment-center">
      <md-button class="md-raised md-primary" @click="auth">Log in</md-button>
    </div>
  </div>
</template>

<script>
import { signIn } from "./../../services/auth.service";

export default {
  name: "SignIn",
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async auth() {
      await signIn(this.login.email, this.login.password).finally(() => {
        
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  padding: 20px;
}

.md-button {
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 2rem;
  min-width: 150px;
}

.left-container {
  display: inline-block;
  align-items: center;
  justify-content: left;
  position: relative;
  margin: 5%;
  min-width: 23rem;
}

.md-input {
  background-color: white !important;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 2rem;
  padding-left: 20px !important;
  border-bottom: none;
}

.md-field.md-theme-default:after,
.md-field.md-theme-default:before {
  background-color: transparent;
}

label {
  padding-left: 10px !important;
}

</style>
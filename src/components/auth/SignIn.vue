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

    <div class="loading-overlay" v-if="loading">
      <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
    </div>
  </div>
</template>

<script>
import { signIn } from "./../../services/auth.service";

export default {
  name: "SignIn",
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async auth() {
      this.loading = true;
      await signIn(this.login.email, this.login.password).finally(() => {
        this.loading = false;
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

.loading-overlay {
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
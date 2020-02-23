<template>
  <div class="right-container">
    <div class="form">
      <h2 class="title">SIGN UP</h2>
      <md-field>
        <label>E-mail</label>
        <md-input v-model="reg.email" autofocus></md-input>
      </md-field>

      <md-field md-has-password>
        <label>Password</label>
        <md-input v-model="reg.password" type="password"></md-input>
      </md-field>
    </div>

    <div class="actions md-layout md-alignment-center">
      <md-button class="md-raised md-primary">Registered</md-button>
    </div>

    <div class="loading-overlay" v-if="loading">
      <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      loading: false,
      reg: {
        email: "",
        password: ""
      }
    };
  },
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

.right-container {
  display: inline-block;
  align-items: center;
  justify-content: right;
  position: relative;
  min-width: 23rem;
  margin: 5%;
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
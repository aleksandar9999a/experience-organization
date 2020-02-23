<template>
  <div class="container">
    <div class="center">
      <div class="form">
        <h2 class="title">SIGN UP</h2>
        <md-field>
          <label>E-mail</label>
          <md-input v-model="reg.email"></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="reg.password" type="password"></md-input>
        </md-field>

        <md-field>
          <label>First Name</label>
          <md-input v-model="reg.firstName"></md-input>
        </md-field>

        <md-field>
          <label>Last Name</label>
          <md-input v-model="reg.lastName"></md-input>
        </md-field>

        <md-field>
          <label>Gender</label>
          <md-select v-model="reg.gender" md-dense>
            <md-option value="M">M</md-option>
            <md-option value="F">F</md-option>
          </md-select>
        </md-field>

        <md-field>
          <label>Age</label>
          <md-input v-model="reg.age"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center">
        <md-button class="md-raised md-primary" @click="showLoader">Registered</md-button>
      </div>
      <div class="actions md-layout md-alignment-center">
        <md-button class="md-raised md-accent" @click="log">Log In</md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      reg: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: ""
      }
    };
  },
  methods: {
    showLoader() {
      this.$store.commit("showLoader");
      setTimeout(() => {
        this.$store.commit("hideLoader");
      }, 5000);
    },
    log() {
      this.$store.commit("changeRegOrLog");
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
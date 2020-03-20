<template>
  <div class="auth">
    <div class="md-layout">
        <div class="big-logo md-layout-item md-small-size-100">
          <Logo></Logo>
        </div>
        <div class="sign md-layout-item md-small-size-100">
          <SignIn v-if="state"></SignIn>
          <SignUp v-else></SignUp>
          <div class="center">
            <p class="md-caption">Do you have an account?</p>
            <md-button class="md-accent" v-if="state" @click="changeState">Register</md-button>
            <md-button class="md-accent" v-else @click="changeState">Log In</md-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Logo from "./components/Logo";

export default {
  name: "Sign",
  components: {
    SignIn,
    SignUp,
    Logo
  },
  data: function() {
    return {
      state: true
    }
  },
  methods: {
    changeState() {
      this.state = !this.state;
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  background: linear-gradient(95deg, #f8236aad 40%, #fae842 65%) !important;
  min-height: 1000px;
  padding-bottom: 10%;
  display: inline-flex;
}

.md-caption{
  margin-top: 30px;
  margin-bottom: 0;
}

.center{
  text-align: center;
  margin-bottom: auto;
  margin-top: auto;
}

.big-logo {
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;
}

.sign {
  width: 40%;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
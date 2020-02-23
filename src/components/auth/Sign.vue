<template>
  <div class="auth">
    <div class="center">
      <div class="logo-container">
        <img src="./../../assets/logo.png" class="logo block" />
        <h1>Experience Organizer</h1>
        <h5 class="md-body-1">A beautiful application for easy organization tracking!</h5>
      </div>
    </div>
    <div class="center md-layout">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default {
  name: "Sign",
  components: {
    SignIn,
    SignUp
  }
};
</script>

<style lang="scss" scoped>
.auth {
  background: linear-gradient(95deg, #f8236aad 40%, #fae842 65%) !important;
  min-height: 1000px;
}

.logo-container {
  padding-top: 4%;
  display: inline-block;
  text-align: center;
}

.center {
  justify-content: center;
  display: flex;
}

.logo {
  width: auto;
  max-height: 200px;
}
</style>
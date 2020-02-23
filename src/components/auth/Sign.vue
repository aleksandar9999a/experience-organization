<template>
  <div class="auth md-layout">
    <div class="container md-layout md-gutter">
        <div class="logo md-layout-item md-small-size-100">
          <Logo></Logo>
        </div>
        <div class="sign md-layout-item md-small-size-100">
          <SignIn v-if="regOrLog"></SignIn>
          <SignUp v-else></SignUp>
        </div>
      </div>
  </div>
</template>

<script>
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Logo from "./Logo";
import { mapState } from 'vuex';

export default {
  name: "Sign",
  components: {
    SignIn,
    SignUp,
    Logo
  },
  computed: mapState(["regOrLog"])
};
</script>

<style lang="scss" scoped>
.auth {
  background: linear-gradient(95deg, #f8236aad 40%, #fae842 65%) !important;
  min-height: 1000px;
  padding-bottom: 15%;
  display: inline-flex;
}

.container {
  margin-left: auto;
  margin-right: auto;
}

.logo {
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
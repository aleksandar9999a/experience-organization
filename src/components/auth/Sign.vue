<template>
  <div>
      <SignIn></SignIn>
      <SignUp></SignUp>
  </div>
</template>

<script>
import SignIn from './SignIn';
import SignUp from './SignUp';

export default {
    name: 'Sign',
    components: {
        SignIn,
        SignUp
    }
}
</script>

<style lang="scss" scoped>
</style>
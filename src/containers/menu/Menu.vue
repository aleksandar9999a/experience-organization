<template>
  <md-list class="menu">
    <ProfileInformation />
    <ListOfRoutes />
  </md-list>
</template>

<script>
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import ListOfRoutes from './ListOfRoutes/ListOfRoutes';

export default {
  name: "Menu",
  components: { ProfileInformation, ListOfRoutes }
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  background: linear-gradient(to top, #626772, #3f89ff);
}
</style>

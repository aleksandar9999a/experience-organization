<template>
  <div class="home">
    <md-empty-state md-rounded :md-size="size">
      <img src="./../../assets/logo.png" />
      <p class="md-headline">Experience Organizer</p>
      <p class="md-subheading">Create your organization and track it easy!</p>
      <md-button class="md-primary md-raised">Create</md-button>
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function(){
      return {
          size: 520
      }
  }
};
</script>

<style lang="scss" scoped>
    .home{
        min-height: 600px;
        display: flex;
    }

    .md-empty-state{
        margin-bottom: auto;
        margin-top: auto;
        max-width: 1000px !important;
    }

    p{
        margin-block-start: 0;
    }

</style>
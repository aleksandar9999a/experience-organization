<template>
  <div class="details">
    <div v-if="data" class="wrapper">
      <div class="title-div">
        <h3 class="md-display-3">{{data.name}}</h3>
        <h4 class="md-display-2">{{data.description}}</h4>
      </div>
      <h4 class="md-display-1">Steps</h4>
      <div class="steps-div">
        <Stepper :steps="data.steps" />
      </div>
      <h4 class="md-display-1">Members</h4>
      <div class="chips-div">
        <Chips class="chips" :members="data.members" />
      </div>
    </div>
  </div>
</template>

<script>
import { getProject } from "./../../services/firestore.service";
import Stepper from "./Stepper";
import Chips from "./Chips";

export default {
  name: "Details",
  components: {
    Stepper,
    Chips
  },
  data: function() {
    return {
      data: null
    };
  },
  created: function() {
    this.$bind("data", getProject(this.$route.params.id));
  }
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
}
.wrapper {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.title-div {
  text-align: center;
}

.steps-div{
    margin: 20px;
}

.chips-div{
    display: flex;
    margin: 20px;
}
.chips{
    margin-right: auto;
}
</style>
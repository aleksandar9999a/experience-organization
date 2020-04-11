<template>
  <div>
    <h3 class="md-display-1">Steps</h3>
    <div class="steps-div">
      <Stepper :steps="data.steps" />
    </div>
    <h3 class="md-display-1">Members</h3>
    <div class="chips-div">
      <Chips class="chips" :id="data.id" :members="data.members" :requests="data.requests" />
    </div>
    <h3 class="md-display-1">Date</h3>
    <div class="date-div">
      <Date :start="data.start" :end="data.end" />
    </div>
  </div>
</template>

<script>
import Stepper from "./components/Stepper";
import Chips from "./components/Chips";
import Date from "./components/Date";

export default {
  name: "Information",
  components: {
    Stepper,
    Chips,
    Date
  },
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.md-display-1 {
  text-align: center;
}

.steps-div {
  margin: 20px;
}

.chips-div {
  display: flex;
  margin: 20px;
}
.chips {
  margin-right: auto;
}
</style>
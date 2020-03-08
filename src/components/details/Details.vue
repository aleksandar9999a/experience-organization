<template>
  <div class="details">
    <div v-if="data" class="wrapper">
      <div class="title-div">
        <h1 class="md-display-3">{{data.name}}</h1>
        <h2 class="md-subheading">{{data.description}}</h2>
      </div>
      <div class="second-wrapper">
        <div class="info">
          <h3 class="md-display-1">Steps</h3>
          <div class="steps-div">
            <Stepper :steps="data.steps" />
          </div>
          <h3 class="md-display-1">Members</h3>
          <div class="chips-div">
            <Chips class="chips" :members="data.members" />
          </div>
          <h3 class="md-display-1">Date</h3>
          <div class="date-div">
            <Date :start="data.start" :end="data.end" />
          </div>
        </div>
        <div class="diary">
            <h3 class="md-display-1">Diary</h3>
            <Diary :projectId="data.id" :diary="data.diary" />
        </div>
      </div>
      <div class="status-div">
        <Status :status="data.status" :projectId="data.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { getProject } from "./../../services/firestore.service";
import Stepper from "./Stepper";
import Chips from "./Chips";
import Date from "./Date";
import Status from "./Status";
import Diary from "./Diary";

export default {
  name: "Details",
  components: {
    Stepper,
    Chips,
    Date,
    Status,
    Diary
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

.second-wrapper{
    display: inline-flex;
    width: 100%;
}

.info,
.diary  {
  width: 50%;
  min-width: 400px;
}

.md-display-1{
    text-align: center;
}

.title-div {
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
<template>
  <div class="details">
    <div v-if="data" class="wrapper">
      <div class="title-div">
        <h1 class="md-display-3">{{data.name}}</h1>
        <h2 class="md-subheading">{{data.description}}</h2>
      </div>
      <div class="second-wrapper">
        <div class="info" v-if="data">
          <Information :data="data"/>
        </div>
        <div class="diary">
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
import Diary from "./Diary/Diary";
import Information from "./Information/Information";
import Status from "./Status";

export default {
  name: "Details",
  components: {
    Information,
    Diary,
    Status
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
    display: flex;
    width: 100%;
    overflow: hidden;
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
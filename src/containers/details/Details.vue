<template>
  <div class="details">
    <div v-if="data" class="wrapper">
      <div class="title-div">
        <h1 class="md-display-3">{{data.name}}</h1>
        <h2 class="md-subheading">{{data.description}}</h2>
      </div>
      <div class="second-wrapper" v-if="isMember">
        <div class="info" v-if="data">
          <Information :data="data"/>
        </div>
        <div class="diary">
            <Diary :projectId="data.id" :diary="data.diary" />
        </div>
      </div>
      <div class="status-div" v-if="isMember">
        <Status :status="data.status" :projectId="data.id" />
      </div>
      <div class="not-a-member" v-else> 
        <h1 class="md-display-2">Sorry, You must be a member to view all information.</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { getProject } from "./../../services/firestore.service";
import { auth } from "./../../firebase";
import Diary from "./Diary/Diary";
import Information from "./Information/Information";
import Status from "./Status/Status";

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
  },
  computed: {
    isMember: function(){
      if (auth.currentUser && this.data) {
        const uid = auth.currentUser.uid;
        if (this.data.members.includes(uid)) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  height: inherit;
  margin: 2%;
}

.not-a-member{
  height: inherit;
  display: flex;
}

.md-display-2{
  margin: auto;
  text-align: center;
}

.wrapper {
  width: 80%;
  height: inherit;
  margin-left: auto;
  margin-right: auto;
}

.second-wrapper{
    display: flex;
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
<template>
  <div class="status-div">
    <div class="status" @click="edit = !edit">
      <div v-if="edit">
        <md-field>
          <md-select v-model="newStatus" name="status-select" id="status-select">
            <md-option value="Active">Active</md-option>
            <md-option value="Closed">Closed</md-option>
          </md-select>
        </md-field>
      </div>
      <div v-else>{{status}}</div>
    </div>
  </div>
</template>

<script>
import { updateFieldFromProject } from "./../../services/firestore.service";

export default {
  name: "Status",
  props: ["status", "projectId"],
  data: function() {
    return {
      edit: true,
      newStatus: null
    };
  },
  created: function() {
    this.newStatus = this.status;
  },
  watch: {
    newStatus: function() {
      if (this.newStatus !== this.status) {
        updateFieldFromProject(this.projectId, "status", this.newStatus);
        this.edit = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.status-div {
  display: flex;
  margin: 50px;
}
.status {
  margin: auto;
  background: linear-gradient(to right, #a8ff78, #78ffd6);
  padding: 20px;
  border-radius: 70%;
  text-align: center;
  font-size: 22px;
}
</style>
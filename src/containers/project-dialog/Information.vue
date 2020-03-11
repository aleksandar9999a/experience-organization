<template>
  <div>
    <md-field>
      <label>Project Name</label>
      <md-input v-model="name" required></md-input>
    </md-field>
    <md-field>
      <label>Description</label>
      <md-textarea v-model="description" required></md-textarea>
    </md-field>
    <div class="date">
      <div class="block">
        <md-datepicker v-model="start">
          <label>Start Date</label>
        </md-datepicker>
      </div>
      <div class="block">
        <md-datepicker v-model="end">
          <label>End Date</label>
        </md-datepicker>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setName,
  setDesc,
  setStartDate,
  setEndDate
} from "./../../services/project-dialog.service";

export default {
  name: "Information",
  data: function() {
    return {
      name: "",
      description: "",
      start: null,
      end: null
    };
  },
  watch: {
    start: function() {
      setStartDate(this.start);
    },
    end: function() {
      setEndDate(this.end);
    },
    name: function() {
      setName(this.name);
    },
    description: function() {
      setDesc(this.description);
    }
  }
};
</script>

<style lang="scss" scoped>
.date {
  display: flex;
  justify-content: center;
}

.block + .block {
  padding-left: 50px;
}
</style>
<template>
  <md-dialog :md-active="state" :md-closed="clearForm">
    <md-dialog-title>New Project</md-dialog-title>

    <md-tabs md-dynamic-height md-alignment="centered">
      <md-tab md-label="Information">
        <Information />
      </md-tab>

      <md-tab md-label="Members">
        <Members />
      </md-tab>

      <md-tab md-label="Steps">
        <Steps />
      </md-tab>
    </md-tabs>

    <md-dialog-actions>
      <md-button class="md-primary" @click="createProject">Create Project</md-button>
      <md-button class="md-primary" @click="changeState">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import {
  getShowDialog,
  changeShowDialog,
  submitProject,
  clear
} from "./../../services/project-dialog.service";
import Information from "./Information";
import Members from "./Members";
import Steps from "./Steps";

export default {
  name: "ProjectDialog",
  components: { Information, Members, Steps },
  methods: {
    changeState() {
      changeShowDialog();
    },
    createProject(){
        submitProject();
    },
    clearForm(){
      clear();
    }
  },
  computed: {
    state: function() {
      return getShowDialog();
    }
  }
};
</script>

<style lang="scss" scoped>
.md-dialog {
  display: inline-block;
  max-width: 768px;
  overflow: auto;
  z-index: 9;
}

.md-dialog-title {
  text-align: center;
}
</style>
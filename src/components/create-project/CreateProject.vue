<template>
    <md-steppers :md-active-step.sync="stepper.active" md-alternative>
      <md-step id="first" md-label="Image" :md-done.sync="stepper.first">
        <ProjectImage></ProjectImage>
      </md-step>

      <md-step id="second" md-label="Title" :md-done.sync="stepper.second">
        <ProjectName></ProjectName>
      </md-step>

      <md-step id="third" md-label="Team" :md-done.sync="stepper.third">
        <ProjectMembers></ProjectMembers>
      </md-step>

      <md-step id="four" md-label="Steps" :md-done.sync="stepper.four">
        <ProjectSteps></ProjectSteps>
      </md-step>
    </md-steppers>
</template>

<script>
import ProjectImage from "./ProjectImage";
import ProjectName from "./ProjectName";
import ProjectMembers from "./ProjectMembers";
import ProjectSteps from "./ProjectSteps";
import { getStepperState } from './../../services/create-project.service';

export default {
  name: "CreateProject",
  components: { ProjectImage, ProjectName, ProjectMembers, ProjectSteps },
  data: function(){
    return {
      stepper: {}
    }
  },
  created: function(){
    return this.stepper = getStepperState();
  }
};
</script>

<style lang="scss" scoped>
.md-steppers{
  background: none;
  margin: 20px;
}
</style>
<template>
    <md-steppers md-alternative>
      <md-step id="first" md-label="Image">
        <ProjectImage></ProjectImage>
      </md-step>

      <md-step id="second" md-label="Title">
        <ProjectName></ProjectName>
      </md-step>

      <md-step id="third" md-label="Team">
        <ProjectMembers></ProjectMembers>
      </md-step>

      <md-step id="four" md-label="Steps">
        <ProjectSteps></ProjectSteps>
      </md-step>
    </md-steppers>
</template>

<script>
import ProjectImage from "./ProjectImage";
import ProjectName from "./ProjectName";
import ProjectMembers from "./ProjectMembers";
import ProjectSteps from "./ProjectSteps";

export default {
  name: "CreateProject",
  components: { ProjectImage, ProjectName, ProjectMembers, ProjectSteps }
};
</script>

<style lang="scss" scoped>
.md-steppers{
  background: none;
  margin: 20px;
}
</style>
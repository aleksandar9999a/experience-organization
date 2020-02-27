<template>
  <div class="project-form">
    <ProjectImage></ProjectImage>
    <ProjectName></ProjectName>
    <ProjectMembers></ProjectMembers>
    <ProjectSteps></ProjectSteps>
    <ProjectProgress></ProjectProgress>
  </div>
</template>

<script>
import ProjectImage from './ProjectImage';
import ProjectName from './ProjectName';
import ProjectMembers from './ProjectMembers';
import ProjectSteps from './ProjectSteps';
import ProjectProgress from './ProjectProgress';

export default {
  name: "CreateProject",
  components: {ProjectImage, ProjectName, ProjectMembers, ProjectSteps, ProjectProgress}
};
</script>

<style lang="scss" scoped>
.project-form {
  min-height: 900px;
  padding-top: 5%;
}
</style>
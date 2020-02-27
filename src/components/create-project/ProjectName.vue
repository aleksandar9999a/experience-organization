<template>
  <div class="project-name">
        <md-field>
          <label>Project Name</label>
          <md-input></md-input>
        </md-field>
    </div>
</template>

<script>
export default {
  name: "ProjectName"
};
</script>

<style lang="scss" scoped>
.project-name{
    min-height: 100px;
}

.md-field{
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}

.md-field.md-focused label {
  font-size: 17px;
  top: -7px;
}

.md-field.md-has-value label {
  font-size: 19px;
  top: -8px;
}

label {
  font-size: 15px;
  display: block;
  width: 100%;
  white-space:nowrap;
  text-align: center;
}

.md-field.md-theme-default:after,
.md-field.md-theme-default:before {
  background-color: transparent;
}

.md-input {
  background-color: white !important;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 2rem;
  padding-left: 20px !important;
  border-bottom: none;
  min-width: 23rem;
}
</style>
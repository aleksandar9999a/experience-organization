<template>
  <div class="project-name">
    <div class="project">
      <div class="center">
        <h1 class="md-display-1">Choose Project Name</h1>
      </div>
      <md-field>
        <label>Project Name</label>
        <md-input></md-input>
      </md-field>
      <div class="center">
        <p class="md-caption">Write it in field.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectName"
};
</script>

<style lang="scss" scoped>
.project-name {
  height: 400px;
  display: flex;
}

.project{
  margin: auto;
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
  white-space: nowrap;
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
  min-width: 10rem;
}

.center {
  text-align: center;
}
</style>
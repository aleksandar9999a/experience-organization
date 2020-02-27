<template>
  <div class="project-img">
    <img class="project-profile" :src="img" />
  </div>
</template>

<script>
export default {
  name: "ProjectImage",
  data: function() {
    return {
      img:
        "https://firebasestorage.googleapis.com/v0/b/experience-organization.appspot.com/o/profile%2FunkItem.svg?alt=media&token=e1aaca08-d10f-4847-bc5b-1ae66d4768bb"
    };
  }
};
</script>

<style lang="scss" scoped>
.project-img {
  height: 150px;
  display: flex;
}
.project-img:before,
.project-img:after {
  content: "";
  flex: 1 1;
  margin: auto;
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}

.project-profile {
  height: 150px;
  margin-left: auto;
  margin-right: auto;
}

.project-profile:hover{
    opacity: 70%;
}
</style>
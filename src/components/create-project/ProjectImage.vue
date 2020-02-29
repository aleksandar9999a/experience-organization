<template>
  <div>
    <div class="project-img">
      <label class="custom-file-upload">
        <img class="project-profile" :src="imagePreview" />
        <input type="file" @change="handleImage($event)" />
      </label>
    </div>
    <div class="center">
      <h1 class="md-display-1">Choose Project Image</h1>
      <p class="md-caption">Click on field to select other image.</p>
      <md-button class="md-raised md-primary">Continue</md-button>
    </div>
  </div>
</template>

<script>
import { addImage } from './../../services/create-project.service';

export default {
  name: "ProjectImage",
  data: function() {
    return {
      imagePreview:
        "https://firebasestorage.googleapis.com/v0/b/experience-organization.appspot.com/o/profile%2FunkItem.svg?alt=media&token=e1aaca08-d10f-4847-bc5b-1ae66d4768bb"
    };
  },
  methods: {
    handleImage(e) {
      if (e.target.files[0]) {
        addImage(e.target.files[0]);
        
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="file"] {
  display: none;
}

.project-img {
  margin-top: 50px;
  margin-bottom: 50px;
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

.project-profile:hover {
  opacity: 70%;
}

.center {
  text-align: center;
}
</style>
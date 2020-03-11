<template>
  <div>
    <h3 class="md-display-1">Diary</h3>
    <div>
      <md-list class="md-triple-line" v-if="diary.length > 0">
        <DiaryItem v-for="(item, index) of diary" :key="index" :item="item" />
      </md-list>
    </div>
    <form class="submit-form" @submit="handleSubmit">
      <md-field>
        <label>What you make today?</label>
        <md-input v-model="text"></md-input>
      </md-field>
      <div class="submit-btn">
        <md-button type="submit" class="md-raised md-primary">Submit</md-button>
      </div>
    </form>
  </div>
</template>

<script>
import DiaryItem from "./DiaryItem";
import { updateDiaryFromProject } from "./../../../services/firestore.service";

export default {
  name: "Diary",
  components: {
    DiaryItem
  },
  props: ["projectId", "diary"],
  data: function() {
    return {
      text: null
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      updateDiaryFromProject(this.projectId, this.text).then(
        () => (this.text = null)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.submit-form {
  margin: 20px;
}

.md-display-1{
    text-align: center;
}

.md-field {
  width: 80%;
  margin: auto;
}

.submit-btn {
  display: flex;
  margin: 20px;
}

.md-button {
  margin: auto;
}
</style>
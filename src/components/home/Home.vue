<template>
  <div class="home">
    <div v-if="documents.length === 0" class="empty">
      <md-empty-state md-rounded :md-size="size">
        <img src="./../../assets/logo.png" />
        <p class="md-headline">Experience Organizer</p>
        <p class="md-subheading">Create your project and track it easy!</p>
        <md-button class="md-primary md-raised" @click="showDialog">Create</md-button>
      </md-empty-state>
    </div>
    <div v-else>
      <h1 class="md-display-3">List of Projects</h1>
      <p class="md-subheading">The list contains all projects where you are a member.</p>
      <List :documents="documents" />
    </div>
  </div>
</template>

<script>
import { getProjects } from "./../../services/firestore.service";
import { changeShowDialog } from "./../../services/project-dialog.service";
import List from "./../list/List";

export default {
  name: "home",
  components: { List },
  data: function() {
    return {
      size: 520,
      documents: []
    };
  },
  methods: {
    showDialog() {
      changeShowDialog();
    }
  },
  created: function() {
    this.$bind("documents", getProjects());
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: inherit;
}

.md-display-3 {
  text-align: center;
  margin-top: 8%;
}

.md-subheading {
  text-align: center;
}

.empty {
  display: flex;
  height: inherit;
}

.md-empty-state {
  margin-bottom: auto;
  margin-top: auto;
  max-width: 1000px !important;
}

p {
  margin-block-start: 0;
}
</style>
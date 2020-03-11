<template>
  <div class="my-projects">
    <div v-if="documents.length === 0" class="empty">
      <h1 class="md-display-2">You don't have projects!</h1>
    </div>
    <div v-else>
      <h1 class="md-display-3">List of Projects</h1>
      <p class="md-subheading">The list contains all your projects.</p>
      <List :documents="documents" />
    </div>
  </div>
</template>

<script>
import { getMyProjects } from "./../../services/firestore.service";
import List from "./../../components/list/List";

export default {
  name: "MyProjects",
  components: { List },
  data: function() {
    return {
      size: 520,
      documents: []
    };
  },
  created: function() {
    this.$bind("documents", getMyProjects());
  }
};
</script>

<style lang="scss" scoped>
.my-projects {
  height: inherit;
}

.empty{
  height: inherit;
  width: inherit;
  display: flex;
}

.md-display-2{
  margin: auto;
  text-align: center;
}

.md-display-3 {
  text-align: center;
  margin-top: 8%;
}

.md-subheading {
  text-align: center;
}

p {
  margin-block-start: 0;
}
</style>
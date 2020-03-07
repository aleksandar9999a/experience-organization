<template>
  <div class="search">
    <List :documents="documents" />
  </div>
</template>

<script>
import { getProjects } from "./../../services/firestore.service";
import List from "./../list/List";

export default {
  name: "Search",
  components: { List },
  data: function() {
    return {
      size: 520,
      documents: []
    };
  },
  created: function() {
    this.$bind("documents", getProjects());
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: inherit;
}

.md-display-3 {
  text-align: center;
  margin-top: 8%;
}

.md-subheading {
  text-align: center;
}

</style>
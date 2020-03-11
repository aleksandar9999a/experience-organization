<template>
  <div class="search">
    <div class="search-field">
      <h1 class="md-display-3">Search</h1>
      <md-field>
        <label>Do you search some project?</label>
        <md-input v-model="name"></md-input>
      </md-field>
      <div class="search-submit-btn">
        <md-button class="md-raised md-primary" @click="search">Search</md-button>
      </div>
    </div>
    <List v-if="documents.length > 0" :documents="documents" />
    <div v-else>
      <h2 class="md-display-2">Try to search something!</h2>
    </div>
  </div>
</template>

<script>
import { getProjectsByName } from "./../../services/firestore.service";
import List from "./../../components/list/List";

export default {
  name: "Search",
  components: { List },
  data: function() {
    return {
      name: '',
      documents: []
    };
  },
  methods: {
    search: function(){
      this.$bind("documents", getProjectsByName(this.name));
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: inherit;
}

.search-field {
  width: 50%;
  margin: auto;
}

.search-submit-btn{
  display: flex;
}

.md-button {
  margin: auto;
}

.md-display-3,
.md-display-2 {
  text-align: center;
  margin-top: 8%;
}

.md-subheading {
  text-align: center;
}
</style>
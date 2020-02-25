<template>
  <div class="home">
    <div v-if="documents.length === 0" class="empty">
      <md-empty-state md-rounded :md-size="size">
        <img src="./../../assets/logo.png" />
        <p class="md-headline">Experience Organizer</p>
        <p class="md-subheading">Create your organization and track it easy!</p>
        <md-button class="md-primary md-raised">Create</md-button>
      </md-empty-state>
    </div>
    <div v-else>
      <h1 class="md-display-3">List of Organizations</h1>
      <p class="md-subheading">The list contains all the organizations where you are a member.</p>
      <md-list>
        <md-list-item v-for="doc of documents" :key="doc.id" :to="'/organization/' + doc.id">
          <md-avatar>
            <img :src="doc.image" :alt="doc.title" />
          </md-avatar>
          <span class="md-list-item-text">{{doc.title}}</span>
          <md-button class="md-button md-list-action">
            Open
          </md-button>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
import { getOrganizations } from "./../../services/firestore.service";

export default {
  name: "home",
  data: function() {
    return {
      size: 520,
      documents: []
    };
  },
  firestore: {
    documents: getOrganizations()
  }
};
</script>

<style lang="scss" scoped>
.md-display-3{
  text-align: center;
  margin-top: 8%;
}

.md-subheading{
  text-align: center;
}

.empty {
  display: flex;
  min-height: 600px;
}

.md-empty-state {
  margin-bottom: auto;
  margin-top: auto;
  max-width: 1000px !important;
}

.md-list {
  margin: 10%;
  margin-top: 5%;
}

p {
  margin-block-start: 0;
}
</style>
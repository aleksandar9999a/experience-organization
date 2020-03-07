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
      <md-list class="md-double-line">
        <div v-bind:style="{height: (72 * documents.length) + 'px'}">
          <div class="color"></div>
          <div class="list">
            <md-list-item v-for="doc of documents" :key="doc.id" :to="'/details/' + doc.id">
              <div class="project-name">
                <span class="md-list-item-text class item-title">Project Name</span>
                <span class="md-list-item-text">{{doc.name}}</span>
              </div>
              <div v-if="doc.status === 'Active'">
                <span class="md-list-item-text item-title">Start Time</span>
                <span class="md-list-item-text">{{doc.start}}</span>
              </div>
              <div v-else>
                <span class="md-list-item-text item-title">End Time</span>
                <span class="md-list-item-text">{{doc.end}}</span>
              </div>
              <div class="item-status">
                <span class="md-list-item-text">{{doc.status}}</span>
              </div>
            </md-list-item>
          </div>
        </div>
      </md-list>
    </div>
  </div>
</template>

<script>
import { getProjects } from "./../../services/firestore.service";
import { changeShowDialog } from "./../../services/project-dialog.service";

export default {
  name: "home",
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
  created: function(){
      this.$bind('documents', getProjects());
  }
};
</script>

<style lang="scss" scoped>
.item-title {
  font-size: 12px;
}

.project-name{
  width: 30%;
}

.color {
  background: linear-gradient(to bottom, #2980b9, #6dd5fa, #a5def3);;
  width: 1%;
  height: inherit;
  float: left;
}

.list {
  float: right;
  width: 99%;
}

.item-status {
  background: linear-gradient(to right, #a8ff78, #78ffd6);
  padding: 15px;
  border-radius: 70%;
}

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

.md-list {
  margin: 10%;
  margin-top: 5%;
}

p {
  margin-block-start: 0;
}
</style>
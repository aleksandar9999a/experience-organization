<template>
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
                <span class="md-list-item-text">{{generateDate(doc.start)}}</span>
              </div>
              <div v-else>
                <span class="md-list-item-text item-title">End Time</span>
                <span class="md-list-item-text">{{generateDate(doc.end)}}</span>
              </div>
              <div class="item-status">
                <span class="md-list-item-text">{{doc.status}}</span>
              </div>
            </md-list-item>
          </div>
        </div>
      </md-list>
</template>

<script>
export default {
    name: 'List',
    props: {
        documents: Array
    },
    methods: {
      generateDate(timestamp) {
        const date = timestamp.toDate();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      }
    }
}
</script>

<style lang="scss" scoped>
.item-title {
  font-size: 12px;
}

.project-name {
  width: 30%;
}

.color {
  background: linear-gradient(to bottom, #2980b9, #6dd5fa, #a5def3);
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

.md-list {
  margin: 10%;
  margin-top: 5%;
}

</style>
<template>
  <div class="steps">
    <div class="title">
      <h1 class="md-display-1">Add Steps</h1>
    </div>
    <md-steppers md-vertical>
      <md-step v-for="step of steps" :key="step.id" :id="step.id" :md-label="step.name">
        <md-field>
          <label>Step Name</label>
          <md-input v-model="step.name">{{step.name}}</md-input>
        </md-field>
        <md-field>
          <label>Step Description</label>
          <md-textarea v-model="step.desc" md-autogrow>{{step.desc}}</md-textarea>
        </md-field>
        <md-field>
          <label>Members</label>
          <md-input></md-input>
          <md-icon>add</md-icon>
        </md-field>
        <md-chip v-for="user of step.members" :key="user.uid" class="md-primary" md-deletable>
          <md-avatar>
            <img :src="user.image" class="avatar" alt="Avatar" />
          </md-avatar>
          {{user.firstName}}
        </md-chip>
      </md-step>

      <div class="add-btn">
        <md-button class="md-icon-button" @click="addNewStep">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </md-steppers>
  </div>
</template>

<script>
import { getSteps, addStep } from './../../services/create-project.service';

export default {
  name: "ProjectSteps",
  data: function() {
    return {
      steps: []
    };
  },
  methods: {
    addNewStep: function() {
      addStep({ name: "Step Name", desc: "", members: [] });
    }
  },
  created: function() {
    this.steps = getSteps();
  }
};
</script>

<style lang="scss" scoped>
.steps {
  min-height: 600px;
}

.title {
  text-align: center;
}

.md-steppers {
  margin: 7%;
}

.md-avatar {
  height: 20px;
}

.avatar {
  width: 20px;
}

.add-btn {
  display: flex;
}

.md-button {
  margin-left: auto;
  margin-right: auto;
}
</style>
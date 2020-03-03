<template>
  <div>
    <md-field>
      <label>Project Name</label>
      <md-input v-model="name" @change="handleChanges('name')" required></md-input>
    </md-field>
    <md-field>
      <label>Description</label>
      <md-textarea v-model="description" @change="handleChanges('desc')" required></md-textarea>
    </md-field>
  </div>
</template>

<script>
import { setName, setDesc } from "./../../services/project-dialog.service";

export default {
  name: "Information",
  data: function(){
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    handleChanges(type){
      if (type === 'name') {
        return setName(this.name);
      } 
      if (type === 'desc') {
        return setDesc(this.description);
      }

      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
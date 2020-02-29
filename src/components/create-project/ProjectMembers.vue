<template>
  <div class="members">
    <div class="center-members">
    <div class="center">
        <h1 class="md-display-1">Choose members of your project</h1>
      </div>
    <div>
      <md-field>
        <label>Members</label>
        <md-input></md-input>
        <md-icon>add</md-icon>
      </md-field>
      <div class="list-of-members">
        <div class="center-list">
          <md-chip v-for="user of users" :key="user.uid" class="md-primary" md-deletable>
            <md-avatar>
              <img :src="user.image" class="avatar" alt="Avatar">
            </md-avatar>
            {{user.firstName}}
          </md-chip>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectMembers",
  data: function() {
    return {
      img: "https://firebasestorage.googleapis.com/v0/b/experience-organization.appspot.com/o/profile%2FunkItem.svg?alt=media&token=e1aaca08-d10f-4847-bc5b-1ae66d4768bb",
      users: [{ firstName: 'Alex', lastName: 'Todorov', image: 'https://firebasestorage.googleapis.com/v0/b/experience-organization.appspot.com/o/profile%2FunkItem.svg?alt=media&token=e1aaca08-d10f-4847-bc5b-1ae66d4768bb', uid: '2'}]
    };
  }
};
</script>

<style lang="scss" scoped>
.members {
  min-height: 400px;
  display: flex;
}

.center-members{
  margin: auto;
}

.add-member {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.md-field {
  margin-left: auto;
  margin-right: auto;
  width: 200px;
}

.md-field.md-focused label {
  font-size: 17px;
  top: -7px;
}

.md-field.md-has-value label {
  font-size: 19px;
  top: -8px;
}

label {
  font-size: 15px;
  display: block;
  width: 100%;
  white-space: nowrap;
  text-align: center;
}

.md-field.md-theme-default:after,
.md-field.md-theme-default:before {
  background-color: transparent;
}

.md-input {
  background-color: white !important;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 2rem;
  padding-left: 20px !important;
  border-bottom: none;
}

.md-icon {
  right: 30px;
}

.list-of-members {
  height: 100px;
  display: flex;
}

.center-list{
  margin-left: auto;
  margin-right: auto;
}

.center{
  text-align: center;
}

.md-avatar{
  height: 20px;
  width: 20px !important;
}

.avatar{
  width: 20px;
}
</style>
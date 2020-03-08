<template>
  <div class="status-div">
    <div class="status">{{status}}</div>
  </div>
</template>

<script>
export default {
  name: "Status",
  props: ["status"]
};
</script>

<style lang="scss" scoped>
.status-div {
  display: flex;
  margin: 50px;
}
.status {
  margin: auto;
  background: linear-gradient(to right, #a8ff78, #78ffd6);
  padding: 15px;
  border-radius: 70%;
  width: 25%;
  text-align: center;
  font-size: 22px;
}
</style>
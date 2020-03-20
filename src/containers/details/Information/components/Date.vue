<template>
  <div class="date">
    <p class="md-title">Start date: {{start | date}}</p>
    <p class="md-title">End date: {{end | date}}</p>
  </div>
</template>

<script>
export default {
  name: "Date",
  props: ['start', 'end']
};
</script>

<style lang="scss" scoped>
.date{
    display: inline-flex;
    width: 100%;
}

.md-title{
    width: 50%;
    text-align: center;
}
</style>
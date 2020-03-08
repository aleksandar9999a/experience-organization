<template>
  <div class="date">
    <p class="md-title">Start date: {{start}}</p>
    <p class="md-title">End date: {{end}}</p>
  </div>
</template>

<script>
export default {
  name: "Date",
  props: ['start', 'end'],
  data: function() {
    return {
        
    };
  },
  created: function() {
      console.log(this.start);
       console.log(this.end);
  }
};
</script>

<style lang="scss" scoped>
.date{
    display: inline-flex;
    width: 100%;
}

.md-title{
    width: 50%;
}
</style>
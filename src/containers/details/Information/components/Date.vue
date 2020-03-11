<template>
  <div class="date">
    <p class="md-title">Start date: {{generateDate(start)}}</p>
    <p class="md-title">End date: {{generateDate(end)}}</p>
  </div>
</template>

<script>
import timestampConverter from "./../../timestamp-converter";

export default {
  name: "Date",
  props: ['start', 'end'],
  methods: {
    generateDate(stamp) {
      return timestampConverter(stamp);
    }
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
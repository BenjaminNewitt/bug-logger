<template>
  <div class="car">
    <div class="col-3">{{ bugData.title }}</div>
    <div class="col-3">{{ bugData.reportedBy }}</div>
    <div class="col-3">open</div>
    <div class="col-3"></div>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  methods: {}
};
</script>

<style>
</style>
<template>
  <div class="bug">
    <router-link :to="{name: 'bugDetails', params: { id: bugData.id } }" class="row">
      <div class="col-3">{{ bugData.title }}</div>
      <div class="col-3">{{ bugData.reportedBy }}</div>
      <div class="col-3">open</div>
      <div class="col-3">{{ bugData.updatedAt}}</div>
    </router-link>
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
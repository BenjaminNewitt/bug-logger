<template>
  <div class="bug">
    <router-link :to="{name: 'bugDetails', params: { id: bugData.id } }" class="row">
      <div class="col-3">
        <p>{{ bugData.title }}</p>
      </div>
      <div class="col-3">
        <p>{{ bugData.reportedBy }}</p>
      </div>
      <div class="col-3">
        <p v-if="bugData.closed === false">open</p>
        <p v-if="bugData.closed === true">closed</p>
      </div>
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
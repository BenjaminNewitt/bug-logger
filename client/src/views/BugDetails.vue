<template>
  <div class="bug-details container-fluid">
    <header class="row">
      <div class="col-12"></div>
    </header>
    <main class="row"></main>
  </div>
</template>

<script>
export default {
  name: "BugDetails",
  mounted() {},
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style>
</style>
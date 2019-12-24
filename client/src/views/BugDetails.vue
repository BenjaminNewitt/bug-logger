<template>
  <div class="bug-details container-fluid">
    <header class="row">
      <div class="col-12"></div>
    </header>
    <main class="row">
      <div class="col-12">{{ bug}}</div>
    </main>
  </div>
</template>

<script>
export default {
  name: "BugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style>
</style>
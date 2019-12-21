<template>
<main class="home container-fluid">
  <header class="row">
    <div class="col-4">
      <h1>Current Bugs</h1>
    </div>
  </header>
  <body class="row">
    <div class="col-10 m-auto">
      <div class="row">
        <div class="col-3">
          <h4>Title</h4>
        </div>
        <div class="col-3">
          <h4>Reported By</h4>
        </div>
        <div class="col-3">
          <h4>Status</h4>
        </div>
        <div class="col-3">
          <h4>Last Modified</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12">{{ bugs }}</div>
      </div>
    </div>
  </body>
  <footer></footer>
</main>
</template>

<script>
// @ is an alias to /src
export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>
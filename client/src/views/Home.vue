<template>
<main class="home container-fluid">
  <header class="row">
    <div class="col-12 col-md-6">
      <h1>Current Bugs</h1>
    </div>
  </header>
  <body class="row">
    <div class="col-12">
      <form @submit.prevent="createBug">
        <input type="text" v-model="newBug.title" placeholder="bug title..." required />
        <input type="text" v-model="newBug.name" placeholder="your name..." required />
        <input type="text" v-model="newBug.title" placeholder="bug title..." required />
        <div class="form-group">
          <label for="bug-description"></label>
          <textarea class="form-control" id="bug-description" rows="3"></textarea>
        </div>
      </form>
    </div>
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
  data() {
    return {
      newBug: {
        title: "",
        reportedBy: "",
        description: ""
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        title: "",
        reportedBy: "",
        description: "",
        closed: false
      };
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>
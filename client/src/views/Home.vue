<template>
<main class="home container-fluid">
  <header class="row">
    <div class="col-12 col-md-6">
      <h1>Current Bugs</h1>
    </div>
  </header>
  <body class="row">
    <div class="col-3 m-auto border rounded">
      <form @submit.prevent="createBug">
        <div class="form-group">
          <label for="bug-title">bug title</label>
          <input
            type="text"
            v-model="newBug.title"
            class="form-control"
            id="bug-title"
            placeholder="title..."
            required
          />
        </div>
        <div class="form-group">
          <label for="bug-reported-by">reported by</label>
          <input
            type="text"
            v-model="newBug.reportedBy"
            class="form-control"
            id="bug-reported-by"
            placeholder="name..."
            required
          />
        </div>
        <div class="form-group">
          <label for="bug-description">bug description</label>
          <textarea
            class="form-control"
            v-model="newBug.description"
            id="bug-description"
            rows="3"
            placeholder="bug description..."
            required
          ></textarea>
        </div>
        <button class="btn btn-success" type="submit">Submit bug report</button>
      </form>
    </div>
    <div class="col-8 m-auto border rounded">
      <div class="row border-bottom">
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
        <div class="col-12" v-for="bug in bugs" :key="bug.id">
          <bug-component :bugData="bug" />
        </div>
      </div>
    </div>
  </body>
  <footer></footer>
</main>
</template>

<script>
// @ is an alias to /src
import BugComponent from "@/components/Bug";
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
      this.bugDetailsRoute();
    },
    bugDetailsRoute() {
      let activeBug = this.activeBug;
      this.$router.push({ name: "bugDetails", params: { id: activeBug.id } });
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
    }
  },
  components: {
    BugComponent
  }
};
</script>
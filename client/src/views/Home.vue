<template>
<main class="home container-fluid">
  <header class="row">
    <div class="col-12 mt-2"></div>
  </header>
  <body class="row">
    <div class="col-10 m-auto border rounded">
      <div class="row border-bottom">
        <div class="col-3">
          <h6>Bug</h6>
        </div>
        <div class="col-3">
          <h6>Reported By</h6>
        </div>
        <div class="col-3">
          <h6>Status</h6>
          <input type="checkbox" id="checkbox" v-model="checked" @change="filterBugs" /> filter
        </div>
        <div class="col-3">
          <h6>Last Modified</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-for="bug in bugs" :key="bug.id">
          <bug-component :bugData="bug" />
        </div>
      </div>
    </div>
    <div class="col-10 mr-auto ml-auto mt-2 border rounded">
      <form @submit.prevent="createBug" class="row">
        <div class="form-group col-3 mt-2">
          <input
            type="text"
            v-model="newBug.title"
            class="form-control"
            placeholder="title..."
            required
          />
        </div>
        <div class="form-group col-3 mt-2">
          <input
            type="text"
            v-model="newBug.reportedBy"
            class="form-control"
            placeholder="name..."
            required
          />
        </div>
        <div class="form-group col-12">
          <textarea
            class="form-control"
            v-model="newBug.description"
            rows="3"
            placeholder="bug description..."
            required
          ></textarea>
        </div>
        <button class="btn btn-success mb-2 col-4 offset-4" type="submit">Submit bug report</button>
      </form>
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
      },
      checked: false
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
    },
    filterBugs() {
      if (this.checked == true) {
        this.filterBugs;
      }
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
    },
    filteredBugs() {
      this.bugs.filter(b => !bug.closed);
    }
  },
  components: {
    BugComponent
  }
};
</script>
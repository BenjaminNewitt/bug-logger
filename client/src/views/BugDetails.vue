<template>
  <div class="bug-details container-fluid">
    <header class="row">
      <div class="col-12"></div>
    </header>
    <main class="row">
      <div class="col-10 mx-auto">
        <div class="row">
          <div class="col-12">
            <p>Title</p>
            <h1>{{bug.title}}</h1>
            <p>Reported by</p>
            <h2>{{bug.reportedBy}}</h2>
          </div>
          <div class="col-12 border">
            <p>{{ bug.description }}</p>
          </div>
          <div class="col-4">
            <button class="btn btn-danger">Close</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "BugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  data() {
    return {
      newNote: {
        content: "",
        reportedBy: ""
      }
    };
  },
  methods: {
    createNote() {
      let note = {
        content: this.content,
        reportedBy: this.reportedBy,
        bug: this.$route.params.id
      };
      this.$store.dispatch("createNote", note);
      (this.content = ""), (this.reportedBy = "");
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    note() {
      return this.$store.state.notes;
    }
  }
};
</script>

<style>
</style>
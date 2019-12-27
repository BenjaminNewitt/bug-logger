<template>
  <div class="notes">
    <h1>Notes</h1>
    <form @submit.prevent="createNote">
      <div class="form-group">
        <label for="note-reported-by">reported by</label>
        <input
          type="text"
          v-model="reportedBy"
          class="form-control"
          id="note-reported-by"
          placeholder="name..."
          required
        />
      </div>
      <div class="form-group">
        <label for="note-content">Comment</label>
        <input
          type="text"
          v-model="content"
          class="form-control"
          id="note-content"
          placeholder="comment here..."
          required
        />
      </div>
      <button class="btn btn-success" type="submit">Submit comment</button>
    </form>
    <div class="row">
      <div class="col-3">
        <h4>Name</h4>
      </div>
      <div class="col-6">
        <h4>Message</h4>
      </div>
      <div class="col-3">
        <h4>Delete</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  mounted() {
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  data() {
    return {
      content: "",
      reportedBy: ""
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
  }
};
</script>

<style>
</style>
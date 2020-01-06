<template>
  <div class="notes border rounded">
    <h4>Notes</h4>
    <div class="row text-center">
      <div class="col-2">
        <h4>Name</h4>
      </div>
      <div class="col-7">
        <h4>Message</h4>
      </div>
      <div class="col-2">
        <h4>Delete</h4>
      </div>
      <div class="col-12 border rounded" id="notes-container">
        <div class="row note-text" v-for="note in notes" :key="note.id">
          <div class="col-2">
            <p>{{ note.reportedBy }}</p>
          </div>
          <div class="col-8">
            <p>{{ note.content }}</p>
          </div>
          <div class="col-2">
            <i @click="deleteNote" class="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="createNote" class="row border rounded">
      <div class="form-group col-3">
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
      <div class="form-group col-3">
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
      <div class="col-3">
        <button class="btn btn-success btn-sm" type="submit">Submit comment</button>
      </div>
    </form>
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
    },
    deleteNote() {
      let note = this.$store.state.notes.find(
        note => note.bug == this.$route.params.id
      );
      console.log(note);
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this comment",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Your comment has been deleted", {
            icon: "success"
          });
          // TODO look at how to pass entire note object
          this.$store.dispatch("deleteNote", note);
        } else {
          swal("Your comment has not been deleted");
        }
      });
    }
  }
};
</script>

<style>
p {
  font-size: 10pt;
}
i {
  cursor: pointer;
}
#notes-container {
  width: auto;
  max-height: 20vh;
  overflow: auto;
}
</style>
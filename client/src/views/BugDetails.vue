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
            <button
              v-if="bug.closed === false"
              class="button btn btn-danger"
              @click="closeBug"
            >Close</button>
          </div>
          <div v-if="bug.closed === false" class="col-12">
            <form @submit.prevent="editBug">
              <div class="form-group">
                <textarea
                  class="form-control"
                  v-model="description"
                  rows="3"
                  placeholder="update description..."
                  required
                ></textarea>
              </div>
              <button class="btn btn-info">Edit</button>
            </form>
          </div>
          <notes class="col-12" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Notes from "../components/Notes";
export default {
  name: "BugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  data() {
    return {
      description: ""
    };
  },
  methods: {
    closeBug() {
      this.$store.dispatch("closeBug", this.$route.params.id);
    },
    editBug() {
      let editedBug = {
        description: this.description
      };
      console.log(editedBug);
      this.$store.dispatch("editBug", this.$route.params.id, editedBug);
      this.description = "";
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    note() {
      return this.$store.state.notes;
    }
  },
  components: {
    Notes
  }
};
</script>

<style>
</style>
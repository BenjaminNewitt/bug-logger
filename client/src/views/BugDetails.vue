<template>
  <div class="bug-details container-fluid">
    <header></header>
    <main class="row">
      <div class="col-5 mr-auto ml-auto">
        <div class="row">
          <div class="col-12">
            <h4>{{bug.title}}</h4>
            <p>Reported by: {{ bug.reportedBy }}</p>
          </div>
          <div class="col-12 border">
            <p>{{ bug.description }}</p>
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

              <button class="btn btn-info btn-sm">Edit</button>
            </form>
          </div>
          <div class="col-4">
            <button
              v-if="bug.closed === false"
              class="button btn btn-danger btn-sm"
              @click="closeBug"
            >Close Bug</button>
          </div>
        </div>
      </div>

      <notes class="col-5 mr-auto ml-auto" />
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
      swal({
        title: "Are you sure?",
        text: "Once closed, your bug cannot be reopened",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Your bug is now closed", {
            icon: "success"
          });
          this.$store.dispatch("closeBug", this.$route.params.id);
        } else {
          swal("Your bug has not been closed");
        }
      });
    },
    editBug() {
      let editedBug = {
        description: this.description,
        id: this.$route.params.id
      };
      this.$store.dispatch("editBug", editedBug);
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
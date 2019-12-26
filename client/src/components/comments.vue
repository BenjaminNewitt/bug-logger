<template>
  <div class="comments row-12">
    <h1>Notes</h1>
    <form @submit.prevent="createNote">
      <div class="form-group">
        <label for="note-reported-by">reported by</label>
        <input
          type="text"
          v-model="newNote.reportedBy"
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
          v-model="newNote.content"
          class="form-control"
          id="note-content"
          placeholder="comment here..."
          required
        />
      </div>
      <button class="btn btn-success" type="submit">Submit comment</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
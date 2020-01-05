<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row d-flex flex-row justify-content-between bg-success">
        <div class="col-3 text-white">Bug Hunter</div>
        <div id="nav" class="col-3 text-right">
          <router-link to="/" class="text-white">Home</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>
<style></style>

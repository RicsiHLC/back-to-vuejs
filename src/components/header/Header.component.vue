<template>
  <div class="header">
    <img alt="Main logo" src="../../assets/logo.png" />
    <div>{{ name }}</div>
    <div>{{ summary }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    name: String,
    summary: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
